<template>
    <div class="modal h-[40rem] w-[30rem] bg-white fixed bottom-5 right-5 shadow-lg shadow-gray-600 rounded-md z-30">
        <div class="top">
            <HeaderPopup />
            <div class="overflow-auto h-[28rem] p-4">
                <BubleChat jesica="true" msg="Jadi kamu belum tahu tentang JSC ya? Okey, aku bakal jelasin secara singkat. Jadi, JSC itu kepanjangannya Jogja Solution Center. Karena namanya ada Jogja-nya, berarti letak JSC ada di Daerah Istimewa Yogyakarta. JSC itu menyediakan layanan B2B Digital IT Services yang saat ini masih berfokus di daerah regional 4 (Jawa Tengah dan DIY) dan regional 5 (Jawa Timur). JSC sendiri adalah sebuah unit yang dibentuk langsung oleh Telkomsigma, keren kan." />
                <BubleChat jesica="false" msg="Wow, menarik! Jadi, JSC merupakan bagian dari Telkomsigma, ya? Apa layanan yang ditawarkan oleh JSC?" />
            </div>
        </div>
        <div class="footer p-4 border border-gray-300">
            <div class="flex gap-3 justify-between">
                <div class="message basis-10/12 border border-[#667085] border-solid rounded-md overflow-hidden h-10">
                    <input placeholder="Ask me anything" class="w-full border-none" type="text">
                </div>
                <div class="basis=2/12">
                    <Button title=">" background="bg-background-primary text-t-primary" />
                </div>
            </div>
            <div class="flex justify-center">
                <div class="basis-10/12">
                    <h2 class="text-center text-sm text-[#667085]" >
                        Jessica is continually improving, and her responses may become more accurate over time. ChatGPT May 24 Version.
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>