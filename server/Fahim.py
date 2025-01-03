from transformers import T5ForConditionalGeneration, T5Tokenizer, DataCollatorForSeq2Seq, Seq2SeqTrainingArguments, Seq2SeqTrainer
from datasets import load_dataset, DatasetDict
import torch
from multiprocessing import freeze_support

def load_model_and_tokenizer(model_name="t5-small"):
    """Load the T5 model and tokenizer."""
    try:
        tokenizer = T5Tokenizer.from_pretrained(model_name, legacy=False)
        model = T5ForConditionalGeneration.from_pretrained(model_name)
        print("T5 small model and tokenizer loaded successfully!")
        return model, tokenizer
    except Exception as e:
        print(f"Error loading model and tokenizer: {e}")
        return None, None

def load_and_preprocess_dataset():
    """Load and preprocess the dataset."""
    try:
        dataset = load_dataset("SKNahin/bengali-transliteration-data")
        dataset = dataset["train"].train_test_split(test_size=0.2, seed=42)
        dataset = DatasetDict({
            "train": dataset["train"],
            "validation": dataset["test"]
        })
        print("Dataset created successfully")
        return dataset
    except Exception as e:
        print(f"Error loading or preprocessing dataset: {e}")
        return None

def tokenize_dataset(dataset, tokenizer):
    """Tokenize the dataset."""
    try:
        def preprocess_function(examples):
            inputs = examples["rm"]
            targets = examples["bn"]
            model_inputs = tokenizer(inputs, max_length=128, truncation=True, padding="max_length")
            with tokenizer.as_target_tokenizer():
                labels = tokenizer(targets, max_length=128, truncation=True, padding="max_length")
            model_inputs["labels"] = labels["input_ids"]
            return model_inputs

        tokenized_datasets = dataset.map(preprocess_function, batched=True, remove_columns=dataset["train"].column_names, num_proc=4)
        tokenized_datasets = tokenized_datasets.train_test_split(test_size=0.1)  # 10% for validation
        return tokenized_datasets
    except Exception as e:
        print(f"Error tokenizing dataset: {e}")
        return None

def train_model(model, tokenizer, tokenized_datasets):
    """Train the model."""
    try:
        data_collator = DataCollatorForSeq2Seq(tokenizer, model=model)

        training_args = Seq2SeqTrainingArguments(
            output_dir="./results",
            eval_strategy="epoch",
            learning_rate=2e-5,
            per_device_train_batch_size=16,
            per_device_eval_batch_size=16,
            weight_decay=0.01,
            save_total_limit=2,
            num_train_epochs=5,
            predict_with_generate=True,
            logging_dir="./logs",
            logging_strategy="epoch",
            save_strategy="epoch",
            fp16=True,  # Enable mixed precision training
            gradient_accumulation_steps=2,  # Accumulate gradients over 2 steps
            use_legacy_prediction_loop=False,
        )

        trainer = Seq2SeqTrainer(
            model=model,
            args=training_args,
            train_dataset=tokenized_datasets["train"],
            eval_dataset=tokenized_datasets["test"],
            data_collator=data_collator,
            tokenizer=tokenizer,
        )

        trainer.train()
        print("Model fine-tuned successfully!")
        return trainer
    except Exception as e:
        print(f"Error training model: {e}")
        return None

def save_model_and_tokenizer(model, tokenizer, save_dir="banglish-to-bangla-model"):
    """Save the model and tokenizer."""
    try:
        model.save_pretrained(save_dir)
        tokenizer.save_pretrained(save_dir)
        print(f"Model and tokenizer saved successfully at {save_dir}!")
    except Exception as e:
        print(f"Error saving model and tokenizer: {e}")

def chatbot(model, tokenizer):
    """Run the chatbot."""
    try:
        print("Banglish to Bangla Chatbot (type 'exit' to quit)")
        
        while True:
            user_input = input("You: ")
            if user_input.lower() == "exit":
                break

            input_text = "translate Banglish to Bangla: " + user_input
            input_ids = tokenizer(input_text, return_tensors="pt").input_ids
            
            with torch.no_grad():
                outputs = model.generate(input_ids)
            
            # Decode and print the output
            output_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
            print(f"Bot: {output_text}")
    except Exception as e:
        print(f"Error running chatbot: {e}")

def main():
    """Main function to execute the workflow."""
    try:
        # Step 1: Load model and tokenizer
        model, tokenizer = load_model_and_tokenizer()
        if model is None or tokenizer is None:
            return

        # Step 2: Load and preprocess the dataset
        dataset = load_and_preprocess_dataset()
        if dataset is None:
            return

        # Step 3: Tokenize the dataset
        tokenized_datasets = tokenize_dataset(dataset, tokenizer)
        if tokenized_datasets is None:
            return

        # Step 4: Train the model
        trainer = train_model(model, tokenizer, tokenized_datasets)
        if trainer is None:
            return

        # Step 5: Save the model and tokenizer
        save_model_and_tokenizer(model, tokenizer)

        # Step 6: Run the chatbot
        chatbot(model, tokenizer)

    except Exception as e:
        print(f"An error occurred in the main function: {e}")

if __name__ == '__main__':
    freeze_support()  # Required for multiprocessing on Windows
    main()