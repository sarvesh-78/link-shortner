import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
    const [longUrl, setLongUrl] = useState("");
    const navigate = useNavigate();
    const handleShorten = (e) => {
        e.preventDefault();
        if (longUrl) navigate(`/auth?createNew=${longUrl}`);
    };

    return (
        <div className="flex flex-col items-center p-6">
            <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-center font-extrabold">
                The only URL Shortener <br /> you&rsquo;ll ever need! 👇
            </h2>
            <form
                className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
                onSubmit={handleShorten}
            >
                <Input
                    type="url"
                    placeholder="Enter your loooong URL"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    className="h-full flex-1 py-4 px-4"
                />
                <Button type="submit" className="h-full" variant="destructive">
                    Shorten!
                </Button>
            </form>
            <Accordion type="multiple" collapsible className="w-5/6 md:px-11 mt-8">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl">
                        How does the  Link Shortener works?
                    </AccordionTrigger>
                    <AccordionContent>
                        When you enter a long URL, our system generates a shorter version of
                        that URL. This shortened URL redirects to the original long URL when
                        accessed.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" >
                    <AccordionTrigger className="text-xl">
                        Do I need an account to use the app?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. Creating an account allows you to manage your URLs, view
                        analytics, and customize your short URLs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl">
                        What analytics are available for my shortened URLs?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can view the number of clicks, geolocation data of the clicks
                        and device types (mobile/desktop) for each of your shortened URLs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-xl">
                        Life span for my shortened URLs?
                    </AccordionTrigger>
                    <AccordionContent>
                        Your shorten URLs will stay live until you delete through our dashboard.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default LandingPage;