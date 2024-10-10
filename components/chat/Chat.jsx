import Image from "next/image"
import styles from "./Chat.module.scss"

const Chat = () => {
    const startWhatsAppChat = () => {
        const phoneNumber = '9647511241004'; // Replace with the phone number
        const message = 'Hello, I would like to know more about your services!'; // Custom pre-filled message
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      };
  return (
    <div onClick={startWhatsAppChat} className={styles.chatContainer}>
        <Image src={"/chat.svg"} width={25} height={25} alt={"chat vector"} />
    </div>
  )
}

export default Chat