import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Mail, Send, Wand } from "lucide-react";

export default function DashboardNewContent() {
    return (
        <div className="p-4 max-w-2xl">
            <h1 className="my-5">Content Information</h1>
            <div className="my-8">
                <p className="ms-2">Title</p>
                <Input label="Title" placeholder="Enter title" />
            </div>
            <div className="my-8">
                <p className="ms-2">Caption</p>
                <Input label="Caption" placeholder="Enter caption" />
            </div>

            <div className="my-8">
                <p className="ms-2">Description</p>
                <Textarea label="Description" placeholder="Enter description" />
            </div>
            <div className="flex flex-row-reverse">
                <Button variant="secondary"><Wand/> Convert</Button>
            </div>

            <div className="my-8 text-white">
                <p className="ms-2">Bangla Text</p>
                <Textarea label="Bangla Text" value="hello" disabled />
            </div>
            
            <div className="flex flex-row-reverse">
            <div><Button variant="secondary"><Send/>Publish</Button></div>
            <div className="mx-5"><Button variant="secondary"><Download/> Save as PDF</Button></div>
            </div>
        </div>
    )
}