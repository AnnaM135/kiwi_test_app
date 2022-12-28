import _ from "./mainView.module.scss";
export function MainView() {
  return (
    <div className={`${_._} container`}>
      <div className={_.__box}>component 1</div>
      <div className={_.__box}>component 2</div>
      <div className={_.__box}>
        <div className={_.__box_area}>component 3</div>
        <div className={_.__box_area}>component 4</div>
        <div className={_.__box_area}>component 5</div>
        <div className={_.__box_area}>component 6</div>
        <div className={_.__box_area}>component 7</div>
        <div className={_.__box_area}>component 8</div>
        <div className={_.__box_area}>component 9</div>
      </div>
    </div>
  );
}
