function runSpeedtest() {
    document.getElementById("result").innerHTML = "Speedtest läuft...";

    // Dies ist ein Platzhalter. Eine tatsächliche Speedtest-API wird benötigt.
    setTimeout(() => {
        const downloadSpeed = (Math.random() * 100).toFixed(2); // Zufällige Werte für Test
        const uploadSpeed = (Math.random() * 100).toFixed(2);
        const ping = (Math.random() * 100).toFixed(0);
        
        document.getElementById("result").innerHTML = 
            `Download: ${downloadSpeed} Mbps<br>
             Upload: ${uploadSpeed} Mbps<br>
             Ping: ${ping} ms`;
    }, 2000); // Simuliere einen 2-sekündigen Test
}
