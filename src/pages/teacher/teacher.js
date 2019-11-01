import React, { Component } from 'react'
import './teacher.css'
import { Icon, Button, Input } from 'antd';
import API from '../../common/js/api'
import Swipe from '../../views/swipe/swipe'
import seven from '../../common/img/7.png'
import eight from '../../common/img/8.png'
import nine from '../../common/img/9.png'
import ten from '../../common/img/10.png'
import eleven from '../../common/img/11.png'
const { Search } = Input;
class Blog extends Component {
    state = {
        banner: [],
        top: []
    }
    componentDidMount() {
        this.$axios({
            url: API.teacherBanner
        }).then(res => {
            console.log(res)
            this.setState({
                banner: res.data.data
            })
        })

        this.$axios({
            url: API.teacherTop
        }).then(res => {
            console.log(res)
            this.setState({
                top: res.data.data
            })
        })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Icon type="left" className="left" />
                    <span>找家教</span>
                </div>
                <div className="top">
                    <Search className="input1"
                        placeholder="search"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    <Button type="primary" className="btn1">我要发布</Button>
                </div>
                <Swipe item={this.state.banner}></Swipe>
                <div className="teacher_pic">
                    <img src={seven} alt="" />
                </div>
                <div className="teacher_nav">
                    <ul>
                        <li>
                            <img src={eight} alt="" />
                            <h4>小学</h4>
                        </li>
                        <li>
                            <img src={nine} alt="" />
                            <h4>初中</h4>
                        </li>
                        <li>
                            <img src={ten} alt="" />
                            <h4>高中</h4>
                        </li>
                        <li>
                            <img src={eleven} alt="" />
                            <h4>兴趣</h4>
                        </li>
                    </ul>
                </div>
                <div className="line">
                    <h2>top排行榜</h2>
                </div>
                <div className="billboard">
                    <ul>
                        {
                            this.state.top.map(item => {
                                return (
                                    <li key={item.id}>
                                        <img src={item.img} alt="" />
                                        <div className="jiGou">
                                            <img src={item.teacherImg} alt="" />
                                        </div>
                                        <h6>已报名{item.num}人</h6>
                                    </li>
                                )
                            })
                        }
                        {/* <li>
                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3583732105,1693032904&fm=26&gp=0.jpg" alt="" />
                            <div className="jiGou">
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3583732105,1693032904&fm=26&gp=0.jpg" alt="" />
                            </div>
                            <h6>已报名20人</h6>
                        </li> */}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Blog