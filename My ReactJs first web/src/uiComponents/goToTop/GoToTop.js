import React, {Component} from "react";
import { IoMdRocket } from "react-icons/io";

export default class GoToTop extends Component {
    state = {
        is_visible: false
    };

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll",  e => scrollComponent.toggleVisibility());
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) this.setState({ is_visible: true });
        else this.setState({ is_visible: false });
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <div className={`scroll-to-top ${this.state.is_visible ? 'show' : ''}`}
                 onClick={() => this.scrollToTop()}>
                <IoMdRocket/>
            </div>
        )
    }
}
