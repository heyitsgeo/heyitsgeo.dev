import React from 'react';
import meAnimated from '../../images/me-animated.gif';

type AboutCommandProps = {
  args?: string[];
}

const AboutCommand: React.FC<AboutCommandProps> = (_) => {
  return (
      <div className={'flex flex-col gap-4'}>
        <p>I'm Geo Stokes!</p>
        <p>
          I have been a software engineer since 2015 and have focused my energy on honing my front-end design and development skills.
          It's important to me to be well-versed in engineering and consulting. I strive to understand each problem deeply so I can provide the best possible solution and communicate effectively with people of varying degrees of technicality.
        </p>
        <p>
          As a Co-founder, COO, & Staff Software Engineer at <a href={'https://slashpine.tech'} target={'_blank'} className={'text-blue-ribbon-500 border-b border-blue-ribbon-500 border-dashed hover:border-solid'}>Slash Pine Tech</a>, I play a pivotal role in helping businesses build custom software solutions that cater to their unique needs, all while championing a product-minded, agile approach.
        </p>
        <div className={'flex flex-col items-center justify-center'}>
          <img
            className={'w-[200px] h-auto'}
            src={meAnimated}
            alt={'animated illustration of developer typing on keyboard with text scrolling in reflection of their eyes'}
          />
          <p className={'text-center text-xs'}>
            Designed by <a className={'text-blue-ribbon-500 border-b border-blue-ribbon-500 border-dashed hover:border-solid'} href={'https://carlyberry.design/'} target={'_blank'}>itsnotthatweird (Carly Berry)</a>
          </p>
        </div>
      </div>
  );
};

export default AboutCommand;
