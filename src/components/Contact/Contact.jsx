import linkedin from '../../img/linkedin.png';
import mail from '../../img/mail.png';
import twitter from '../../img/twitter.png';
import whatsapp from '../../img/whatsapp.png';
import instagram from '../../img/instagram.png';
import telephone from '../../img/telephone.png';

export default function Contact() {
  const contactSources = [
    {
      id: 1,
      title: 'LinkedIn',
      icon: linkedin,
      link: 'https://www.linkedin.com/in/yourprofile',
      color: '#0b69c7',
    },
    {
      id: 2,
      title: 'Twitter',
      icon: twitter,
      link: 'https://twitter.com/yourhandle',
      color: '#000',
    },
    {
      id: 3,
      title: 'Mail',
      icon: mail,
      link: 'https://github.com/yourusername',
      color: '#e75a4d',
    },
    {
      id: 4,
      title: 'Instagram',
      icon: instagram,
      link: 'https://www.instagram.com/yourprofile',
      color: '#e81a91',
    },
    {
      id: 5,
      title: 'Whatsapp',
      icon: whatsapp,
      link: 'https://www.instagram.com/yourprofile',
      color: '#4caf50',
    },
    {
      id: 6,
      title: 'Phone',
      icon: telephone,
      link: 'https://www.instagram.com/yourprofile',
      color: '#2196f3',
    },
  ];

  return (
    <div className="w-full mt-16">
      <div className="max-w-[1100px] mx-auto p-5 ">
        <h3 className="text-3xl font-semibold uppercase text-[#4446b7] border-b-2 border-b-red-200  w-fit mb-6">
          Contacts
        </h3>
        <h4 className="text-2xl font-extralight  mb-8">
          Feel Free to contact me through email or social media. I will get back
          to you as soon as possible.
        </h4>

        <div className="grid grid-cols-3 gap-6">
          {contactSources.map((contactItem) => (
            <a href={contactItem.link} className='z-[500]  w-fit'>
              <div
                key={contactItem.id}
                className="flex gap-5 items-center cursor-pointer  w-fit hover:-translate-y-1 transition-all duration-300"
              >
                <div className="img_box w-10 h-10">
                  <img className="w-full" src={contactItem.icon} />
                </div>
                <p
                  style={{ color: contactItem.color }}
                  className={`title text-xl`}
                >
                  {contactItem.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
