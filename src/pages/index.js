import React, { Component } from "react";
import SEO from "../components/SEO";
import "minireset.css";
import MainHeader from "../components/MainHeader";
import Container from "../components/Container";
import TopMenu from "../components/TopMenu/TopMenu";

export default class Index extends Component {
  render() {
    return (
      <>
        <SEO />
        <TopMenu />
        <MainHeader />
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae malesuada nibh. Pellentesque accumsan eu metus at interdum.
            Etiam consectetur blandit ullamcorper. Quisque posuere risus lorem,
            at dapibus lacus condimentum eget. Praesent non facilisis elit. Cras
            imperdiet ligula ut purus fermentum ultrices. Donec ex leo,
            efficitur id lectus eget, sagittis semper purus. Nulla quis dolor
            malesuada, iaculis eros nec, dictum turpis. Ut elit elit, consequat
            eget ligula id, pharetra iaculis dui. Nullam eget tincidunt eros.
            Cras fringilla rhoncus ex et tristique. Donec id dolor rhoncus,
            aliquam nisl quis, iaculis velit. Nunc eu mi nec mi ullamcorper
            ultricies et sit amet diam. Aenean ipsum sem, elementum non ante
            nec, malesuada sagittis velit. Sed sodales arcu finibus tempor
            aliquam.
          </p>

          <p>
            Nulla placerat at leo nec porttitor. Ut quis vehicula diam, eu
            condimentum neque. Sed luctus ultrices ligula ac pretium. Sed quis
            nulla sed orci tempor imperdiet in sed lacus. Proin eleifend
            efficitur tincidunt. Quisque sem velit, sodales et auctor commodo,
            ultricies eu turpis. Mauris bibendum orci vitae arcu vulputate
            convallis. Vivamus risus magna, lobortis non neque eget, posuere
            fermentum lectus. Vestibulum vitae euismod erat. Nulla facilisi.
            Curabitur pharetra rhoncus sem, sit amet ullamcorper dui convallis
            ac.
          </p>

          <p>
            Morbi id urna massa. Mauris in libero congue, rhoncus diam non,
            viverra leo. Nulla sed lorem at massa pulvinar aliquam blandit
            ultrices lorem. Mauris mattis lectus arcu, non aliquam massa feugiat
            vel. Ut metus augue, pellentesque vitae diam et, auctor ornare orci.
            Proin quis nisl metus. Mauris id diam urna. Integer eget enim
            lectus. Praesent congue feugiat odio varius pellentesque.
          </p>

          <p>
            Fusce malesuada metus sit amet consequat condimentum. Ut nec lacus
            in lectus volutpat gravida. Pellentesque elit odio, aliquet et
            auctor et, tincidunt quis leo. Suspendisse porttitor ultrices risus,
            nec ultricies velit pharetra vitae. Integer pulvinar fringilla
            mollis. Curabitur venenatis lacinia tortor, eget lobortis odio porta
            non. Phasellus sed augue erat. Nam sodales mauris ex. Vestibulum
            tempor interdum erat, quis porta quam tempus eu. Etiam eget euismod
            nibh. Ut volutpat lorem id dui sagittis varius. Phasellus ac purus
            vitae diam malesuada cursus aliquet quis ante. Mauris risus magna,
            mattis vitae sem quis, dictum finibus ex.
          </p>

          <p>
            Proin ac felis nec sem suscipit commodo vitae vitae nibh. Etiam
            molestie a nulla in rhoncus. Aliquam tempor ut ex sit amet
            ullamcorper. Integer consequat, turpis a congue ornare, tellus eros
            fringilla leo, vitae finibus quam ex quis justo. Integer vitae
            elementum velit. Aenean eget lacus in lacus pellentesque viverra.
            Proin eu iaculis risus. Praesent leo velit, blandit ac nulla a,
            pulvinar posuere urna. Suspendisse in mi magna. Mauris sed maximus
            mi. Morbi sollicitudin, leo quis aliquam lacinia, leo massa cursus
            eros, eu eleifend libero lectus ut augue. Morbi euismod, erat vel
            tristique tincidunt, augue metus dictum dolor, vitae feugiat tellus
            urna et magna. Suspendisse eleifend elit ornare ligula gravida, sed
            mattis tortor accumsan. Donec nibh ipsum, varius eget pellentesque
            id, ornare id tellus. Aliquam vel pretium nisl.
          </p>
        </Container>
      </>
    );
  }
}
