import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gkMethod } from "../lib/gk";
import ShowHide from "../components/showHide";
import "./UserInfo.css";

export default () => {
    const { uid } = useParams();
    const [data, setData] = useState(null);
    const [err, setErr] = useState();
    useEffect(() => {
        gkMethod("getUserInfo", uid)
            .then((result) => setData(result))
            .catch((err) => setErr(err));
    }, [uid]);

    if (err) return <p>错误，请保证已填入有效cookie，且UID须有效</p>;
    if (!data) return <p>数据加载中...</p>;

    return (
        <>
            <section className="section">
                <div className="role">
                    <div className="nickname">{data.role.nickname}</div>
                    <div className="roleInfo">
                        {data.role.region} {data.role.level}级
                    </div>
                </div>
            </section>

            <section className="section">
                <strong className="starTitle">数据总览</strong>
                <ShowHide
                    show={
                        <div className="grid">
                            <div className="stats">
                                <div>{data.stats.active_day_number}</div>
                                <div>活跃天数</div>
                            </div>

                            <div className="stats">
                                <div>{data.stats.achievement_number}</div>
                                <div>成就达成数</div>
                            </div>
                            <div className="stats">
                                <div>{data.stats.avatar_number}</div>
                                <div>获得角色数</div>
                            </div>
                            <div className="stats">
                                <div>{data.stats.way_point_number}</div>
                                <div>解锁传送锚点</div>
                            </div>
                        </div>
                    }
                    hide={
                        <div className="grid">
                            <div className="stats">
                                <div>{data.stats.anemoculus_number}</div>
                                <div>风神瞳</div>
                            </div>
                            <div className="stats">
                                <div>{data.stats.geoculus_number}</div>
                                <div>岩神瞳</div>
                            </div>
                            <div className="stats">
                                <div>{data.stats.electroculus_number}</div>
                                <div>雷神瞳</div>
                            </div>
                            <div className="stats">
                                <div>{data.stats.dendroculus_number}</div>
                                <div>草神瞳</div>
                            </div>
                            <div className="stats">
                                <div>{data.stats.domain_number}</div>
                                <div>解锁秘境</div>
                            </div>
                            <div className="stats">
                                <div>{data.stats.spiral_abyss}</div>
                                <div>深渊螺旋</div>
                            </div>
                            <div className="stats">
                                <div>{data.stats.luxurious_chest_number}</div>
                                <div>华丽宝箱数</div>
                            </div>
                            <div className="stats">
                                <div>{data.stats.precious_chest_number}</div>
                                <div>珍贵宝箱数</div>
                            </div>
                            <div className="stats">
                                <div>{data.stats.exquisite_chest_number}</div>
                                <div>精致宝箱数</div>
                            </div>
                            <div className="stats">
                                <div>{data.stats.common_chest_number}</div>
                                <div>普通宝箱数</div>
                            </div>
                            <div className="stats">
                                <div>{data.stats.magic_chest_number}</div>
                                <div>奇馈宝箱数</div>
                            </div>
                        </div>
                    }
                ></ShowHide>
            </section>

            <section className="section">
                <strong className="starTitle">TA的角色</strong>
                <div className="xScroll">
                    {data.avatars.map((avatar) => (
                        <div className="avatar">
                            <div className="avatarCard">
                                <img className="avatarImg" src={avatar.card_image} alt={avatar.name} />
                            </div>
                            <div className="avatarLevel">Lv.{avatar.level}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <strong className="starTitle">世界探索</strong>
                <div className="worlds slider">
                    {data.world_explorations.map((world) => (
                        <div
                            className="world sliderItem"
                            style={{ backgroundImage: `url(https://cors.deno.dev/${world.cover})` }}
                        >
                            <img className="worldIcon" src={world.icon} alt={world.name} />
                            <div className="worldName">{world.name}</div>
                            <div style={{ fontSize: "80%", fontWeight: "lighter" }}>
                                {Math.round(world.exploration_percentage / 10)}%
                            </div>
                            <progress value={world.exploration_percentage} max={1000}></progress>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <strong className="starTitle">尘歌壶</strong>
                <div className="slider">
                    {data.homes.map((home) => (
                        <div
                            className="sliderItem"
                            style={{ backgroundImage: `url(https://cors.deno.dev/${home.icon})` }}
                        >
                            <div className="homeTitle">
                                <div>
                                    <div className="homeName">
                                        <img src={home.comfort_level_icon} className="homeIcon" />
                                        {home.comfort_level_name}
                                    </div>
                                </div>
                                <small>{home.name}</small>
                            </div>
                            <div className="homeInfo">
                                <div className="homeStat">
                                    <div>{home.level}</div>
                                    <div>信任等阶</div>
                                </div>
                                <div className="homeStat">
                                    <div>{home.comfort_num}</div>
                                    <div>最高洞天仙力</div>
                                </div>
                                <div className="homeStat">
                                    <div>{home.item_num}</div>
                                    <div>获得摆设数</div>
                                </div>
                                <div className="homeStat">
                                    <div>{home.visit_num}</div>
                                    <div>历史访客数</div>
                                </div>
                            </div>
                            <div style={{ height: ".5rem" }}></div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
