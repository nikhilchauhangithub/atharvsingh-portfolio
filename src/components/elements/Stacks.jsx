import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { SiFirebase } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { DiMongodb } from 'react-icons/di';

const Stacks = () => {
  return (
    <div className="bg-[#1e1e1e] w-full md:h-screen h flex justify-center items-center">
      <div className="right md:p-20 p-5">
        <h1 className="font-medium text-white md:text-4xl text-xl">Talents</h1>
        <p className="text-white text-sm mt-1">
          With over 3 years of experience in technology i know many things in
          it.I love to do every work listening music.The music languages which I
          like most are Punjabi/Haryanvi and English.I have talent in many thing
          vroos/sissoo i can't just write all that here.Sorry but i like to
          flexx Hehe.If u wanna contact me so send mssg in insta/tg/email.
        </p>

        <h2 className="typing font-medium text-white md:text-xl text-base mt-1">
          Here are some of my talents.Which are as follows:-
        </h2>
        <div className="w-full mt-2 md:grid md:grid-cols-2">
          <ul>
            <li className="text-white flex items-center">
              <i className="mr-2">
                <AiFillHtml5 />
              </i>
              Web Development
            </li>
            <li className="text-white flex items-center">
              <i className="mr-2">
                <DiCss3 />
              </i>
              DEVELOPER
            </li>
            <li className="text-white flex items-center">
              <i className="mr-2">
                <DiJavascript />
              </i>
              Modding
            </li>
            <li className="text-white flex items-center">
              <i className="mr-2">
                <FaReact />
              </i>
              Ethical Hack*ng
            </li>
            <li className="text-white flex items-center">
              <i className="mr-2">
                <SiTailwindcss />
              </i>
              Modding
            </li>
          </ul>

          <ul>
            <li className="text-white flex items-center">
              <i className="mr-2">
                <SiPhp />
              </i>
              GFX
            </li>
            <li className="text-white flex items-center">
              <i className="mr-2">
                <GrNode />
              </i>
              FX
            </li>
            <li className="text-white flex items-center">
              <i className="mr-2">
                <SiFirebase />
              </i>
              Jackzng
            </li>
            <li className="text-white flex items-center">
              <i className="mr-2">
                <TbSql />
              </i>
              GRINDING
            </li>
            <li className="text-white flex items-center">
              <i className="mr-2">
                <DiMongodb />
              </i>
              AND MANY MORE...
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
