

const initSongsterrScripts = () => {
    const initModalChecker = () => {

        let awaitingPromise = false;

        const checker = async () => {
            const link = document.querySelector(".C83v7g a");
            if (link && !awaitingPromise) {

                awaitingPromise = true;

                await new Promise((res) => {
                    setTimeout(() => {
                        res();
                        link.click();
                        awaitingPromise = false;
                    }, 250);   
                })

            }
        }
        setInterval(checker, 500);

        document.head.innerHTML += `
            <style type="text/css">
                .rq25k, 
                .Cip2pk, 
                #showroom, 
                .C8325s, 
                .uxw1uw, 
                #showroom_header_desktop, 
                #c-speed,
                #c-loop,
                #c-solo,
                #c-mute,
                #c-export,
                #c-print,
                .B3a4ku, 
                .vgc1tt {
                    opacity: 0 !important;
                    display: none !important;
                    pointer-events: none !important;
                }
                // .Cfl4ni {
                //     visibility: visible !important;   
                // }

                .B3a3b5 {
                    justify-content: flex-start;
                    gap: 30px;
                }
            </style>
        `;

    }

    initModalChecker();

}

initSongsterrScripts();
