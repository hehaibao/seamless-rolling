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
                liHeight: 30, //Li的高度，默认30px [纵向滚动时需要]
                liWidth: 200, //Li的宽度，默认200px [横向滚动时需要]
                hoverStop: true, //鼠标悬浮时，是否暂停，默认true：暂停
                direction: 0 //滚动方向，0：上; 1：下; 2：左; 3：右
            }, options);

            this.marquee();
        }
        marquee() {
            const _self = this;
            if($(_self.config.el).length <= 0) throw new Error('please set a dom'); //如果元素不存在，则抛出错误
            const $ulList = $(_self.config.el).find('ul');
            let timer = null;
            let _action = null;
            let speed = parseInt(_self.config.speed, 10) || 40;
            let direction = parseInt(_self.config.direction, 10) || 0;

            const start = () => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    
                    switch(direction) {
                        case 0:
                            _action = {marginTop: '-=1'};
                        break;
                        case 1:
                            _action = {marginTop: '+=1'};
                        break;
                        case 2:
                            _action = {marginLeft: '-=1'};
                        break;
                        case 3:
                            _action = {marginLeft: '+=1'};
                        break;
                    }

                    $ulList.animate(_action, 0, () => {
                        const [ _top, _left ] = [ Math.abs(parseInt($ulList.css("margin-top"))), Math.abs(parseInt($ulList.css("margin-left"))) ];
                        
                        const _appendDom = (type = 0) => {
                            const $li = $ulList.find('li');
                            const liLen = $li.length;

                            if(type == 0) {
                                $li.slice(0, 1).appendTo($ulList);
                            } else {
                                $li.slice(liLen-1, liLen).prependTo($ulList);
                            }
                        };

                        // 上 下
                        if(_left == 0 && _top >= parseInt(_self.config.liHeight, 10)) {
                            _appendDom(direction == 0 ? 0 : 1);
                            $ulList.css("margin-top", 0);
                        }
                        
                        // 左 右
                        if( _top == 0 && _left >= parseInt(_self.config.liWidth, 10)) {
                             _appendDom(direction == 2 ? 0 : 1);
                            $ulList.css("margin-left", 0);
                        }
                    });
                    
                    timer = setTimeout(start, speed);
                }, speed);
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