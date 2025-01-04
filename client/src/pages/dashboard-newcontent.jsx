import { useAppContext } from '@/App';
import { reqs } from '@/axios/requests';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { Download, Send, Wand, Bold, Italic, Underline, Strikethrough, List, ListOrdered, Quote, AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';
import { useState } from 'react';

export default function DashboardNewContent() {
  const { appUser } = useAppContext();
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [description, setDescription] = useState('');
  const [banglaText, setBanglaText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConvert = () => {
    if (appUser.token) {
      setLoading(true);
      axios
        .post(
          reqs.BANGLA_TEXT_GENERATOR,
          { text: description },
          {
            headers: {
              Authorization: `Bearer ${appUser.token}`,
            },
          }
        )
        .then((res) => {
          if (res.data?.response) {
            setBanglaText(res.data.response);
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          alert(
            'This PC does not have enough memory space available needed to run llama2 locally'
          );
        });
    } else {
      alert('User not logged in!');
    }
  };

  return (
    <div className='p-4 max-w-2xl'>
      <h1 className='my-5'>Content Information</h1>
      <div className='my-8 relative'>
        <p className='mb-2'>Title</p>
        <Input
          label='Title'
          placeholder='Enter title'
          props={{
            value: title,
            onChange: (e) => setTitle(e.target.value),
          }}
        />
        <Wand className='absolute right-3 top-10 text-gray-400' />
      </div>
      <div className='my-8 relative'>
        <p className='mb-2'>Caption</p>
        <Input
          label='Caption'
          placeholder='Enter caption'
          props={{
            value: caption,
            onChange: (e) => setCaption(e.target.value),
          }}
        />
        <Wand className='absolute right-3 top-10 text-gray-400' />
      </div>

      <div className='my-8'>
        <p className='mb-2'>Description</p>
        <div className='flex space-x-2 mb-2'>
          <Button variant='secondary'>
            <Bold />
          </Button>
          <Button variant='secondary'>
            <Italic />
          </Button>
          <Button variant='secondary'>
            <Underline />
          </Button>
          <Button variant='secondary'>
            <Strikethrough />
          </Button>
          <Button variant='secondary'>
            <List />
          </Button>
          <Button variant='secondary'>
            <ListOrdered />
          </Button>
          <Button variant='secondary'>
            <Quote />
          </Button>
          <Button variant='secondary'>
            <AlignLeft />
          </Button>
          <Button variant='secondary'>
            <AlignCenter />
          </Button>
          <Button variant='secondary'>
            <AlignRight />
          </Button>
          <Button variant='secondary'>
            <AlignJustify />
          </Button>
        </div>
        <Textarea
          label='Description'
          placeholder='Enter description'
          props={{
            value: description,
            onChange: (e) => setDescription(e.target.value),
          }}
        />
      </div>
      <div className='flex flex-row-reverse'>
        <Button onClick={handleConvert} disabled={loading} variant='secondary'>
          <Wand /> {loading ? 'generating...' : 'Convert'}
        </Button>
      </div>

      <div className='my-8 text-white'>
        <p className='mb-2'>{banglaText || 'Bangla Text'}</p>
        <Textarea
          className='bg-slate-600'
          label='Bangla Text'
          value='আমি বাংলায় কথা বলি'
          disabled
        />
      </div>

      <div className='flex flex-row-reverse'>
        <div>
          <Button variant='secondary' disabled={loading}>
            <Send />
            Publish
          </Button>
        </div>
        <div className='mx-5'>
          <Button variant='secondary' disabled={loading}>
            <Download /> Save as PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
