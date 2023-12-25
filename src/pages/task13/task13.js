import Picture from "../../images/Logo_svg.svg"
import {useEffect} from "react";
import {withMainLayout} from "../../Layout/MainLayout/Main";
export const Task13 = () => {

   useEffect(() => {
       const container = document.getElementById('container');
    const image = document.getElementById('image');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;
    const left = (containerWidth - imageWidth) / 2;
    const top = (containerHeight - imageHeight) / 2;
    image.style.left = left + 'px';
    image.style.top = top + 'px';
  }, []);

const container = document.getElementById('root');
container?.addEventListener('click', (event) => {
      const x = event.clientX;
      const y = event.clientY;

      //alert(`Координаты клика: x=${x}, y=${y}`);
});

  return (
    <>
        <div id={"container"}>
            <img id={"image"} src={Picture} alt={"find"} style={{position:"relative"}}/>
        </div>
    </>
  );
}

export default withMainLayout(Task13);