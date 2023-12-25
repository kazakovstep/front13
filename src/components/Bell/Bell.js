import BellSVG from "../../images/bell.svg";
import styles from "./Bell.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { H } from "../Htag/Htag";
import { Input } from "../Input/Input";

export const Bell = (className) => {
  const [isPressed, setPressed] = useState(false);
  const [isPressed2, setPressed2] = useState(false);
  const [isPressedClose, setPressedClose] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [notificationTexts, setNotificationTexts] = useState([]);

  const handleClick = () => {
    setPressed(true);
  };

  const handleClick2 = () => {
    setPressed2(true);
  };

  const handleClose = () => {
    setPressedClose(true);
  };

  const handleAddNote = () => {
    const inputValue = document.querySelector('input[placeholder="Добавить"]')?.value;
    showNotification({ content: inputValue });
  };

  const showNotification = (options) => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = options.content;
    document.body.appendChild(notification);
    setNotificationTexts(prevTexts => [...prevTexts, options.content]);
    setNotificationCount(prevCount => prevCount + 1);
  };

  const handleNotificationClick = (event) => {
    if (event.target.tagName === 'IMG') {
      const notificationContent = event.target.parentNode.textContent;
      handleRemoveNotification(notificationContent);
    }
  };

  const handleRemoveNotification = (content) => {
    setNotificationTexts(prevTexts => prevTexts.filter(text => text !== content));
    setNotificationCount(prevCount => prevCount - 1);
  };

  useEffect(() => {
    const container = document.getElementById('notifications-container');
    if (container) {
      container.addEventListener('click', handleNotificationClick);
    }

    const intervalId = setInterval(debouncedCreateNotification, 3000);

    return () => {
      if (container) {
        container.removeEventListener('click', handleNotificationClick);
      }
      clearInterval(intervalId);
    };
  }, []);

  const debouncedCreateNotification = () => {
    const texts = ['Появились новые статьи!', 'Вышло обновление!', 'Новые сообщения!', 'Уведомление о событии!'];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    showNotification({ content: randomText });
  };

  return (
    <>
      <div className={cn(styles.bell_container, className, { [styles.active]: isPressed, [styles.active2]: isPressedClose })} onClick={handleClick}>
        {(isPressed && !isPressed2) ?
          <>
            <div className={cn(styles.question_container, { [styles.close]: isPressed2 })} onClick={handleNotificationClick}>
              <Input state={"default"} placeholder={"Добавить"} />
              <Button state={"default"} type={"primary"} onClick={handleAddNote}>Добавить</Button>
              {notificationTexts.map((text, index) => (
                <div key={index}>
                  <Button state={"default"} type={"primary"} onClick={handleClick2}>{text}</Button>
                  <img src={"../../images/cross.svg"} alt={"cross"} />
                </div>
              ))}
            </div>
          </>
          : ((isPressed2 && !isPressedClose) ?
            <div className={cn(styles.question_container_2)}>
              <H type={"h3"}>Спасибо за уделенное время!</H>
              <Button type={"secondary"} state={"default"} onClick={handleClose}>Закрыть</Button>
            </div>
            : (isPressedClose ? <img src={BellSVG} alt={"Bell"} /> : <img src={BellSVG} alt={"Bell"} />)
          )}
        <div className={styles.count}>
          {notificationCount}
        </div>
      </div>
    </>
  );
};