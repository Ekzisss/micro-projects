import Btn from '../btn';
import style from './style.module.scss';

export default function Modal({
  setShow,
}: {
  setShow: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}) {
  return (
    <div className={style.main}>
      <div className={style.window}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aliquid alias ex quisquam nobis
          consectetur cumque iste error. Necessitatibus quod minima voluptatem aspernatur magnam deleniti, eum
          molestiae voluptas facilis vel!
        </p>
        <Btn
          onClick={() => setShow(false)}
          content="Close"
        ></Btn>
      </div>
      <div
        onClick={() => setShow(false)}
        className={style.background}
      ></div>
    </div>
  );
}
