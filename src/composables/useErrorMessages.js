import { ref } from "vue";

export function useErrorMessages() {
    const errorMessages = [
        "REALITY.EXE HAS STOPPED WORKING",
        "PAGE NOT FOUND IN THIS DIMENSION",
        "ERROR 404: EXISTENCE UNDEFINED",
        "QUANTUM ENTANGLEMENT FAILED",
        "MATRIX OVERFLOW DETECTED",
    ];
    const currentErrorMessage = ref(
        errorMessages[Math.floor(Math.random() * errorMessages.length)],
    );

    function changeErrorMessage() {
        currentErrorMessage.value = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    }

    return {
        currentErrorMessage,
        changeErrorMessage,
    };
}
