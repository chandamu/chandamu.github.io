window.GA4_MEASUREMENT_ID = 'G-50E1EGRJF1';

(function () {
    var host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1' || host === '::1') {
        return;
    }

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + window.GA4_MEASUREMENT_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', window.GA4_MEASUREMENT_ID, {
        anonymize_ip: true,
        // v1 is multi-page, so page views come from real navigations. v2 sets
        // send_page_view: false because its router reports them instead.
        content_group: 'v1'
    });
})();
