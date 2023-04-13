import React from 'react';
import Head from 'next/head';
import Script from 'next/script';


export default function App({ Component, pageProps }) {
  const isDev = process.env.NODE_ENV === 'development'
  const jobCode = process.env.jobCode

  const brand = process.env.appMeta?.brand
  const title = process.env.appMeta?.title
  const siteName = process.env.appMeta?.siteName
  const date = process.env.appMeta?.date
  const year = process.env.appMeta?.year

  return (
    <React.Fragment>
      <Head>
        <title>Competition Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* see next.config.js for setting up */}
        <meta property="og:image" content={process.env.appMeta?.ogImage} />
        <meta property="og:image:secure_url" content={process.env.appMeta?.ogImage} />
        <meta name="twitter:image" content={process.env.appMeta?.ogImage} />
      </Head>

    {/* // UNCOMMENT FOR: brandedcontent snow plow scripts
       {!isDev &&
          <>
            <Script id="titan">
              {`
                var dataLayer = window.dataLayer || [];

                let pageViewId;
                function uuidv4() {
                  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                  );
                }
                pageViewId = uuidv4();

                var sysEnv = "desktop";
                if (window.innerWidth < 1000) {
                  sysEnv = "mobile";
                }

                dataLayer.push({
                  page: {
                    author: "",
                    publishDate: "${date}AEST00:00:0000000",
                    updateDate: "${date}AEST00:00:0000000",
                    renderedPlatform: "WEB",
                    authoredPlatform: "Pantheon",
                    viewID: "",
                    type: "Article",
                    assetId: "${brand}",
                    contentSource: "${siteName}",
                    primaryTag: "",
                    tags: "",
                    components: "",
                    promotedType: "sponsored",
                    sponsored: "true",
                    name: "${brand}",
                    template: "paidcontent",
                    didMount: "false",
                    customReferrer: document.referrer,
                    lifecycleType: "single"
                  },
                  network: {
                    deviceID: sysEnv,
                    marketingID: ""
                  },
                  client: {
                    deviceType: sysEnv
                  },
                  section: {
                    primaryCategory: "brandDiscover",
                    subCategory: ""
                  },
                  session: {
                    adBlocked: "",
                    gCookie: "",
                    privateBrowsingMode: ""
                  },
                  subs: {
                    memberID: "",
                    memberType: "visitor",
                    meterCount: "",
                    meterPeriodStart: "",
                    meterPeriodEnd: ""
                  },
                  brand: {
                    name: "${siteName}",
                    Engagement: ""
                  }
                });

                // TITAN BASE CONFIG
                var titanEnabled = true;
                var digitalData = {
                  "page": {
                      "pageInfo": {
                          "sysEnv": sysEnv,
                          "pageViewId": pageViewId
                      }
                  },
                  "commercial": {
                      "sponsor": "${brand}",
                      "type": "sponsored by",
                      "tags": ""
                  },
                  "titan": {
                      "spa": false,
                      "adSite": "masthead",
                      "adZone": "SinglePageArchitechture",
                      "adKeyValues": {
                          "cat": "${brand}",
                          "cat1": "${year}",
                          "cat2": "${title}",
                          "ctype": "immersive",
                          "pageviewid": pageViewId
                      },
                      "adSlots": ""
                  }
                };
                var titan = titan || {};
                titan.cmd = titan.cmd || []; // TITAN BASE CONFIG END
              `}
            </Script>
            <Script id="gtm">
              {`
              !function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-WV7FLW7",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");
              `}
            </Script>
          </>
        } */}


      {/* UNCOMMENT FOR: nine.com.au ga scripts
       {!isDev &&
        <>
          <Script id="nineKit2" async>
            {`
            function runSecondScript() {
              NINEAU_Loader.setup();

              //Nine Third Party Kit - Configurationmsnportalaucatdev
              NINEAU_Config.setOmnitureSuiteId("msnportalaucatglobal"); // change tp msnportalaucatglobal !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              NINEAU_Config.setCategory("miscellaneous"); // Page Category Name
              NINEAU_Config.setSiteName("campaign"); // Page Site Name
              NINEAU_Config.setSectionName("${jobCode}"); // Optional - Delete if unneeded.
              NINEAU_Config.setNielsenEnabled(false);
              NINEAU_Config.setAdcEnabled(false);
              NINEAU_Config.setPageTrackingOnRenderTracking(true);
              NINEAU_ThirdParty.initialize();
              NINEAU_ThirdParty.renderTracking();
            }
            `}
          </Script>
          <Script id="nineKit1">
            {`
              // Nine Third Party Kit - Loader
              (function () {
                var LOADER_SCRIPT_URL =
                  "http://share.9cdn.net/share/short_cache/js/third_party/loaders/au.loader-latest.min.js";
                var LOADER_SCRIPT_URL_SECURE =
                  "https://share.9cdn.net/share/short_cache/js/third_party/loaders/au.loader-latest.min.js";
                var loaderScriptUrl =
                  window.location.protocol == "https:"
                    ? LOADER_SCRIPT_URL_SECURE
                    : LOADER_SCRIPT_URL;

                const script = document.createElement('script');
                script.src = loaderScriptUrl;
                script.async = true;
                script.onload = runSecondScript;
                document.body.appendChild(script);
              })();
            `}
          </Script>
        </>
      }
    */}

      <Component {...pageProps} />

    {/* UNCOMMENT FOR: GA4 scripts
      {!isDev &&

        <>
          <Script id='ga4' async src="https://www.googletagmanager.com/gtag/js?id=G-8H9J6GLFEH" />
          <Script id="ga4b">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-8H9J6GLFEH');
            `}
          </Script>
        </>
      }
      */}
    </React.Fragment>
  );
}
