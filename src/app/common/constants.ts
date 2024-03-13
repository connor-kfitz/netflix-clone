// Navbar //

export const navItems: NavItem[] = [
  {
      name: 'Home',
      path: '/browse'
  },
  {
      name: 'TV Shows',
      path: '/browse'
  },
  {
      name: 'Movies',
      path: '/browse'
  },
  {
      name: 'New & Popular',
      path: '/browse'
  },
  {
      name: 'My List',
      path: '/browse'
  },
  {
      name: 'Browse by Languages',
      path: '/browse'
  }
]

import DefaultAvatar from "../../../public/images/avatars/avatar.png";
import AvatarTwo from "../../../public/images/avatars/avatar-two.jpg";

export const profileAvatars: ProfileAvatar[] = [
  {
    image: DefaultAvatar,
    ref: '/defaultAvatar'
  },
  {
    image: AvatarTwo,
    ref: '/avatar-two'
  }
]

// Footer //
import FacebookIcon from "../../../public/images/footer/facebook-icon.svg";
import InstagramIcon from "../../../public/images/footer/instagram-icon.svg";
import TwitterIcon from "../../../public/images/footer/twitter-icon.svg";
import YoutubeIcon from "../../../public/images/footer/youtube-icon.svg";

export const socials: SocialItem[] = [
  {
    icon: FacebookIcon,
    path: 'https://www.facebook.com/netflixcanada',
    alt: 'Facebook'
  },
  {
    icon: InstagramIcon,
    path: 'https://www.instagram.com/Netflix',
    alt: 'Instagram'
  },
  {
    icon: TwitterIcon,
    path: 'https://twitter.com/netflix_CA',
    alt: 'Twitter'
  },
  {
    icon: YoutubeIcon,
    path: 'https://www.youtube.com/user/NewOnNetflix',
    alt: 'Youtube'
  }
]

export const footerItems: FooterItem[] = [
  {
    name: 'Audio Description',
    path: 'https://www.netflix.com/browse/audio-description'
  },
  {
    name: 'Help Center',
    path: 'https://help.netflix.com/en/'
  },
  {
    name: 'Gift Cards',
    path: 'https://www.netflix.com/ca/redeem'
  },
  {
    name: 'Media Center',
    path: 'https://media.netflix.com/en/'
  },
  {
    name: 'Investor Relations',
    path: 'https://ir.netflix.net/ir-overview/profile/default.aspx'
  },
  {
    name: 'Jobs',
    path: 'https://jobs.netflix.com/'
  },
  {
    name: 'Netflix Shop',
    path: 'https://netflix.shop/'
  },
  {
    name: 'Terms of Use',
    path: 'https://help.netflix.com/legal/termsofuse'
  },
  {
    name: 'Privacy',
    path: 'https://help.netflix.com/legal/privacy'
  },
  {
    name: 'Legal Notice',
    path: 'https://help.netflix.com/legal/notices'
  },
  {
    name: 'Corporate Information',
    path: 'https://help.netflix.com/legal/corpinfo'
  },
  {
    name: 'Contact Us',
    path: 'https://help.netflix.com/en/contactus'
  },
  {
    name: 'Ad Choices',
    path: 'https://help.netflix.com/en/node/100637'
  }
]

export const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]