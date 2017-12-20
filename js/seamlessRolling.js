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
                speed: 50 //滚动速度，值越大越慢
            }, options);

            this.roll();
        }
        roll() {
            const _self = this;
            const $ulList = $(_self.config.el).find('ul');
            const [sh, uh] = [$(_self.config.el).height(),  $ulList.height()]; //ul父级高度，ul高度
            let timer = null;

            const start = () => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    if(uh <= sh) {
                        //ul高度不满足滚动，清除定时器
                        clearTimeout(timer);
                    } else {
                        $ulList.stop().animate({
                            marginTop: '-=1'
                        }, 10, () => {
                            const _top = Math.abs(parseInt($ulList.css("margin-top")));
                            if(_top >= uh) {
                                //滚动到底之后，重头开始
                                $ulList.animate({"margin-top": 0}, 0);
                            }
                        });
                        timer = setTimeout(start, _self.config.speed);
                    }
                }, _self.config.speed);
            };

            //自动开始滚动
            start();

            //鼠标悬浮时 暂停滚动，鼠标离开则继续
            $ulList.mouseenter(() => {
                clearTimeout(timer);
            }).mouseleave(() => {
                start();
            });
        }
    }

})(window.jQuery);