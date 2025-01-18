// components/Timeline.js
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

const Timeline = ({ events }: any) => {
    return (
        <div className="relative w-full mx-auto pt-8 pb-16">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 w-1 bg-gray-300 h-full transform -translate-x-1/2 md:block hidden"></div>

            {/* Timeline events */}
            <div className="space-y-8">
                {events.map((event: any, index: number) => (
                    <div key={index} className="flex items-center justify-between md:flex md:justify-between md:items-center md:space-x-4">
                        {index % 2 === 0 ? (
                            // Left side event
                            <>
                                <div className="md:w-1/2 w-full md:pl-0">
                                    <Card className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out w-full">
                                        <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
                                        <p className="text-gray-600 text-sm">{event.date}</p>
                                        {Array.isArray(event.description) ? (
                                            <ul className="list-disc pl-1">
                                                {event.description.map((bullet: string, index: number) => (
                                                    <li key={index} className="text-gray-700">
                                                        <span className="text-gray-700">{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-700 mt-2">{event.description}</p>
                                        )}
                                    </Card>
                                </div>
                                <div className="md:w-1/2 w-0  md:justify-end md:pr-4 hidden md:block"></div>
                            </>
                        ) : (
                            // Right side event
                            <>
                                <div className="md:w-1/2 w-0  md:justify-start md:pl-4 hidden md:block"></div>
                                <div className="md:w-1/2 w-full md:pr-0">
                                    <Card className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out w-full">
                                        <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
                                        <p className="text-gray-600 text-sm">{event.date}</p>
                                        {Array.isArray(event.description) ? (
                                            <ul className="list-disc pl-4">
                                                {event.description.map((bullet: string, index: number) => (
                                                    <li key={index} className="text-gray-700">
                                                        <span className="text-gray-700">{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-700 mt-2">{event.description}</p>
                                        )}
                                    </Card>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
