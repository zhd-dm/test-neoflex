let header = document.querySelector('.header');
let footer = document.querySelector('.footer');

header.insertAdjacentHTML('afterbegin',
    `<div class="wrapper">
        <div class="header-wrapper">
            <div class="logo">
                <a href="./index.html" class="logo-link">QPICK</a>
            </div>
            <nav class="header-nav">
                <ul class="header-list">
                    <li class="header-item">
                        <a href="#!" class="header-link">
                            <img src="./img/svg/like.svg" alt="image-like">
                        </a>
                    </li>
                    <li class="header-item">
                        <a href="./cart.html" class="header-link">
                            <img src="./img/svg/cart.svg" alt="image-cart">
                        </a>
                    </li>
                    <li class="header-tips">
                        <div class="like-tip">
                            <div class="header-tip">
                                <span class="header-tip-number"> 1 </span>
                                <img class="header-tip-image" src="./img/svg/ellipse.svg" alt="tip-ellipse">
                            </div>
                        </div>
                        <div class="cart-tip">
                            <div class="header-tip">
                                <!-- <span class="header-tip-number"> 2 </span> -->
                                <img class="header-tip-image" src="./img/svg/ellipse.svg" alt="tip-ellipse">
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>`
);

footer.insertAdjacentHTML('afterbegin',
    `
        <div class="wrapper">
            <div class="footer-wrapper">
                <div class="footer-logo">
                    <span class="logo-link"> QPICK </span>
                </div>
                <div class="footer-container">
                    <nav class="footer-nav">
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="#!" class="footer-link">
                                    <span> Favorites </span>
                                </a>
                            </li>
                            <li class="footer-item">
                                <a href="./cart.html" class="footer-link">
                                    <span> Cart </span>
                                </a>
                            </li>
                            <li class="footer-item">
                                <a href="#!" class="footer-link">
                                    <span> Contacts </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div class="language">
                        <ul class="language-list">
                            <li class="footer-item">
                                <a href="#!" class="footer-link">
                                    <span> Terms of service </span>
                                </a>
                            </li>
                            <li class="language-item">
                                <img class="language-link" src="./img/svg/group.svg" alt="Group">
                                <a href="#!" class="language-link">
                                    <span> Rus </span>
                                </a>
                                <a href="#!" class="language-link">
                                    <span> Eng </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="social">
                    <ul class="social-list">
                        <li class="social-item">
                            <a href="#!" class="language-link">
                                <img src="./img/svg/vk.svg" alt="VK">
                            </a>
                        </li>
                        <li class="social-item">
                            <a href="#!" class="language-link">
                                <img src="./img/svg/telegram.svg" alt="Telegram">
                            </a>
                        </li>
                        <li class="social-item">
                            <a href="#!" class="language-link">
                                <img src="./img/svg/whatsapp.svg" alt="WhatsApp">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
                    `
);