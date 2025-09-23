

const initSongsterrScripts = () => {
    const initModalChecker = () => {
        const checker = () => {
            const link = document.querySelector(".C83v7g a");
            if (link) link.click();
        }
        setInterval(checker, 50);

        document.head.innerHTML += `
            <style type="text/css">
                .rq25k, .C8325s {
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
