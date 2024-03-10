import Image from "next/image";
import Button from "./Button";

export default function GetApp() {
    return (
        <section className="flexCenter flex-col w-full pb-[100px]">
            <div className="get-app">
                <div className="z-20 flex flex-1 flex-col w-full items-start justify-center gap-12">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get For Free Now</h2>
                    <p className="regular-16 text-gray-10">Available on IOS and Android</p>
                    <div className="flex flex-col xl:flex-row w-full gap-3 whitespace-nowrap">
                        <Button
                            type="button"
                            title="App Store"
                            icon="/apple.svg"
                            variant="btn_white"
                            full
                        />
                        <Button
                            type="button"
                            title="Play Store"
                            icon="/android.svg"
                            variant="btn_dark_green_outline"
                            full
                        />
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end">
                    <Image
                        src='/phones.png'
                        alt="phones"
                        width={550}
                        height={870}
                    />
                </div>
            </div>
        </section>
    )
}
