/* =====================================================================
   SITE TEXT — shared text used across pages (nav, home page, CTA section,
   footer, etc.). The site is single-language (English) now, so each
   line below is the only place that text lives.
   =====================================================================
   HOW TO EDIT
   Change the text between quotes " ... ". Don't delete quotes, commas,
   or curly braces { }. Save the file when you're done — that's it.

   Article text lives in content/articles-content.js
   About page text lives in content/about-content.js
   Portfolio page text lives in content/portfolio-content.js

   HOW TO ADD AN AUDIOBOOK PLAYER TO THE ARTICLE SIDEBAR
   1. Put the audio file (.mp3, .m4a, .wav, etc.) inside the
      "images/articles/audiobook/" folder —
      e.g. images/articles/audiobook/my-audiobook.mp3.
   2. Change audiobookTrack: "" to
      audiobookTrack: "images/articles/audiobook/my-audiobook.mp3".
   3. Save. A small card with an audio player appears in the sidebar of
      every article page, right below the Portfolio card.
   Leave audiobookTrack: "" if you don't want it shown.
   ===================================================================== */

const siteText = {
    navHome: "Home",
    navArticles: "Insights",
    navPortfolio: "Portfolio",
    navPublic: "Public",
    navAbout: "About",
    navContact: "Contact",

    heroEyebrow: "Personal journal",
    heroDescription: "A personal space to explore ideas across business, markets, and everyday thinking — written by a student learning to see the world more clearly.",
    readArticles: "Read Insights",
    viewPortfolio: "View Portfolio",

    approachTitle: "Writing to understand, not just to react to markets.",
    approachBody: "Every insight starts with a simple question: what truly drives the value of an asset, business, or economic policy?",

    latestThinking: "Latest thinking",
    latestArticles: "Latest Insights",
    searchLabel: "Search",
    sortLabel: "Sort",
    sortNewest: "Newest",
    sortOldest: "Oldest",
    sortReadTime: "Read time",
    searchPlaceholder: "Search topics, categories, or titles",
    emptyTitle: "No insights found",
    emptyBody: "Try another keyword or choose a different category.",
    readArticleLink: "Read Insight",
    readFeaturedLink: "Read",
    articlesShownSuffix: "insights shown",

    contactEyebrow: "Get in Touch",
    contactTitle: "Have a question or feedback?",
    contactBody: "Fill in the form below — it will open in your email app, ready to send straight to nandapersperctive@gmail.com.",
    contactNameLabel: "Name",
    contactNamePlaceholder: "Your name",
    contactEmailLabel: "Your Email",
    emailPlaceholder: "name@email.com",
    contactMessageLabel: "Message",
    contactMessagePlaceholder: "What's on your mind?",
    contactSend: "Send Email",

    backToTop: "Back to top",
    backToHome: "Back to home",
    backToArticles: "← Back to insights",
    relatedArticles: "Related Insights",

    articleNotFoundTitle: "Insight not found",
    articleNotFoundMeta: "Please return to the insights list.",
    articleNotFoundBody: "The insight you are looking for is not available or the link has changed.",
    articleNotFoundButton: "Browse All Insights",

    audiobookEyebrow: "Audiobook",
    audiobookBody: "Listen to the audiobook that shaped how I think about investing.",
    audiobookTrack: ""
};
