/**
 * @desc 无缝滚动插件
 * @author haibao[http://www.hehaibao.com/]
 */
;($ => {
    $.seamlessRolling = options => new seamlessRolling(options);
    class seamlessRolling {
        constructor(options) {
            this.init(options);
        }
        init(options) {
            //默认配置
            this.config = $.extend(true, {}, {
                el: '.scroll-list', //滚动列表DOM
                speed: 40, //滚动速度，值越大越慢
                liHeight: 30, //li的高度，默认30px
                hoverStop: true, //鼠标悬浮时，是否暂停，默认true：暂停
                direction: 0 //滚动方向，0：上; 1：下
            }, options);

            this.marquee();
        }
        marquee() {
            const _self = this;
            if($(_self.config.el).length <= 0) throw new Error('please set a dom'); //如果元素不存在，则抛出错误
            const $ulList = $(_self.config.el).find('ul');
            let timer = null;

            const start = () => {
                clearTimeout(timer);
                timer = setTimeout(() => {

                    $ulList.stop().animate({
                        marginTop: _self.config.direction == 0 ? '-=1' : '+=1'
                    }, 0, () => {
                        const _top = Math.abs(parseInt($ulList.css("margin-top")));
                        const $li = $ulList.find('li');
                        const liLen = $li.length;

                        if(_top >= _self.config.liHeight) {
                            if(_self.config.direction == 0) {
                                // 向上滚动
                                $li.slice(0, 1).appendTo($ulList);
                            } else if(_self.config.direction == 1) {
                                // 向下滚动
                                $ulList.prepend($li.slice(liLen-1, liLen));
                            }
                            $ulList.css("margin-top", 0);
                        }
                    });
                    
                    timer = setTimeout(start, _self.config.speed);
                }, _self.config.speed);
            };

            //自动开始滚动
            start();

            //鼠标悬浮时 暂停滚动，鼠标离开则继续
            $ulList.mouseenter(() => {
                if(_self.config.hoverStop) {
                    clearTimeout(timer);
                }
            }).mouseleave(() => {
                start();
            });
        }
    }

})(window.jQuery);