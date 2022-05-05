import { useState } from "react";
let Background = () => {
    let [count_back_picture, backFunction] = useState(0);
    let back_pic = ["back1.jpg", "back2.jpg", "back3.jpg", "back4.jpeg"];
    let cir_change = [".c1", ".c2", ".c3", ".c4"];

    let backImage = () => {
        if (count_back_picture < back_pic.length - 1) {
            backFunction(count_back_picture + 1);

            let dynamics = document.querySelector(cir_change[count_back_picture]);
            dynamics.style.color = "white";

            dynamics = document.querySelector(cir_change[count_back_picture + 1]);
            dynamics.style.color = "blue";
        }

    }
    let frontImage = () => {
        if (count_back_picture >= 1) {

            backFunction(count_back_picture - 1);
            let dynamics = document.querySelector(cir_change[count_back_picture]);
            dynamics.style.color = "white";
            dynamics = document.querySelector(cir_change[count_back_picture - 1]);
            dynamics.style.color = "blue";
        }
    }

    return (
        <>
            <div className="to_hide_background_pic">
                <div onClick={backImage} className="back_move"><i class="both_left_right fa fa-angle-right"></i></div>
                <div onClick={frontImage} className="next_move"><i class="both_left_right fa fa-angle-left"></i></div>
                <img className='image_setting' src={back_pic[count_back_picture]} />
                <span className="all_circle">
                    <i class="c1 fa fa-circle"></i>
                    <i class="c2 fa fa-circle"></i>
                    <i class="c3 fa fa-circle"></i>
                    <i class="c4 fa fa-circle"></i>
                </span>
            </div>
        </>
    )
}

export default Background;