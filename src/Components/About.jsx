import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate('/')
  }

  return (
    <>
      <div className="about-container">
        <h2>About Our Company</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus, urna sit amet rhoncus maximus,
          sem dui porttitor dolor, sit amet vulputate eros lacus vel mauris. Quisque nec condimentum mauris, vitae
          luctus libero. Fusce eu eleifend dolor. Sed sodales orci sed elit cursus, sit amet egestas neque pharetra.
          Nulla vitae mauris ullamcorper, ultrices dui sed, dictum massa. Donec sit amet ante mi. In sed pharetra diam,
          ac tempor libero. Mauris non efficitur turpis, non venenatis odio. In tristique aliquet nibh, ac tempor elit
          fringilla sed. Integer suscipit augue nunc, ac feugiat nisi tincidunt ac. Ut venenatis fermentum tincidunt.
          Fusce et dignissim arcu.
        </p>

        <h2>Lorem shskkbdvo</h2>
        <p>
          Suspendisse in facilisis purus. Mauris interdum libero at nunc egestas, eu ullamcorper leo volutpat.
          Curabitur iaculis eleifend enim sed vestibulum. Curabitur volutpat quam nec justo egestas efficitur.
          Sed ac varius quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Nunc rutrum euismod erat id venenatis. Phasellus varius erat in vulputate convallis. Curabitur at
          tincidunt ipsum. Ut imperdiet aliquet metus a viverra. Etiam efficitur, turpis at rhoncus fermentum, tellus
          nunc dictum justo, eu consequat orci metus sit amet metus. Vivamus in lectus a odio tincidunt elementum
          vitae vitae justo. Nullam id risus eget risus tempus congue ut et mi. Mauris eget turpis id mauris interdum
          ultrices. Sed dictum leo in sapien semper, nec cursus neque lobortis.
        </p>
      </div>
      <button onClick={back}>Go Back</button>
    </>
  )
}

export default About