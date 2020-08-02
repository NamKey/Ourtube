const recordContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordButton");
const recordPreviewVideo = document.getElementById("jsVideoPreview");
let videoRecorder;

const handleVideoData = (event) => {
    const { data: videoFile } = event;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(videoFile);
    link.download = "recorded.webm";
    document.body.appendChild(link);
    link.click();
};

const startRecording = (stream) => {
    videoRecorder = new MediaRecorder(stream);
    videoRecorder.start();
    videoRecorder.addEventListener("dataavailable", handleVideoData);
    recordBtn.addEventListener("click", stopRecording);
};

const stopRecording = () => {
    videoRecorder.stop();
    recordBtn.removeEventListener("click", stopRecording);
    recordBtn.addEventListener("click", getVideo);
    recordBtn.innerHTML = "Start recording";
};

const getVideo = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: { width: 1280, height: 720 },
        });
        recordPreviewVideo.srcObject = stream;
        recordPreviewVideo.muted = true;
        recordPreviewVideo.play();
        recordBtn.innerHTML = "Stop recording";
        startRecording(stream);
    } catch (error) {
        recordBtn.innerHTML = "Cannot Record";
    } finally {
        recordBtn.removeEventListener("click", getVideo);
    }
};

function init() {
    recordBtn.addEventListener("click", getVideo);
}

if (recordContainer) {
    init();
}
