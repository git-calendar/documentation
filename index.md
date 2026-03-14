---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Git Calendar"
  text: A private, open-source Git-backed calendar.
  tagline: Own your data!
  image: TODO
  actions:
    - theme: brand
      text: Get started
      link: /getting-started
    - theme: alt
      text: Deep dive
      link: /deep-dive

features:
  - title: Open Source
    details: The shared Core as well as the clients are all open source. Contributions are welcome.
    icon:
      dark: /assets/github-white.svg
      light: /assets/github-black.svg
      width: 40
    link: https://github.com/git-calendar
  - title: Decentralized
    details: Because the calendar is built on top of Git, users are free to choose any host for their repository, allowing them to use the platform they trust.
  - title: (not yet) E2E Encrypted
    details: Data stored in Git can also be end-to-end encrypted, enabling the use of hosts you do not control while still keeping the data private and secure.
---
