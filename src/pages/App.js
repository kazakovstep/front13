import {H} from "../components/Htag/Htag";
import {withMainLayout} from "../Layout/MainLayout/Main";
import cn from "classnames";
import React, {useEffect, useState} from "react";
import styles from "../style/App.module.css";
import Shooter from "../images/boeviki.jpg";
import Comedy from "../images/comedy.jpg";
import Superheros from "../images/superheros.jpg";
import HStyle from "../components/Htag/Htag.module.css"
import {Link} from "react-router-dom";
import Voody from "../images/voody.jpg";
import {List} from "../components/List/List";
import Superman from "../images/Superman.jpg";
import Bond from "../images/Bond.jpg";
import IronMan from "../images/IronMan.jpeg";
import DreamWorks from "../images/Dreamworks.jpg";
import Paramount from "../images/Paramount.png";
import twentiethFox from "../images/20th Century Fox.jpg";
import Columbia from "../images/Columbia.jpg";
import Fantastic from "../images/fantastic.jpg"
import Detective from "../images/detective.jpg"
import Horror from "../images/horror.jpg"
import Adventure from "../images/adventure.jpeg"
import {Input} from "../components/Input/Input";
import {Textarea} from "../components/Textarea/Textarea";
import {Button} from "../components/Button/Button";
import Paralax from "../components/Paralax/Paralax";
export const App = () => {

    const [hoverIndex, setHoverIndex] = useState(null);

  const handleHover = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
        <div className={cn(styles.center_block)}>
            <H type={"h2"}>Киногерои - это <span>море интересных фактов</span><br/>
                о различных персонажах,
                наполненность<br/> которого полностью зависит <span>от вас</span></H>
        </div>
        <section>
            <div className={cn(styles.center_block)}>
              <H type={"h2"}>Топ <span>популярных</span> категорий:</H>
          </div>
            <Paralax speed={0.6}>
          <div className={cn(styles.popular_categories)}>
              <Link
                to="/catalog?category=Супергерои"
                className={cn(styles.image_container, styles.superheros, {
                  [styles.hovered]: [5, 1, 2, 3, 4, 6].includes(hoverIndex)
                })}
                onMouseEnter={() => handleHover(0)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={Superheros} alt="Superheros" />
                <H type="h3" className={cn(styles.sub, HStyle.h3)}>
                  Супергерои
                </H>
              </Link>
              <Link
                to="/catalog?category=Персонажи детективов"
                className={cn(styles.image_container,styles.shooters, {
                  [styles.hovered]: [0, 5, 2, 3, 4, 6].includes(hoverIndex)
                })}
                onMouseEnter={() => handleHover(1)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={Shooter} alt="Персонажи боевиков" />
                <H type="h3" className={cn(styles.sub, HStyle.h3)}>
                  Персонажи боевиков
                </H>
              </Link>
              <Link
                to="/catalog?category=Персонажи приключений"
                className={cn(styles.image_container, styles.adventure, {
                  [styles.hovered]: [0, 1, 5, 3, 4, 6].includes(hoverIndex)
                })}
                onMouseEnter={() => handleHover(2)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={Adventure} alt="Adventure" />
                <H type="h3" className={cn(styles.sub, HStyle.h3)}>
                  Персонажи приключений
                </H>
              </Link>
              <Link
                to="/catalog?category=Персонажи комедии"
                className={cn(styles.image_container, styles.comedians, {
                  [styles.hovered]: [0, 1, 2, 5, 4, 6].includes(hoverIndex)
                })}
                onMouseEnter={() => handleHover(3)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={Comedy} alt="Comedy" />
                <H type="h3" className={cn(styles.sub, HStyle.h3)}>
                  Персонажи комедии
                </H>
              </Link>
              <Link
                to="/catalog?category=Персонажи ужасов"
                className={cn(styles.image_container, {
                  [styles.hovered]: [0, 1, 2, 3, 5, 6].includes(hoverIndex)
                })}
                onMouseEnter={() => handleHover(4)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={Horror} alt="horror" />
                <H type="h3" className={cn(styles.sub, HStyle.h3)}>
                  Персонажи ужасов
                </H>
              </Link>
              <Link
                to="/catalog?category=Персонажи детективов"
                className={cn(styles.image_container, {
                  [styles.hovered]: [0, 1, 2, 3, 4, 6].includes(hoverIndex)
                })}
                onMouseEnter={() => handleHover(5)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={Detective} alt="detective" />
                <H type="h3" className={cn(styles.sub, HStyle.h3)}>
                  Персонажи детективов
                </H>
              </Link>
              <Link
                to="/catalog?category=Персонажи фантастики"
                className={cn(styles.image_container, styles.fantasy, {
                    [styles.hovered]: [0, 1, 2, 3, 4, 5].includes(hoverIndex)
                })}
                onMouseEnter={() => handleHover(6)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={Fantastic} alt="Fantastic" />
                <H type="h3" className={cn(styles.sub, HStyle.h3)}>
                  Персонажи детективов
                </H>
              </Link>
          </div>
            </Paralax>
        </section>
        <section>
          <div className={cn(styles.center_block)}>
            <H type={"h2"}>Цитата <span>дня</span></H>
          </div>
          <div className={cn(styles.quote)}>
            <img src={Voody} alt={"Voody"}/>
            <aside className={cn(styles.aside)}>
              <H type={"h3"}><q>Для игрушки самое главное — сделать ребенка счастливым</q></H>
            </aside>
          </div>
        </section>
        <section>
          <div className={cn(styles.center_block)}>
            <H type={"h2"}>Топ <span>искомых</span> персонажей</H>
          </div>
          <div className={cn(styles.quote)}>
            <img src={Superman} alt={"Superman"}/>
            <aside className={cn(styles.aside)}>
              <List orientation={"vertical"}>
                <H type={"h3"}>Супермен</H>
                <H type={"body"}>супергерой комиксов и фильмов, обладающий сверхчеловеческой силой, летающими способностями и
                  непробиваемостью.</H>
              </List>
            </aside>
          </div>
          <div className={cn(styles.quote)}>
            <img src={Bond} alt={"Bond"}/>
            <aside className={cn(styles.aside)}>
              <List orientation={"vertical"}>
                <H type={"h3"}>Джеймс Бонд</H>
                <H type={"body"}>известный герой из серии фильмов "007". Он является секретным агентом британской разведки MI6, и его основная задача - обезвреживать врагов и спасать мир.</H>
              </List>
            </aside>
          </div>
          <div className={cn(styles.quote)}>
            <img src={IronMan} alt={"IronMan"}/>
            <aside className={cn(styles.aside)}>
              <List orientation={"vertical"}>
                <H type={"h3"}>Железный человек</H>
                <H type={"body"}>миллиардер и изобретатель, который создал боевой костюм с уникальными возможностями,
                  позволяющими ему стать супергероем.</H>
              </List>
            </aside>
          </div>
        </section>
        <section>
          <div className={cn(styles.center_block)}>
            <H type={"h2"}>Топ <span>кинокомпаний</span></H>
          </div>
          <div className={cn(styles.center_block,styles.list)}>
            <List orientation={"vertical"}>
              <a href={"https://www.dreamworks.com/"} className={styles.circle_img} target={"_blank"}>
                <img src={DreamWorks} alt={"DreamWorks"}/>
              </a>
              <H type={"h3"} className={cn(HStyle.h3, styles.companyName)}>DreamWorks</H>
            </List>
            <List orientation={"vertical"}>
              <a href={"https://www.paramountpictures.com/"} className={styles.circle_img} target={"_blank"}>
                <img src={Paramount} alt={"Paramount"}/>
              </a>
              <H type={"h3"} className={cn(HStyle.h3, styles.companyName)}>Paramount</H>
            </List>
            <List orientation={"vertical"}>
              <a href={"https://www.20thcenturystudios.com/"} className={styles.circle_img} target={"_blank"}>
                <img src={twentiethFox} alt={"twentiethFox"}/>
              </a>
              <H type={"h3"} className={cn(HStyle.h3, styles.companyName)}>20th Century Fox</H>
            </List>
            <List orientation={"vertical"} className={styles.list_block}>
              <a href={"https://www.sonypictures.com/"} className={styles.circle_img} target={"_blank"}>
                <img src={Columbia} alt={"Columbia"}/>
              </a>
              <H type={"h3"} className={cn(HStyle.h3, styles.companyName)}>Columbia</H>
            </List>
          </div>
        </section>
        <div className={styles.feedback}>
            <H type={"h2"}>Ваши <span>впечатления</span> о сайте</H>
            <div className={styles.form}>
                <Input state={"default"} placeholder={"Ваше имя"} type={"text"}/>
                <Input state={"default"} placeholder={"E-mail"} type={"email"}/>
                <Input state={"default"} placeholder={"Телефон"} type={"phone"}/>
                <Input state={"default"} placeholder={"Персонаж"} type={"text"}/>
                <Textarea state={"default"} placeholder={"Ваше впечатление"} className={styles.textarea}/>
                <Button type={"primary"} state={"default"} className={styles.send}>Отправить</Button>
            </div>
        </div>
    </>
  );
}

export default withMainLayout(App);