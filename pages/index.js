/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import React from 'react';
import Image from 'next/image';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  // const user = { displayName: 'Brundle' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <div className="text-center d-flex flex-column">
      <div
        // className="text-center d-flex flex-column"
        style={{
          height: '60vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>K<span>i</span>le Odell</h1>
        <br />
        <Image
            // eslint-disable-next-line max-len
          src="data:image/jpeg;base64,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"
          width={750}
          height={750}
          alt="Picture of the author"
          className="image"
        />
      </div>
      <div>
        <h3>Kyle Odell: Shaping Soundscapes with Innovation</h3>
        <p>
          Kyle Odell, a luminary figure in the music production scene, was born on April 15, 1985, in Los Angeles, California. His journey from a budding musician to a celebrated producer is a testament to his passion, work ethic, and unparalleled talent.
        </p>
        <p>
          Growing up in a musical household, Odell developed a deep love for music from an early age. Immersed in a diverse range of genres, he began experimenting with instruments and exploring the intricacies of music production. This passion led him to pursue studies in audio engineering, where he delved into sound design, mixing, and mastering.
        </p>
        <p>
          Odell's breakthrough came when his unique production style caught the attention of established artists. Blending electronic elements with organic instrumentation, he brought a fresh perspective to the music scene. Collaborating with both emerging talents and industry veterans, Odell quickly gained recognition for his versatility and ability to breathe life into a song.
        </p>
        <p>
          A defining moment in Odell's career came when he contributed to a critically acclaimed album, showcasing his innovative approach to production. His meticulous attention to detail and knack for experimentation earned him widespread acclaim, propelling him into the spotlight and solidifying his status as a sought-after collaborator.
        </p>
        <p>
          Throughout his career, Odell has continued to push boundaries and explore new creative avenues. Whether crafting infectious hooks, intricate arrangements, or immersive soundscapes, his signature touch is unmistakable. Collaborating across genres, from pop and R&B to alternative and indie rock, Odell's versatility knows no bounds.
        </p>
        <p>
          Beyond his work in the studio, Odell is passionate about mentoring the next generation of talent. Through workshops and one-on-one sessions, he shares his knowledge and experience, empowering aspiring producers to hone their craft and pursue their dreams.
        </p>
        <p>
          Despite his success, Odell remains humble and grounded, attributing his achievements to hard work and a genuine love for music. Ever-curious and open-minded, he continues to seek inspiration from the world around him, pushing himself to evolve as both an artist and a person.
        </p>
        <p>
          As he forges ahead, Kyle Odell stands as a beacon of innovation in the music production landscape. With each project, he reaffirms his status as a visionary force, leaving an indelible mark on the industry and inspiring others to pursue their passions with unwavering dedication.
        </p>
      </div>
      {/* <img src="../public/images/kile.jpeg" /> */}
    </div>
  );
}

export default Home;
