"use client"
import Script from "next/script"

export default function GoogleAnalytics() {
    return(
        <>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}></Script>
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){ window.dataLayer.push(arguments); }
                    gtag('js', new Date());

                    gtag('config', '${process.env.GA_MEASUREMENT_ID}');
                `}
            </Script>
        </>
        
    )
}

