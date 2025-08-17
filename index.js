

const initSongsterrScripts = () => {
    const initModalChecker = () => {
        const checker = () => {
            const link = document.querySelector(".rq1ph a");
            if (link) link.click();
        }
        setInterval(checker, 50);

        document.head.innerHTML += `
            <style type="text/css">
                .rq25k, .Cip2pk {
                    opacity: 0 !important;
                    display: none !important;
                    pointer-events: none !important;
                }
            </style>
        `;

    }

    initModalChecker();

}

initSongsterrScripts();