function timeIt(){

var w;

function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("js/demo_workers.js");
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = 91-event.data;

            if (event.data=="91"){  ////new
                document.getElementById("result").innerHTML = "time's up!";
                stopWorker(w);  ///
            }  /////

        };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}

return startWorker;
}

var timing = timeIt();
//timing();


function stopWorker(w) { 
    w.terminate();
    w = undefined;


}