'use client';

import React from 'react';
import Script from 'next/script';
import { ENV } from '@/constants/env';

const GoogleAnalytics = () => {
  if (!ENV.analytics.gaId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ENV.analytics.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ENV.analytics.gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
};

const Clarity = () => {
  if (!ENV.analytics.clarityId) return null;
  return (
    <Script id="clarity-init" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${ENV.analytics.clarityId}");
      `}
    </Script>
  );
};

const Umami = () => {
  if (!ENV.analytics.umamiId) return null;
  return (
    <Script
      id="umami-script"
      src="https://cloud.umami.is/script.js"
      data-website-id={ENV.analytics.umamiId}
      strategy="afterInteractive"
      defer
    />
  );
};

export const Analytics = () => (
  <>
    <GoogleAnalytics />
    <Clarity />
    <Umami />
  </>
);

export default Analytics;
