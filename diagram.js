var OrgChart = function(t, e) {
    var r = this;
    if (this.element = t, this.config = OrgChart.mergeDeep(OrgChart._defaultConfig(), e), this._layoutConfigs = {
            base: {
                orientation: this.config.orientation,
                levelSeparation: this.config.levelSeparation,
                mixedHierarchyNodesSeparation: this.config.mixedHierarchyNodesSeparation,
                assistantSeparation: this.config.assistantSeparation,
                subtreeSeparation: this.config.subtreeSeparation,
                siblingSeparation: this.config.siblingSeparation,
                layout: this.config.layout,
                columns: this.config.columns,
                collapse: this.config.collapse,
                partnerNodeSeparation: this.config.partnerNodeSeparation
            }
        }, this.config.tags)
        for (var i in this.config.tags) {
            var a = this.config.tags[i];
            null != a.subTreeConfig && (this._layoutConfigs[i] = {
                orientation: null != a.subTreeConfig.orientation ? a.subTreeConfig.orientation : this.config.orientation,
                levelSeparation: null != a.subTreeConfig.levelSeparation ? a.subTreeConfig.levelSeparation : this.config.levelSeparation,
                mixedHierarchyNodesSeparation: null != a.subTreeConfig.mixedHierarchyNodesSeparation ? a.subTreeConfig.mixedHierarchyNodesSeparation : this.config.mixedHierarchyNodesSeparation,
                assistantSeparation: null != a.subTreeConfig.assistantSeparation ? a.subTreeConfig.assistantSeparation : this.config.assistantSeparation,
                subtreeSeparation: null != a.subTreeConfig.subtreeSeparation ? a.subTreeConfig.subtreeSeparation : this.config.subtreeSeparation,
                siblingSeparation: null != a.subTreeConfig.siblingSeparation ? a.subTreeConfig.siblingSeparation : this.config.siblingSeparation,
                layout: null != a.subTreeConfig.layout ? a.subTreeConfig.layout : this.config.layout,
                columns: null != a.subTreeConfig.columns ? a.subTreeConfig.columns : this.config.columns,
                collapse: null != a.subTreeConfig.collapse ? a.subTreeConfig.collapse : this.config.collapse,
                partnerNodeSeparation: null != a.subTreeConfig.partnerNodeSeparation ? a.subTreeConfig.partnerNodeSeparation : this.config.partnerNodeSeparation
            })
        }
    if (this._event_id = OrgChart._guid(), !this.config.searchFields.length && this.config.nodeBinding)
        for (var n in this.config.nodeBinding) - 1 == n.indexOf("img") && "function" != typeof this.config.nodeBinding[n] && this.config.searchFields.push(this.config.nodeBinding[n]);
    OrgChart._validateConfig(this.config) && (this._vScroll = {}, this.config.ui || (this.ui = OrgChart.ui), this.config.editUI ? this.editUI = this.config.editUI : this.editUI = new OrgChart.editUI, this.editUI.init(this), this.manager = new OrgChart.manager(this.config, this._layoutConfigs), this.config.searchUI ? this.searchUI = this.config.searchUI : this.searchUI = new OrgChart.searchUI, this.config.nodeMenuUI ? this.nodeMenuUI = this.config.nodeMenuUI : this.nodeMenuUI = new OrgChart.menuUI, this.nodeMenuUI.init(this, this.config.nodeMenu), this.config.nodeCircleMenuUI ? this.nodeCircleMenuUI = this.config.nodeCircleMenuUI : this.nodeCircleMenuUI = new OrgChart.circleMenuUI, this.nodeCircleMenuUI.init(this, this.config.nodeCircleMenu), this.config.nodeContextMenuUI ? this.nodeContextMenuUI = this.config.nodeContextMenuUI : this.nodeContextMenuUI = new OrgChart.menuUI, this.nodeContextMenuUI.init(this, this.config.nodeContextMenu), this.config.toolbarUI ? this.toolbarUI = this.config.toolbarUI : this.toolbarUI = new OrgChart.toolbarUI, this.config.notifierUI ? this.notifierUI = this.config.notifierUI : this.notifierUI = new OrgChart.notifierUI, this.notifierUI.init(this), this.config.menuUI ? this.menuUI = this.config.menuUI : this.menuUI = new OrgChart.menuUI, this.menuUI.init(this, this.config.menu), this.config.xScrollUI || (this.xScrollUI = new OrgChart.xScrollUI(this.element, this.config, (function() {
        return {
            boundary: r.response.boundary,
            scale: r.getScale(),
            viewBox: r.getViewBox(),
            padding: r.config.padding
        }
    }), (function(t) {
        r.setViewBox(t)
    }), (function() {
        r._draw(!0, OrgChart.action.xScroll)
    }))), this.config.yScrollUI || (this.yScrollUI = new OrgChart.yScrollUI(this.element, this.config, (function() {
        return {
            boundary: r.response.boundary,
            scale: r.getScale(),
            viewBox: r.getViewBox(),
            padding: r.config.padding
        }
    }), (function(t) {
        r.setViewBox(t)
    }), (function() {
        r._draw(!0, OrgChart.action.xScroll)
    }))), this.element.classList.add(this.config.mode), this._gragStartedId = null, this._timeout = null, this._touch = null, this._initialized = !1, this._moveInterval = null, this._movePosition = null, this.response = null, this.nodes = null, this._setInitialSizeIfNotSet(), this.config.nodes.length > 0 && this._draw(!1, OrgChart.action.init))
};
OrgChart._defaultConfig = function() {
    return {
        mode: "light",
        lazyLoading: !0,
        enableDragDrop: !1,
        enableSearch: !0,
        enableTouch: !1,
        enableKeyNavigation: !1,
        miniMap: !1,
        nodeMenu: null,
        nodeCircleMenu: null,
        nodeContextMenu: null,
        menu: null,
        toolbar: !1,
        sticky: !0,
        nodeMouseClick: OrgChart.action.details,
        nodeMouseDbClick: OrgChart.none,
        mouseScrool: OrgChart.action.zoom,
        showXScroll: OrgChart.none,
        showYScroll: OrgChart.none,
        template: "ana",
        tags: {},
        min: !1,
        nodeBinding: {},
        linkBinding: {},
        searchFields: [],
        searchDisplayField: null,
        searchFieldsWeight: null,
        nodes: [],
        clinks: [],
        slinks: [],
        levelSeparation: 60,
        siblingSeparation: 20,
        subtreeSeparation: 40,
        mixedHierarchyNodesSeparation: 15,
        assistantSeparation: 100,
        minPartnerSeparation: 50,
        partnerChildrenSplitSeparation: 20,
        partnerNodeSeparation: 15,
        columns: 10,
        padding: 30,
        orientation: OrgChart.orientation.top,
        layout: OrgChart.normal,
        scaleInitial: 1,
        scaleMin: .1,
        scaleMax: 5,
        orderBy: null,
        editUI: null,
        searchUI: null,
        xScrollUI: null,
        yScrollUI: null,
        nodeMenuUI: null,
        nodeCircleMenuUI: null,
        nodeContextMenuUI: null,
        toolbarUI: null,
        notifierUI: null,
        menuUI: null,
        exportUrl: "https://balkan.app/export",
        collapse: {},
        expand: {},
        align: OrgChart.CENTER,
        UI: null,
        anim: {
            func: OrgChart.anim.outPow,
            duration: 200
        },
        zoom: {
            speed: 120,
            smooth: 12
        },
        roots: null,
        state: null,
        editForm: {
            readOnly: !1,
            titleBinding: "name",
            photoBinding: "img",
            addMore: "Add more fileds",
            addMoreBtn: "Add",
            addMoreFieldName: "Field name",
            generateElementsFromFields: !0,
            buttons: {
                edit: {
                    icon: OrgChart.icon.edit(24, 24, "#fff"),
                    text: "Edit",
                    hideIfEditMode: !0,
                    hideIfDetailsMode: !1
                },
                share: {
                    icon: OrgChart.icon.share(24, 24, "#fff"),
                    text: "Share"
                },
                pdf: {
                    icon: OrgChart.icon.pdf(24, 24, "#fff"),
                    text: "Save as PDF"
                },
                remove: {
                    icon: OrgChart.icon.remove(24, 24, "#fff"),
                    text: "Remove",
                    hideIfDetailsMode: !0
                }
            },
            elements: []
        }
    }
}, OrgChart.prototype.load = function(t) {
    return this.config.nodes = t, this._draw(!1, OrgChart.action.init), this
}, OrgChart.prototype.loadXML = function(t) {
    var e = OrgChart._xml2json(t);
    this.load(e)
}, OrgChart.prototype.getXML = function() {
    return OrgChart._json2xml(this.config.nodes)
}, OrgChart.prototype.on = function(t, e) {
    return OrgChart.events.on(t, e, this._event_id), this
}, OrgChart.prototype.draw = function(t, e, r) {
    null == t && (t = OrgChart.action.update), this._draw(!1, t, e, r)
}, OrgChart.prototype._draw = function(t, e, r, i) {
    var a = this;
    this._hideBeforeAnimationCompleted = !1;
    var n = e == OrgChart.action.init ? null : this.getViewBox();
    this.manager.read(t, this.width(), this.height(), n, e, r, (function(t) {
        e != OrgChart.action.exporting && (a.nodes = t.nodes, a.visibleNodeIds = t.visibleNodeIds, a.roots = t.roots), a.editUI.fields = t.allFields;
        var n = {
            defs: ""
        };
        OrgChart.events.publish("renderdefs", [a, n]);
        var o = a.ui.defs(n.defs),
            l = a.getScale(t.viewBox);
        o += a.ui.pointer(a.config, e, l);
        var s = a.getViewBox(),
            h = t.viewBox;
        n = {
            content: o,
            res: t
        };
        OrgChart.events.publish("prerender", [a, n]), o = n.content;
        for (var d = 0; d < t.visibleNodeIds.length; d++) {
            var c = t.nodes[t.visibleNodeIds[d]],
                g = a._get(c.id);
            OrgChart.RENDER_LINKS_BEFORE_NODES && (o += a.ui.link(c, a, l, t.bordersByRootIdAndLevel, t.nodes, e)), o += a.ui.node(c, g, t.animations, a.config, void 0, void 0, void 0, e, l, a)
        }
        for (d = 0; d < t.visibleNodeIds.length; d++) {
            c = t.nodes[t.visibleNodeIds[d]];
            OrgChart.RENDER_LINKS_BEFORE_NODES || (o += a.ui.link(c, a, l, t.bordersByRootIdAndLevel, t.nodes, e)), o += a.ui.expandCollapseBtn(a, c, a._layoutConfigs, e, l)
        }
        n = {
            content: o,
            res: t
        };
        if (OrgChart.events.publish("render", [a, n]), o = n.content, t = n.res, o += a.ui.lonely(a.config), e !== OrgChart.action.exporting) {
            e !== OrgChart.action.centerNode && e !== OrgChart.action.insert && e !== OrgChart.action.expand && e !== OrgChart.action.collapse && e !== OrgChart.action.update || (h = s), e === OrgChart.action.init && null != s && (h = s), a.response = t;
            b = a.ui.svg(a.width(), a.height(), h, a.config, o);
            if (a._initialized) {
                var p = a.getSvg(),
                    u = p.parentNode;
                u.removeChild(p), u.insertAdjacentHTML("afterbegin", b), a._attachEventHandlers(), a.xScrollUI.addListener(a.getSvg()), a.yScrollUI.addListener(a.getSvg()), a.xScrollUI.setPosition(), a.yScrollUI.setPosition()
            } else a.element.innerHTML = a.ui.css() + b + a.ui.menuButton(a.config), a._attachInitEventHandlers(), a._attachEventHandlers(), a.xScrollUI.create(a.width(), a.config.padding), a.xScrollUI.setPosition(), a.xScrollUI.addListener(a.getSvg()), a.yScrollUI.create(a.height(), a.config.padding), a.yScrollUI.setPosition(), a.yScrollUI.addListener(a.getSvg()), a.config.enableSearch && a.searchUI.init(a), a.toolbarUI.init(a, a.config.toolbar);
            var f = !1;
            a.notifierUI.show(t.notif);
            var m = a.response.animations;
            if (m[0].length > 0) {
                a._hideBeforeAnimation(m[0].length);
                for (d = 0; d < m[0].length; d++) m[0][d] = a.getNodeElement(m[0][d]);
                OrgChart.anim(m[0], m[1], m[2], a.config.anim.duration, a.config.anim.func, (function() {
                    f || (i && i(), OrgChart.events.publish("redraw", [a]), a._showAfterAnimation(), f = !0)
                }))
            }
            e === OrgChart.action.centerNode ? OrgChart.anim(a.getSvg(), {
                viewbox: s
            }, {
                viewbox: a.response.viewBox
            }, a.config.anim.duration, a.config.anim.func, (function() {
                a.ripple(r.options.rippleId), f || (i && i(), OrgChart.events.publish("redraw", [a]), a._showAfterAnimation(), f = !0)
            }), (function() {
                a.xScrollUI.setPosition(), a.yScrollUI.setPosition()
            })) : !s || !a.response || s[0] == a.response.viewBox[0] && s[1] == a.response.viewBox[1] && s[2] == a.response.viewBox[2] && s[3] == a.response.viewBox[3] || e !== OrgChart.action.insert && e !== OrgChart.action.expand && e !== OrgChart.action.collapse && e !== OrgChart.action.update && e !== OrgChart.action.init ? 0 == m[0].length && (f || (i && i(), OrgChart.events.publish("redraw", [a]), f = !0)) : OrgChart.anim(a.getSvg(), {
                viewbox: s
            }, {
                viewbox: a.response.viewBox
            }, 500, OrgChart.anim.inOutPow, (function() {
                a.xScrollUI.setPosition(), a.yScrollUI.setPosition(), f || (i && i(), OrgChart.events.publish("redraw", [a]), f = !0)
            })), a._initialized || (a._initialized = !0, OrgChart.events.publish("init", [a]))
        } else {
            var C = t.boundary,
                O = C.maxX - C.minX,
                v = C.maxY - C.minY,
                b = a.ui.svg(O, v, [C.minX, C.minY, O, v], a.config, o, l);
            i(b)
        }
    }), (function(t) {
        OrgChart.events.publish("ready", [a, t])
    }))
}, OrgChart.prototype._setInitialSizeIfNotSet = function() {
    this.element.style.overflow = "hidden", this.element.style.position = "relative", 0 == this.element.offsetHeight && (this.element.style.height = "100%", 0 == this.element.offsetHeight && (this.element.style.height = "700px")), 0 == this.element.offsetWidth && (this.element.style.width = "100%", 0 == this.element.offsetWidth && (this.element.style.width = "700px"))
}, OrgChart.prototype.getViewBox = function() {
    var t = this.getSvg();
    return OrgChart._getViewBox(t)
}, OrgChart.prototype.setViewBox = function(t) {
    this.getSvg().setAttribute("viewBox", t.toString())
}, OrgChart.prototype.width = function() {
    return this.element.offsetWidth
}, OrgChart.prototype.height = function() {
    return this.element.offsetHeight
}, OrgChart.prototype.getScale = function(t) {
    return t || (t = this.getViewBox()), OrgChart.getScale(t, this.width(), this.height(), this.config.scaleInitial, this.config.scaleMax, this.config.scaleMin)
}, OrgChart.prototype.ripple = function(t, e, r) {
    var i = this.getNode(t);
    if (null != i) {
        var a = this.getNodeElement(t);
        if (null != a) {
            var n = this.getScale(),
                o = i.w / 2,
                l = i.h / 2;
            if (void 0 !== e && void 0 !== r) {
                var s = a.getBoundingClientRect();
                o = e / n - s.left / n, l = r / n - s.top / n
            }
            var h = i.w,
                d = i.h,
                c = h - o > o ? h - o : o,
                g = d - l > l ? d - l : l,
                p = (c = c) > (g = g) ? c : g,
                u = document.createElementNS("http://www.w3.org/2000/svg", "g"),
                f = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"),
                m = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
                C = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
                O = OrgChart.randomId();
            f.setAttribute("id", O);
            var v = {
                ripple: OrgChart.t(i.templateName, i.min, this.getScale()).ripple,
                node: i
            };
            OrgChart.events.publish("ripple", [this, v]), m.setAttribute("x", v.ripple.rect ? v.ripple.rect.x : 0), m.setAttribute("y", v.ripple.rect ? v.ripple.rect.y : 0), m.setAttribute("width", v.ripple.rect ? v.ripple.rect.width : i.w), m.setAttribute("height", v.ripple.rect ? v.ripple.rect.height : i.h), m.setAttribute("rx", v.ripple.radius), m.setAttribute("ry", v.ripple.radius), C.setAttribute("clip-path", "url(#" + O + ")"), C.setAttribute("cx", o), C.setAttribute("cy", l), C.setAttribute("r", 0), C.setAttribute("fill", v.ripple.color), C.setAttribute("class", "ripple"), f.appendChild(m), u.appendChild(f), u.appendChild(C), a.appendChild(u), OrgChart.anim(C, {
                r: 0,
                opacity: 1
            }, {
                r: p,
                opacity: 0
            }, 500, OrgChart.anim.outPow, (function() {
                a.removeChild(u)
            }))
        }
    }
}, OrgChart.prototype.center = function(t, e, r) {
    var i, a, n = t,
        o = !0,
        l = !0;
    e && null != e.parentState && (i = e.parentState), e && null != e.childrenState && (a = e.childrenState), e && null != e.rippleId && (n = e.rippleId), e && null != e.vertical && (o = e.vertical), e && null != e.horizontal && (l = e.horizontal);
    var s = {
        parentState: i,
        childrenState: a,
        rippleId: n,
        vertical: o,
        horizontal: l
    };
    this._draw(!1, OrgChart.action.centerNode, {
        id: t,
        options: s
    }, r)
}, OrgChart.prototype.fit = function(t) {
    this.config.scaleInitial = OrgChart.match.boundary, this._draw(!0, OrgChart.action.init, {
        method: "fit"
    }, t)
}, OrgChart.prototype.toggleFullScreen = function() {
    var t = document.querySelector("[" + OrgChart.attr.tlbr + "r='fullScreen']");
    document.fullscreenElement == this.element || document.webkitFullscreenElement == this.element || document.mozFullScreenElement == this.element || document.msFullscreenElement == this.element ? (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen(), t && (t.innerHTML = OrgChart.toolbarUI.openFullScreenIcon)) : (this.element.requestFullscreen ? this.element.requestFullscreen() : this.element.mozRequestFullScreen ? this.element.mozRequestFullScreen() : this.element.webkitRequestFullscreen ? this.element.webkitRequestFullscreen() : this.element.msRequestFullscreen && this.element.msRequestFullscreen(), t && (t.innerHTML = OrgChart.toolbarUI.closeFullScreenIcon))
}, OrgChart.prototype.getNode = function(t) {
    return this.nodes[t]
}, OrgChart.prototype.setLayout = function(t, e) {
    e || (e = "base"), this._layoutConfigs[e].layout = t, this._draw(!1, OrgChart.action.update)
}, OrgChart.prototype.setOrientation = function(t, e) {
    e || (e = "base"), this._layoutConfigs[e].orientation = t, this._draw(!1, OrgChart.action.update)
}, OrgChart.prototype.search = function(t, e, r) {
    return OrgChart.isNEU(e) && (e = this.config.searchFields), OrgChart.isNEU(r) && (r = e), OrgChart._search.search(this.config.nodes, t, e, r, this.config.searchDisplayField, this.config.searchFieldsWeight)
}, OrgChart.prototype._hideBeforeAnimation = function(t) {
    if (1 != this._hideBeforeAnimationCompleted && !(t && t < OrgChart.ANIM_THRESHOLD)) {
        var e = this.element.getElementsByTagName("text");
        if (e.length > OrgChart.TEXT_THRESHOLD)
            for (var r = 0; r < e.length; r++) e[r].style.display = "none";
        var i = this.element.getElementsByTagName("image");
        if (i.length > OrgChart.IMAGES_THRESHOLD)
            for (r = 0; r < i.length; r++) i[r].style.display = "none";
        var a = this.element.querySelectorAll("[" + OrgChart.attr.link_id + "]");
        if (a.length > OrgChart.LINKS_THRESHOLD)
            for (r = 0; r < a.length; r++) a[r].style.display = "none";
        var n = this.element.querySelectorAll("[" + OrgChart.attr.control_expcoll_id + "]");
        if (n.length > OrgChart.BUTTONS_THRESHOLD)
            for (r = 0; r < n.length; r++) n[r].style.display = "none";
        var o = this.element.querySelectorAll("[" + OrgChart.attr.control_up_id + "]");
        if (o.length > OrgChart.BUTTONS_THRESHOLD)
            for (r = 0; r < o.length; r++) o[r].style.display = "none";
        this._hideBeforeAnimationCompleted = !0
    }
}, OrgChart.prototype._showAfterAnimation = function() {
    for (var t = this.element.getElementsByTagName("text"), e = 0; e < t.length; e++) t[e].style.display = "";
    var r = this.element.getElementsByTagName("image");
    for (e = 0; e < r.length; e++) r[e].style.display = "";
    var i = this.element.querySelectorAll("[" + OrgChart.attr.link_id + "]");
    for (e = 0; e < i.length; e++) i[e].style.display = "";
    var a = this.element.querySelectorAll("[" + OrgChart.attr.control_expcoll_id + "]");
    for (e = 0; e < a.length; e++) a[e].style.display = "";
    var n = this.element.querySelectorAll("[" + OrgChart.attr.control_up_id + "]");
    for (e = 0; e < n.length; e++) n[e].style.display = "";
    this._hideBeforeAnimationCompleted = !1
}, OrgChart.prototype.isChild = function(t, e) {
    for (var r = this.getNode(e); r;) {
        if (r.id == t) return !0;
        r = r.parent ? r.parent : r.stParent
    }
    return !1
}, OrgChart.prototype.getCollapsedIds = function(t) {
    for (var e = [], r = 0; r < t.childrenIds.length; r++) {
        var i = this.getNode(t.childrenIds[r]);
        1 == i.collapsed && e.push(i.id)
    }
    return e
}, OrgChart.prototype.stateToUrl = function() {
    if (this.manager.state) {
        var t = {};
        return t.exp = this.manager.state.exp.join("*"), t.min = this.manager.state.min.join("*"), t.adjustify = this.manager.state.adjustify.x + "*" + this.manager.state.adjustify.y, t.scale = this.manager.state.scale, t.y = this.manager.state.x, t.x = this.manager.state.y, new URLSearchParams(t).toString()
    }
    return ""
}, OrgChart.prototype.generateId = function() {
    for (;;) {
        var t = "_" + ("0000" + (Math.random() * Math.pow(36, 4) | 0).toString(36)).slice(-4);
        if (!this.nodes.hasOwnProperty(t)) return t
    }
}, OrgChart.prototype._nodeHasHiddenParent = function(t) {
    return !t.parent && !OrgChart.isNEU(t.pid) && this.getNode(t.pid)
}, OrgChart.prototype.destroy = function() {
    this._removeEvent(window, "resize"), OrgChart.events.removeForEventId(this._event_id), this.element.innerHTML = null
}, OrgChart.localStorage = {}, OrgChart.localStorage.getItem = function(t) {
    return localStorage.getItem(t)
}, OrgChart.localStorage.setItem = function(t, e) {
    try {
        localStorage.setItem(t, e)
    } catch (t) {
        t.code == t.QUOTA_EXCEEDED_ERR ? (console.warn("Local storage quota exceeded"), localStorage.clear()) : (console.error("Local storage error code:" + t.code), console.error(t))
    }
}, OrgChart.prototype._canUpdateLink = function(t, e) {
    if (null == e || null == e) return !1;
    if (null == t || null == t) return !1;
    if (t == e) return !1;
    var r = this.getNode(e),
        i = this.getNode(t);
    return !(r && i && (r.isAssistant || r.isPartner || r.hasPartners && i.isAssistant || r.hasAssistants && i.isPartner)) && !this.isChild(t, e)
}, OrgChart.prototype.updateNode = function(t, e, r) {
    var i = this,
        a = this.get(t.id);
    if (!0 === r && !1 === OrgChart.events.publish("update", [this, a, t])) return !1;
    this.update(t);
    var n = this.getNode(t.id),
        o = n.pid;
    null == o && (o = n.stpid), this._draw(!1, OrgChart.action.update, {
        id: o
    }, (function() {
        i.ripple(t.id), e && e(), OrgChart.events.publish("updated", [i, a, t])
    }))
}, OrgChart.prototype.update = function(t) {
    for (var e = 0; e < this.config.nodes.length; e++)
        if (this.config.nodes[e].id == t.id) {
            this.config.nodes[e] = t;
            break
        } return this
}, OrgChart.prototype.removeNode = function(t, e, r) {
    var i = this;
    if (!this.canRemove(t)) return !1;
    var a = this._getNewPidsAndStpidsForIds(t);
    if (!0 === r && !1 === OrgChart.events.publish("remove", [this, t, a])) return !1;
    return this.remove(t), this._draw(!1, OrgChart.action.update, null, (function() {
        i.config.sticky && OrgChart._moveToBoundaryArea(i.getSvg(), i.getViewBox(), i.response.boundary), e && e(), OrgChart.events.publish("removed", [i, t, a])
    })), !0
}, OrgChart.prototype.remove = function(t) {
    var e = this.get(t);
    if (e)
        for (var r = this.config.nodes.length - 1; r >= 0; r--) this.config.nodes[r].pid != t && this.config.nodes[r].stpid != t || (this.config.nodes[r].pid = e.pid, this.config.nodes[r].stpid = e.stpid), this.config.nodes[r].id == t && this.config.nodes.splice(r, 1);
    return this
}, OrgChart.prototype._getNewPidsAndStpidsForIds = function(t) {
    var e = this.get(t),
        r = {},
        i = {};
    if (e)
        for (var a = this.config.nodes.length - 1; a >= 0; a--) this.config.nodes[a].pid == t ? r[this.config.nodes[a].id] = e.pid : this.config.nodes[a].stpid == t && (i[this.config.nodes[a].id] = e.stpid);
    return {
        newPidsForIds: r,
        newStpidsForIds: i
    }
}, OrgChart.prototype.addNode = function(t, e, r) {
    var i = this;
    if (!0 === r && !1 === OrgChart.events.publish("add", [this, t])) return !1;
    this.add(t), i._draw(!1, OrgChart.action.insert, {
        id: t.pid,
        insertedNodeId: t.id
    }, (function() {
        i.ripple(t.id), e && e(), OrgChart.events.publish("added", [i, t.id])
    })), OrgChart.events.publish("adding", [i, t.id])
}, OrgChart.prototype.add = function(t) {
    return null == t.id && console.error("Call addNode without id"), this.config.nodes.push(t), this
}, OrgChart.prototype._get = function(t) {
    for (var e = 0; e < this.config.nodes.length; e++)
        if (this.config.nodes[e].id == t) return this.config.nodes[e];
    return null
}, OrgChart.prototype.get = function(t) {
    for (var e = 0; e < this.config.nodes.length; e++)
        if (this.config.nodes[e].id == t) return JSON.parse(JSON.stringify(this.config.nodes[e]));
    return null
}, OrgChart.prototype.canRemove = function(t) {
    var e = this.getNode(t);
    return !!e && (!e.hasPartners && !e.hasAssistants)
}, void 0 === OrgChart && (OrgChart = {}), OrgChart._ajax = function(t, e, r, i, a) {
    null == i && (i = "arraybuffer");
    var n = new XMLHttpRequest;
    n.onload = function(t) {
        4 == n.readyState && 200 === this.status && (null == t.target ? a(this.response) : a(t.target.response))
    }, n.onerror = function(t) {
        a({
            error: t
        })
    }, n.open(e, t), n.responseType = i, n.setRequestHeader("Content-Type", "application/json"), null == r ? n.send() : n.send(r)
}, void 0 === OrgChart && (OrgChart = {}), OrgChart.anim = function(t, e, r, i, a, n, o) {
    var l, s = 10,
        h = 1,
        d = i / s + 1;
    document.getElementsByTagName("g");
    return Array.isArray(t) || (t = [t]), Array.isArray(e) || (e = [e]), Array.isArray(r) || (r = [r]), l = setInterval((function() {
        for (var c = 0; c < t.length; c++)
            for (var g in r[c]) {
                var p = OrgChart._arrayContains(["top", "left", "right", "bottom", "width", "height"], g.toLowerCase()) ? "px" : "";
                switch (g.toLowerCase()) {
                    case "d":
                        var u = a((h * s - s) / i) * (r[c][g][0] - e[c][g][0]) + e[c][g][0],
                            f = a((h * s - s) / i) * (r[c][g][1] - e[c][g][1]) + e[c][g][1];
                        t[c].setAttribute("d", t[c].getAttribute("d") + " L" + u + " " + f);
                        break;
                    case "r":
                        var m = a((h * s - s) / i) * (r[c][g] - e[c][g]) + e[c][g];
                        t[c].setAttribute("r", m);
                        break;
                    case "x1":
                        m = a((h * s - s) / i) * (r[c][g] - e[c][g]) + e[c][g];
                        t[c].setAttribute("x1", m);
                        break;
                    case "x2":
                        m = a((h * s - s) / i) * (r[c][g] - e[c][g]) + e[c][g];
                        t[c].setAttribute("x2", m);
                        break;
                    case "y1":
                        m = a((h * s - s) / i) * (r[c][g] - e[c][g]) + e[c][g];
                        t[c].setAttribute("y1", m);
                        break;
                    case "y2":
                        m = a((h * s - s) / i) * (r[c][g] - e[c][g]) + e[c][g];
                        t[c].setAttribute("y2", m);
                        break;
                    case "rotate3d":
                        if (r[c][g]) {
                            var C = e[c][g],
                                O = r[c][g],
                                v = [0, 0, 0, 0];
                            for (var b in C) v[b] = a((h * s - s) / i) * (O[b] - C[b]) + C[b];
                            t[c].style.transform = "rotate3d(" + v.toString() + "deg)"
                        }
                        break;
                    case "transform":
                        if (r[c][g]) {
                            C = e[c][g], O = r[c][g], v = [0, 0, 0, 0, 0, 0];
                            for (var b in C) v[b] = a((h * s - s) / i) * (O[b] - C[b]) + C[b];
                            t[c].hasAttribute("transform") ? t[c].setAttribute("transform", "matrix(" + v.toString() + ")") : t[c].style.transform = "matrix(" + v.toString() + ")"
                        }
                        break;
                    case "viewbox":
                        if (r[c][g]) {
                            C = e[c][g], O = r[c][g], v = [0, 0, 0, 0];
                            for (var b in C) v[b] = a((h * s - s) / i) * (O[b] - C[b]) + C[b];
                            t[c].setAttribute("viewBox", v.toString())
                        }
                        break;
                    case "margin":
                        if (r[c][g]) {
                            C = e[c][g], O = r[c][g], v = [0, 0, 0, 0];
                            for (var b in C) v[b] = a((h * s - s) / i) * (O[b] - C[b]) + C[b];
                            var x = "";
                            for (b = 0; b < v.length; b++) x += parseInt(v[b]) + "px ";
                            t[c] && t[c].style && (t[c].style[g] = x)
                        }
                        break;
                    case "scrolly":
                        m = a((h * s - s) / i) * (r[c][g] - e[c][g]) + e[c][g];
                        t[c].scrollTo(0, m);
                        break;
                    default:
                        m = a((h * s - s) / i) * (r[c][g] - e[c][g]) + e[c][g];
                        t[c] && t[c].style && (t[c].style[g] = m + p)
                }
            }
        o && o(), (h += 1) > d + 1 && (clearInterval(l), n && n(t))
    }), s)
}, OrgChart.anim.inPow = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : Math.pow(t, 2)
}, OrgChart.anim.outPow = function(t) {
    if (t < 0) return 0;
    if (t > 1) return 1;
    return -1 * (Math.pow(t - 1, 2) + -1)
}, OrgChart.anim.inOutPow = function(t) {
    if (t < 0) return 0;
    if (t > 1) return 1;
    if ((t *= 2) < 1) return OrgChart.anim.inPow(t, 2) / 2;
    return -.5 * (Math.pow(t - 2, 2) + -2)
}, OrgChart.anim.inSin = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : 1 - Math.cos(t * (Math.PI / 2))
}, OrgChart.anim.outSin = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : Math.sin(t * (Math.PI / 2))
}, OrgChart.anim.inOutSin = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : -.5 * (Math.cos(Math.PI * t) - 1)
}, OrgChart.anim.inExp = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : Math.pow(2, 10 * (t - 1))
}, OrgChart.anim.outExp = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : 1 - Math.pow(2, -10 * t)
}, OrgChart.anim.inOutExp = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, 10 * (-2 * t + 1)))
}, OrgChart.anim.inCirc = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : -(Math.sqrt(1 - t * t) - 1)
}, OrgChart.anim.outCirc = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : Math.sqrt(1 - (t - 1) * (t - 1))
}, OrgChart.anim.inOutCirc = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : t < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (2 * t - 2) * (2 * t - 2)) + 1)
}, OrgChart.anim.rebound = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : t < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t - 1.5 / 2.75) * (t - 1.5 / 2.75) + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t - 2.25 / 2.75) * (t - 2.25 / 2.75) + .9375) : 1 - (7.5625 * (t - 2.625 / 2.75) * (t - 2.625 / 2.75) + .984375)
}, OrgChart.anim.inBack = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : t * t * (2.70158 * t - 1.70158)
}, OrgChart.anim.outBack = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : (t - 1) * (t - 1) * (2.70158 * (t - 1) + 1.70158) + 1
}, OrgChart.anim.inOutBack = function(t) {
    return t < 0 ? 0 : t > 1 ? 1 : t < .5 ? 4 * t * t * (7.1898 * t - 2.5949) * .5 : .5 * ((2 * t - 2) * (2 * t - 2) * (3.5949 * (2 * t - 2) + 2.5949) + 2)
}, OrgChart.anim.impulse = function(t) {
    var e = 2 * t;
    return e * Math.exp(1 - e)
}, OrgChart.anim.expPulse = function(t) {
    return Math.exp(-2 * Math.pow(t, 2))
}, void 0 === OrgChart && (OrgChart = {}), OrgChart.prototype._attachInitEventHandlers = function(t) {
    this._addEvent(window, "resize", this._resizeHandler)
}, OrgChart.prototype._attachEventHandlers = function(t) {
    t = this.getSvg();
    this.config.enableTouch || OrgChart.isMobile() ? (this._addEvent(t, "touchstart", this._globalMouseDownHandler), this._addEvent(t, "touchend", this._globalClickHandler)) : (this._addEvent(t, "mousedown", this._globalMouseDownHandler), this._addEvent(t, "click", this._globalClickHandler), this._addEvent(t, "contextmenu", this._globalContextHandler), this._addEvent(t, "dblclick", this._globalDbClickHandler), this.config.mouseScrool != OrgChart.action.zoom && this.config.mouseScrool != OrgChart.action.ctrlZoom || (this._addEvent(t, "DOMMouseScroll", this._mouseScrollHandler), this._addEvent(t, "mousewheel", this._mouseScrollHandler)));
    var e = this.getMenuButton();
    e && this._addEvent(e, "click", this._menuClickHandler)
}, OrgChart.prototype._addEvent = function(t, e, r, i) {
    var a, n;
    (i || (i = ""), t.getListenerList || (t.getListenerList = {}), t.getListenerList[e + i]) || (a = this, n = r, r = function() {
        if (n) return n.apply(a, [this, arguments[0]])
    }, t.addEventListener ? "mousewheel" == e ? t.addEventListener(e, o, {
        passive: !1
    }) : t.addEventListener(e, o, !1) : t.attachEvent("on" + e, (function() {
        var e = r.call(t, window.event);
        return !1 === e && (window.event.returnValue = !1, window.event.cancelBubble = !0), e
    })), t.getListenerList[e + i] = o);

    function o(t) {
        var e = r.apply(this, arguments);
        return !1 === e && (t.stopPropagation(), t.preventDefault()), e
    }
}, OrgChart.prototype._removeEvent = function(t, e) {
    if (t.getListenerList[e]) {
        var r = t.getListenerList[e];
        t.removeEventListener(e, r, !1), delete t.getListenerList[e]
    }
}, void 0 === OrgChart && (OrgChart = {}), OrgChart.VERSION = "8.00.34", OrgChart.orientation = {}, OrgChart.orientation.top = 0, OrgChart.orientation.bottom = 1, OrgChart.orientation.right = 2, OrgChart.orientation.left = 3, OrgChart.orientation.top_left = 4, OrgChart.orientation.bottom_left = 5, OrgChart.orientation.right_top = 6, OrgChart.orientation.left_top = 7, OrgChart.CENTER = 8, OrgChart.ORIENTATION = 9, OrgChart.TEXT_THRESHOLD = 400, OrgChart.IMAGES_THRESHOLD = 100, OrgChart.LINKS_THRESHOLD = 600, OrgChart.BUTTONS_THRESHOLD = 70, OrgChart.ANIM_THRESHOLD = 50, OrgChart.attr = {}, OrgChart.attr.l = "data-l", OrgChart.attr.id = "data-id", OrgChart.attr.sl = "data-sl", OrgChart.attr.lbl = "data-lbl", OrgChart.attr.val = "data-val", OrgChart.attr.tlbr = "data-tlbr", OrgChart.attr.item = "data-item", OrgChart.attr.layout = "data-layout", OrgChart.attr.node_id = "data-n-id", OrgChart.attr.link_id = "data-l-id", OrgChart.attr.field_name = "data-f-name", OrgChart.attr.c_link_to = "data-c-l-to", OrgChart.attr.c_link_from = "data-c-l-from", OrgChart.attr.s_link_to = "data-s-l-to", OrgChart.attr.s_link_from = "data-s-l-from", OrgChart.attr.control_add = "data-ctrl-add", OrgChart.attr.control_expcoll_id = "data-ctrl-ec-id", OrgChart.attr.control_up_id = "data-ctrl-up-id", OrgChart.attr.control_export_menu = "data-ctrl-menu", OrgChart.attr.control_node_menu_id = "data-ctrl-n-menu-id", OrgChart.attr.control_node_circle_menu_id = "data-ctrl-n-c-menu-id", OrgChart.attr.control_node_circle_menu_name = "data-ctrl-n-c-menu-name", OrgChart.attr.control_node_circle_menu_wrraper_id = "data-ctrl-n-c-menu-wrapper-id", OrgChart.attr.width = "data-width", OrgChart.attr.text_overflow = "data-text-overflow", OrgChart.ID = "id", OrgChart.PID = "pid", OrgChart.STPID = "stpid", OrgChart.TAGS = "tags", OrgChart.NODES = "nodes", OrgChart.ELASTIC = "elastic", OrgChart.MAX_DEPTH = 600, OrgChart.SCALE_FACTOR = 1.44, OrgChart.LAZY_LOADING_FACTOR = 500, OrgChart.action = {}, OrgChart.action.expand = 0, OrgChart.action.collapse = 1, OrgChart.action.maximize = 101, OrgChart.action.minimize = 102, OrgChart.action.expandCollapse = 501, OrgChart.action.edit = 1, OrgChart.action.zoom = 2, OrgChart.action.ctrlZoom = 22, OrgChart.action.scroll = 41, OrgChart.action.xScroll = 3, OrgChart.action.yScroll = 4, OrgChart.action.none = 5, OrgChart.action.init = 6, OrgChart.action.update = 7, OrgChart.action.pan = 8, OrgChart.action.centerNode = 9, OrgChart.action.resize = 10, OrgChart.action.insert = 11, OrgChart.action.insertfirst = 12, OrgChart.action.details = 13, OrgChart.action.exporting = 14, OrgChart.none = 400001, OrgChart.scroll = {}, OrgChart.scroll.visible = 1, OrgChart.scroll.smooth = 12, OrgChart.scroll.speed = 120, OrgChart.scroll.safari = {
    smooth: 12,
    speed: 250
}, OrgChart.match = {}, OrgChart.match.height = 100001, OrgChart.match.width = 100002, OrgChart.match.boundary = 100003, OrgChart.COLLAPSE_PARENT_NEIGHBORS = 1, OrgChart.COLLAPSE_SUB_CHILDRENS = 2, OrgChart.COLLAPSE_PARENT_SUB_CHILDREN_EXCEPT_CLICKED = 3, OrgChart.normal = 0, OrgChart.mixed = 1, OrgChart.tree = 2, OrgChart.treeLeftOffset = 3, OrgChart.treeRightOffset = 4, OrgChart.nodeOpenTag = "<g " + OrgChart.attr.node_id + '="{id}" style="opacity: {opacity}" transform="matrix(1,0,0,1,{x},{y})" class="{class}" ' + OrgChart.attr.sl + '="{sl}" ' + OrgChart.attr.l + "={level} {lcn}>", OrgChart.linkOpenTag = "<g " + OrgChart.attr.link_id + '="[{id}][{child-id}]" class="{class}">', OrgChart.expcollOpenTag = "<g " + OrgChart.attr.control_expcoll_id + '="{id}" transform="matrix(1,0,0,1,{x},{y})"  style="cursor:pointer;">', OrgChart.upOpenTag = "<g " + OrgChart.attr.control_up_id + '="{id}" transform="matrix(1,0,0,1,{x},{y})" style="cursor:pointer;">', OrgChart.linkFieldsOpenTag = '<g transform="matrix(1,0,0,1,{x},{y}) rotate({rotate})">', OrgChart.grCloseTag = "</g>", OrgChart.IT_IS_LONELY_HERE = '<g transform="translate(-100, 0)" style="cursor:pointer;"  ' + OrgChart.attr.control_add + '="control-add"><text fill="#039be5">{link}</text></g>', OrgChart.RES = {}, OrgChart.RES.IT_IS_LONELY_HERE_LINK = "It's lonely here, add your first node", OrgChart.FIRE_DRAG_NOT_CLICK_IF_MOVE = 3, OrgChart.STRING_TAGS = !1, OrgChart.MAX_NODES_MESS = "The trial has expired or 200 nodes limit was reached! <br /><a style='color: #039BE5;' target='_blank' href='https://balkan.app/OrgChartJS/Docs/Evaluation'>See more</a>", OrgChart.OFFLINE_MESS = "The evaluation version requires internet connection! <br /><a style='color: #039BE5;' target='_blank' href='https://balkan.app/OrgChartJS/Docs/Evaluation'>See more</a>", OrgChart.SEARCH_PLACEHOLDER = "Search", OrgChart.IMPORT_MESSAGE = "Choose the columns (fields) in your data file that contain the required information.", OrgChart.FIXED_POSITION_ON_CLICK = !1, OrgChart.ADD_NEW_FIELD = "Add new field", OrgChart.ASSISTANT = "Assistant", OrgChart.RENDER_LINKS_BEFORE_NODES = !1, OrgChart.A5w = 420, OrgChart.A5h = 595, OrgChart.A4w = 595, OrgChart.A4h = 842, OrgChart.A3w = 842, OrgChart.A3h = 1191, OrgChart.A2w = 1191, OrgChart.A2h = 1684, OrgChart.A1w = 1684, OrgChart.A1h = 2384, OrgChart.Letterw = 612, OrgChart.Letterh = 791, OrgChart.Legalw = 612, OrgChart.Legalh = 1009, OrgChart.LINK_ROUNDED_CORNERS = 5, OrgChart.MOVE_STEP = 5, OrgChart.MOVE_INTERVAL = 25, OrgChart.MIXED_LAYOUT_ALL_NODES = !0, OrgChart.MIXED_LAYOUT_FOR_NODES_WITH_COLLAPSED_CHILDREN = !1, OrgChart.CLINK_CURVE = 1, OrgChart.SEARCH_RESULT_LIMIT = 10, "undefined" != typeof module && (module.exports = OrgChart), OrgChart._intersects = function(t, e, r) {
    var i = t.x - r.siblingSeparation / 4,
        a = t.y,
        n = t.x + t.w + r.siblingSeparation / 4,
        o = t.y;
    switch (r.orientation) {
        case OrgChart.orientation.right:
        case OrgChart.orientation.right_top:
        case OrgChart.orientation.left:
        case OrgChart.orientation.left_top:
            i = t.x, a = t.y - r.siblingSeparation / 4, n = t.x, o = t.y + t.h + r.siblingSeparation / 4
    }
    var l, s, h, d = e.p,
        c = e.q,
        g = e.r,
        p = e.s;
    return 0 !== (l = (n - i) * (p - c) - (g - d) * (o - a)) && (s = ((a - o) * (g - i) + (n - i) * (p - a)) / l, 0 < (h = ((p - c) * (g - i) + (d - g) * (p - a)) / l) && h < 1 && 0 < s && s < 1)
}, OrgChart._addPoint = function(t, e, r, i, a) {
    switch (r.orientation) {
        case OrgChart.orientation.top:
        case OrgChart.orientation.top_left:
            return OrgChart._addPointTop(t, e, r, i, a);
        case OrgChart.orientation.bottom:
        case OrgChart.orientation.bottom_left:
            return OrgChart._addPointBottom(t, e, r, i, a);
        case OrgChart.orientation.left:
        case OrgChart.orientation.left_top:
            return OrgChart._addPointLeft(t, e, r, i, a);
        case OrgChart.orientation.right:
        case OrgChart.orientation.right_top:
            return OrgChart._addPointRight(t, e, r, i, a)
    }
}, OrgChart._addPointTop = function(t, e, r, i, a) {
    var n, o, l;
    return "left" == a ? n = t.leftNeighbor ? t.x + (t.leftNeighbor.x + t.leftNeighbor.w - t.x) / 2 : t.x - r.siblingSeparation / 2 : "right" == a && (n = t.rightNeighbor ? t.x + t.w + (t.rightNeighbor.x - (t.x + t.w)) / 2 : t.x + t.w + r.siblingSeparation / 2), e.push([n, e[e.length - 1][1]]), e.push([n, t.y - r.levelSeparation / 3]), o = e[e.length - 1][1], l = n, i.p = n, i.q = o, i.r = l, i
}, OrgChart._addPointBottom = function(t, e, r, i, a) {
    var n, o, l;
    return "left" == a ? n = t.leftNeighbor ? t.x + (t.leftNeighbor.x + t.leftNeighbor.w - t.x) / 2 : t.x - r.siblingSeparation / 2 : "right" == a && (n = t.rightNeighbor ? t.x + t.w + (t.rightNeighbor.x - (t.x + t.w)) / 2 : t.x + t.w + r.siblingSeparation / 2), e.push([n, e[e.length - 1][1]]), e.push([n, t.y + t.h + r.levelSeparation / 3]), o = e[e.length - 1][1], l = n, i.p = n, i.q = o, i.r = l, i
}, OrgChart._addPointLeft = function(t, e, r, i, a) {
    var n, o = e[e.length - 1][0];
    return "bottom" == a ? n = t.rightNeighbor ? t.y + t.h + (t.rightNeighbor.y - (t.y + t.h)) / 2 : t.y + t.h + r.siblingSeparation / 2 : "top" == a && (n = t.leftNeighbor ? t.y + (t.leftNeighbor.y + t.leftNeighbor.h - t.y) / 2 : t.y - r.siblingSeparation / 2), e.push([e[e.length - 1][0], n]), e.push([t.x - r.levelSeparation / 3, n]), o = e[e.length - 1][0], s = n, i.p = o, i.q = n, i.s = s, i
}, OrgChart._addPointRight = function(t, e, r, i, a) {
    var n, o = e[e.length - 1][0];
    return "bottom" == a ? n = t.rightNeighbor ? t.y + t.h + (t.rightNeighbor.y - (t.y + t.h)) / 2 : t.y + t.h + r.siblingSeparation / 2 : "top" == a && (n = t.leftNeighbor ? t.y + (t.leftNeighbor.y + t.leftNeighbor.h - t.y) / 2 : t.y - r.siblingSeparation / 2), e.push([e[e.length - 1][0], n]), e.push([t.x + t.w + r.levelSeparation / 3, n]), o = e[e.length - 1][0], s = n, i.p = o, i.q = n, i.s = s, i
}, OrgChart.editUI = function() {}, OrgChart.editUI.prototype.init = function(t) {
    this.obj = t, this.fields = null, this._event_id = OrgChart._guid()
}, OrgChart.editUI.prototype.on = function(t, e) {
    return OrgChart.events.on(t, e, this._event_id), this
}, OrgChart.editUI.prototype.show = function(t, e, r) {
    if (this.hide(), !1 === OrgChart.events.publish("show", [this, t])) return !1;
    var i = this,
        a = this.content(t, e, r);
    this.obj.element.appendChild(a.element), OrgChart.input.init(this.obj.element), r ? !e && a.focusId && OrgChart.editUI.ficusElement(a.focusId) : this.interval = OrgChart.anim(a.element, {
        right: -20,
        opacity: 0
    }, {
        right: 0,
        opacity: 1
    }, 300, OrgChart.anim.outSin, (function() {
        !e && a.focusId && OrgChart.editUI.ficusElement(a.focusId)
    })), this.obj.element.querySelector("[data-edit-from-close]").addEventListener("click", (function(t) {
        i.hide()
    })), this.obj.element.querySelector("[data-edit-from-cancel]").addEventListener("click", (function(t) {
        i.hide()
    })), this.obj.element.querySelector("[data-edit-from-save]").addEventListener("click", (function(e) {
        var r = OrgChart.input.validateAndGetData(a.element);
        if (!1 !== r) {
            var n = i.obj.get(t),
                o = OrgChart.mergeDeep(n, r);
            i.obj.updateNode(o, null, !0), i.hide()
        }
    }));
    for (var n = this.obj.element.querySelectorAll("[ba-input-btn]"), o = 0; o < n.length; o++) {
        n[o].addEventListener("click", (function(e) {
            OrgChart.events.publish("element-btn-click", [i, {
                input: this.parentNode.querySelector("input"),
                nodeId: t
            }])
        }))
    }
    this.obj.element.querySelector("[data-add-more-fields-btn]").addEventListener("click", (function(t) {
        t.stopPropagation(), t.preventDefault();
        var e = this,
            r = OrgChart.elements.textbox({}, {
                type: "textbox",
                label: i.obj.config.editForm.addMoreFieldName,
                btn: i.obj.config.editForm.addMoreBtn
            }, "280px");
        e.parentNode.insertAdjacentHTML("beforebegin", r.html), e.style.display = "none", OrgChart.input.init(e.parentNode.previousSibling);
        var a = document.getElementById(r.id);
        a.focus(), a.nextElementSibling.addEventListener("click", (function(t) {
            t.stopPropagation(), t.preventDefault();
            var r = i.obj.element.querySelector('[data-binding="' + a.value + '"]');
            if (OrgChart.isNEU(a.value) || r) a.focus();
            else {
                var n = OrgChart.elements.textbox({}, {
                    type: "textbox",
                    label: a.value,
                    binding: a.value
                }, "280px");
                a.parentNode.parentNode.parentNode.removeChild(a.parentNode.parentNode), e.parentNode.insertAdjacentHTML("beforebegin", n.html), e.style.display = "", OrgChart.input.init(e.parentNode.previousSibling), document.getElementById(n.id).focus()
            }
        }))
    })), this.obj.element.querySelector("[data-edit-from-btns]").addEventListener("click", (function(e) {
        for (var r = e.target; r && r.hasAttribute && !r.hasAttribute("data-edit-from-btn");) r = r.parentNode;
        if (r && r.hasAttribute) {
            var n = r.getAttribute("data-edit-from-btn"),
                o = {
                    button: i.obj.config.editForm.buttons[n],
                    name: n,
                    nodeId: t,
                    event: e
                };
            if (!1 === OrgChart.events.publish("button-click", [i, o])) return !1;
            switch (n) {
                case "edit":
                    i.obj.editUI.show(t, !1, !0);
                    break;
                case "pdf":
                    i.obj.exportPDFProfile({
                        id: t,
                        filename: a.title
                    }), i.hide();
                    break;
                case "png":
                    i.obj.exportPNGProfile({
                        id: t,
                        filename: a.title
                    }), i.hide();
                    break;
                case "share":
                    i.obj.shareProfile(t);
                    break;
                case "remove":
                    i.obj.removeNode(t), i.hide()
            }
        }
    }))
}, OrgChart.editUI.ficusElement = function(t) {
    if (!OrgChart.isNEU(t)) {
        var e = document.getElementById(t);
        e && (e.focus(), e.value && e.value.length && (e.selectionStart = e.selectionEnd = e.value.length))
    }
}, OrgChart.editUI.prototype.content = function(t, e, r, i, a) {
    var n, o = this.obj.config.editForm.readOnly,
        l = JSON.parse(JSON.stringify(this.obj.config.editForm.elements)),
        s = this.obj.config.editForm.addMore,
        h = this.obj.config.editForm.buttons,
        d = this.obj.config.editForm.titleBinding,
        c = this.obj.config.editForm.photoBinding,
        g = this.obj.getNode(t),
        p = this.obj._get(t),
        u = OrgChart.t(g.templateName, g.min, this.obj.getScale()),
        f = p[d],
        m = p[c];
    if (this.obj.config.editForm.generateElementsFromFields)
        for (var C = 0; C < this.fields.length; C++) {
            var O = this.fields[C];
            if ("tags" != O) {
                for (var v = !1, b = 0; b < l.length; b++) {
                    if (Array.isArray(l[b])) {
                        for (var x = 0; x < l[b].length; x++)
                            if (O == l[b][x].binding) {
                                v = !0;
                                break
                            }
                    } else if (O == l[b].binding) {
                        v = !0;
                        break
                    }
                    if (v) break
                }
                v || l.push({
                    type: "textbox",
                    label: O,
                    binding: O
                })
            }
        }
    OrgChart.isNEU(f) && (f = ""), m = OrgChart.isNEU(m) ? OrgChart.icon.user(150, 150, "#8C8C8C", 0, 0) : `<img style="width: 100%;height:100%;border-radius: 50%;" src="${m}"></img>`;
    var y = !e,
        w = e ? "display:none;" : "",
        _ = e || !s ? "display:none;" : "",
        k = u.editFormHeaderColor ? `style="background-color:${u.editFormHeaderColor};"` : "",
        S = document.createElement("form");
    if (S.setAttribute("data-edit-form", ""), S.classList.add("edit-form"), S.classList.add(this.obj.config.mode), S.classList.add(g.templateName), S.classList.add(OrgChart.ui._defsIds[g.templateName]), Array.isArray(g.tags) && g.tags.length)
        for (C = 0; C < g.tags.length; C++) S.classList.add(g.tags[C]);
    S.style.display = "flex", S.style.opacity = r ? 1 : 0, S.style.right = r ? 0 : "-20px", i && (S.style.width = i);
    var I = [],
        A = a ? "" : '<svg data-edit-from-close class="edit-form-close"><path style="fill:#ffffff;" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"></path></svg>';
    return S.innerHTML = `<div>\n                        <div class="edit-form-header" ${k}>\n                            ${A}\n                            <h1 class="edit-form-title">${f}</h1>\n                            <div class="edit-form-avatar">${m}</div>                        \n                        </div>\n                        <div data-edit-from-btns class="edit-form-instruments">\n                        ${function(){if(a)return"";var t="";for(var r in h){var i=h[r];OrgChart.isNEU(i)||(y&&i.hideIfEditMode||e&&i.hideIfDetailsMode||o&&"Edit"==i.text||(t+=`<div data-edit-from-btn='${r}' class="ba-img-button" ${k} title="${i.text}">${i.icon}</div>`))}return t}()}    \n                        </div>\n                    </div>\n                    <div class="edit-form-fields">\n                        <div class="edit-form-fields-inner">\n                            <div class="ba-form-fieldset">\n                                ${function(){for(var t="",r=0;r<l.length;r++){var i=l[r];if(Array.isArray(i)){t+='<div class="ba-form-field-100 ba-form-fieldset">';for(var a=0;a<i.length;a++){var o=i[a],s=OrgChart.elements[o.type](p,o,"unset",e);!OrgChart.isNEU(s.id)&&OrgChart.isNEU(n)&&OrgChart.isNEU(s.value)&&(n=s.id),OrgChart.isNEU(s.value)||I.push(`${o.label}: ${s.value}`),t+=s.html}t+="</div>"}else{s=OrgChart.elements[i.type](p,i,"280px",e);!OrgChart.isNEU(s.id)&&OrgChart.isNEU(n)&&OrgChart.isNEU(s.value)&&(n=s.id),OrgChart.isNEU(s.value)||I.push(`
    $ {
        i.label
    }: $ {
        s.value
    }
    `),t+=s.html}}return t}()}\n\n                                <div class="ba-form-field" style="min-width: 280px; text-align:center; ${_}">\n                                    <a data-add-more-fields-btn href="#" class="ba-link">${s}</a>\n                                </div>\n                            </div>        \n                        </div>\n                    </div>\n                    <div class="ba-form-fieldset" style="padding: 14px 10px; ${w}">\n                        <div class="ba-form-field" style="min-width: initial;">\n                            <button data-edit-from-cancel type="button" class="ba-button transparent">Cancel</button>\n                        </div>\n                        <div class="ba-form-field" style="min-width: initial;">\n                            <button type="submit" data-edit-from-save type="button" class="ba-button">Save and close</button>\n                        </div>\n                    </div>`, {
        element: S,
        focusId: n,
        title: f,
        shareText: I.join("\n")
    }
}, OrgChart.editUI.prototype.hide = function() {
    if (!1 === OrgChart.events.publish("hide", [this])) return !1;
    OrgChart.isNEU(this.interval) && (clearInterval(this.interval), this.interval = null);
    var t = this.obj.element.querySelector("[data-edit-form]");
    t && t.parentNode && t.parentNode.removeChild(t)
}, OrgChart.prototype.getSvg = function() {
    var t = this.element.getElementsByTagName("svg");
    return t && t.length ? t[0] : null
}, OrgChart.prototype.getPointerElement = function() {
    return this.element.querySelector("g[data-pointer]")
}, OrgChart.prototype.getNodeElement = function(t) {
    return this.element.querySelector("g[" + OrgChart.attr.node_id + "='" + t + "']")
}, OrgChart.prototype.getMenuButton = function() {
    return this.element.querySelector("[" + OrgChart.attr.control_export_menu + "]")
}, OrgChart.menuUI = function() {}, OrgChart.menuUI.prototype.init = function(t, e) {
    this.obj = t, this.wrapper = null, this.menu = e, this._event_id = OrgChart._guid()
}, OrgChart.menuUI.prototype.showStickIn = function(t, e, r, i) {
    this._show(t, null, e, r, i)
}, OrgChart.menuUI.prototype.show = function(t, e, r, i, a) {
    this._show(t, e, r, i, a)
}, OrgChart.menuUI.prototype._show = function(t, e, r, i, a) {
    var n = this;
    this.hide();
    var o = "";
    a || (a = this.menu);
    var l = {
        firstNodeId: r,
        secondNodeId: i,
        menu: a
    };
    if (!1 === OrgChart.events.publish("show", [this, l])) return !1;
    for (var s in a = l.menu) {
        var h = a[s].icon,
            d = a[s].text;
        void 0 === h && (h = OrgChart.icon[s](24, 24, "#7A7A7A")), "function" == typeof d && (d = d()), "function" == typeof h && (h = h()), o += "<div " + OrgChart.attr.item + '="' + s + '">' + h + "<span>&nbsp;&nbsp;" + d + "</span></div>"
    }
    if ("" != o) {
        if (this.wrapper = document.createElement("div"), this.wrapper.className = "chart-menu", this.wrapper.style.left = "-99999px", this.wrapper.style.top = "-99999px", this.wrapper.innerHTML = o, this.obj.element.appendChild(this.wrapper), null == e) {
            var c = OrgChart._menuPosition(t, this.wrapper, this.obj.getSvg());
            t = c.x, e = c.y
        }
        var g = t + 45;
        this.wrapper.style.left = g + "px", this.wrapper.style.top = e + "px", this.wrapper.style.left = g - this.wrapper.offsetWidth + "px";
        var p = t - this.wrapper.offsetWidth;
        OrgChart.anim(this.wrapper, {
            opacity: 0,
            left: g - this.wrapper.offsetWidth
        }, {
            opacity: 1,
            left: p
        }, 300, OrgChart.anim.inOutPow);
        for (var u = this.wrapper.getElementsByTagName("div"), f = 0; f < u.length; f++) {
            (s = u[f]).addEventListener("click", (function(t) {
                var e, o = this.getAttribute(OrgChart.attr.item);
                if (void 0 === a[o].onClick)
                    if ("add" === o) {
                        var l = {
                            id: n.obj.generateId(),
                            pid: r
                        };
                        n.obj.addNode(l, null, !0)
                    } else if ("edit" === o) {
                    var s = n.obj.getNode(r);
                    n.obj.editUI.show(s.id)
                } else if ("details" === o) {
                    s = n.obj.getNode(r);
                    n.obj.editUI.show(s.id, !0)
                } else "remove" === o ? n.obj.removeNode(r, null, !0) : "svg" === o ? n.obj.exportSVG({
                    filename: "OrgChart.svg",
                    expandChildren: !1,
                    nodeId: r
                }) : "pdf" === o ? n.obj.exportPDF({
                    filename: "OrgChart.pdf",
                    expandChildren: !1,
                    nodeId: r
                }) : "png" === o ? n.obj.exportPNG({
                    filename: "OrgChart.png",
                    expandChildren: !1,
                    nodeId: r
                }) : "csv" === o ? n.obj.exportCSV() : "xml" === o && n.obj.exportXML();
                else e = a[o].onClick.call(n.obj, r, i);
                0 != e && n.hide()
            }))
        }
    }
}, OrgChart.menuUI.prototype.hide = function() {
    null != this.wrapper && (this.obj.element.removeChild(this.wrapper), this.wrapper = null)
}, OrgChart.menuUI.prototype.on = function(t, e) {
    return OrgChart.events.on(t, e, this._event_id), this
}, OrgChart.circleMenuUI = function() {}, OrgChart.circleMenuUI.prototype.init = function(t, e) {
    this.obj = t, this.menu = e, this._menu = null, this._buttonsInterval = [], this._linesInterval = [], this._event_id = OrgChart._guid()
}, OrgChart.circleMenuUI.prototype.show = function(t, e) {
    this._show(t, e)
}, OrgChart.circleMenuUI.prototype._show = function(t, e) {
    var r = this,
        i = this.obj.getNode(t),
        a = OrgChart.t(i.templateName, i.min, this.obj.getScale());
    if (!OrgChart.isNEU(a.nodeCircleMenuButton)) {
        var n = this.obj.getSvg(),
            o = this.obj.element.querySelector("[" + OrgChart.attr.control_node_circle_menu_id + '="' + t + '"]'),
            l = this.obj.getNodeElement(t),
            s = OrgChart._getTransform(o),
            h = OrgChart._getTransform(l),
            d = s[4] + h[4],
            c = s[5] + h[5],
            g = o.querySelectorAll("line"),
            p = this.obj.element.querySelector("[" + OrgChart.attr.control_node_circle_menu_wrraper_id + "]");
        if (OrgChart.isNEU(p) || p.getAttribute(OrgChart.attr.control_node_circle_menu_wrraper_id) != t) {
            this.hide(), e || (e = this.menu);
            var u = {
                    nodeId: t,
                    menu: e
                },
                f = OrgChart.events.publish("show", [this, u]);
            if (this._menu = e, !1 === f) return !1;
            for (var m = 0, C = Object.keys(u.menu).length, O = 2 * a.nodeCircleMenuButton.radius + 4, v = 2 * Math.PI * O, b = v / C - (2 * a.nodeCircleMenuButton.radius + 2); b < 0;) O += 8, b = (v = 2 * Math.PI * O) / C - (2 * a.nodeCircleMenuButton.radius + 2);
            for (var x in (p = document.createElementNS("http://www.w3.org/2000/svg", "g")).setAttribute(OrgChart.attr.control_node_circle_menu_wrraper_id, t), p.setAttribute("transform", "matrix(1,0,0,1," + d + "," + c + ")"), n.appendChild(p), u.menu) {
                var y = u.menu[x].icon,
                    w = u.menu[x].color,
                    _ = u.menu[x].text;
                "function" == typeof y && (y = y()), "function" == typeof w && (w = w()), "function" == typeof _ && (_ = _());
                var k = document.createElementNS("http://www.w3.org/2000/svg", "g");
                k.setAttribute("transform", "matrix(1,0,0,1,0,0)"), k.setAttribute(OrgChart.attr.control_node_circle_menu_name, x), k.style.cursor = "pointer";
                var S = document.createElementNS("http://www.w3.org/2000/svg", "title");
                OrgChart.isNEU(_) || (S.innerHTML = _);
                var I = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                I.setAttribute("cx", 0), I.setAttribute("cy", 0), I.setAttribute("r", a.nodeCircleMenuButton.radius), I.setAttribute("fill", w), I.setAttribute("stroke-width", "1"), I.setAttribute("stroke", a.nodeCircleMenuButton.stroke), k.appendChild(I), k.appendChild(S), k.innerHTML += y, p.appendChild(k);
                var A = k.getElementsByTagName("svg")[0];
                if (A.setAttribute("pointer-events", "none"), A) {
                    var L = parseInt(A.getAttribute("width")),
                        N = parseInt(A.getAttribute("height"));
                    A.setAttribute("x", -L / 2), A.setAttribute("y", -N / 2)
                }
                var M = m * Math.PI / (C / 2);
                m++;
                var E = Math.cos(M) * O,
                    T = Math.sin(M) * O;
                this._buttonsInterval.push(OrgChart.anim(k, {
                    transform: [1, 0, 0, 1, 0, 0]
                }, {
                    transform: [1, 0, 0, 1, E, T]
                }, 250, OrgChart.anim.outBack, (function(t) {
                    var e = t[0].getAttribute(OrgChart.attr.control_node_circle_menu_name),
                        i = t[0].parentNode.getAttribute(OrgChart.attr.control_node_circle_menu_wrraper_id);
                    t[0].addEventListener("mouseenter", (function(t) {
                        OrgChart.events.publish("mouseenter", [r, {
                            from: i,
                            menuItem: u.menu[e],
                            menuItemName: e,
                            event: t
                        }])
                    })), t[0].addEventListener("mouseout", (function(t) {
                        OrgChart.events.publish("mouseout", [r, {
                            from: i,
                            menuItem: u.menu[e],
                            menuItemName: e,
                            event: t
                        }])
                    }))
                })))
            }
            this._linesInterval.push(OrgChart.anim(g[0], {
                x1: -a.nodeCircleMenuButton.radius / 2,
                y1: -6,
                x2: a.nodeCircleMenuButton.radius / 2,
                y2: -6
            }, {
                x1: -7,
                y1: -7,
                x2: 7,
                y2: 7
            }, 500, OrgChart.anim.inOutSin)), this._linesInterval.push(OrgChart.anim(g[1], {
                x1: -a.nodeCircleMenuButton.radius / 2,
                y1: 0,
                x2: a.nodeCircleMenuButton.radius / 2,
                y2: 0
            }, {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0
            }, 500, OrgChart.anim.inOutSin)), this._linesInterval.push(OrgChart.anim(g[2], {
                x1: -a.nodeCircleMenuButton.radius / 2,
                y1: 6,
                x2: a.nodeCircleMenuButton.radius / 2,
                y2: 6
            }, {
                x1: -7,
                y1: 7,
                x2: 7,
                y2: -7
            }, 500, OrgChart.anim.inOutSin))
        } else this.hide()
    }
}, OrgChart.circleMenuUI.prototype.hide = function() {
    for (var t = this._buttonsInterval.length - 1; t >= 0; t--) clearInterval(this._buttonsInterval[t]), this._buttonsInterval.splice(t, 1);
    this._buttonsInterval = [];
    for (t = this._linesInterval.length - 1; t >= 0; t--) clearInterval(this._linesInterval[t]), this._linesInterval.splice(t, 1);
    this._linesInterval = [];
    var e = this.obj.element.querySelector("[" + OrgChart.attr.control_node_circle_menu_wrraper_id + "]");
    if (null != e) {
        var r = e.getAttribute(OrgChart.attr.control_node_circle_menu_wrraper_id),
            i = this.obj.getNode(r),
            a = OrgChart.t(i.templateName, i.min, this.obj.getScale()),
            n = this.obj.element.querySelector("[" + OrgChart.attr.control_node_circle_menu_id + '="' + r + '"]').querySelectorAll("line");
        n[0].setAttribute("x1", -a.nodeCircleMenuButton.radius / 2), n[0].setAttribute("x2", a.nodeCircleMenuButton.radius / 2), n[0].setAttribute("y1", -6), n[0].setAttribute("y2", -6), n[1].setAttribute("x1", -a.nodeCircleMenuButton.radius / 2), n[1].setAttribute("x2", a.nodeCircleMenuButton.radius / 2), n[1].setAttribute("y1", 0), n[1].setAttribute("y2", 0), n[2].setAttribute("x1", -a.nodeCircleMenuButton.radius / 2), n[2].setAttribute("x2", a.nodeCircleMenuButton.radius / 2), n[2].setAttribute("y1", 6), n[2].setAttribute("y2", 6), e.parentElement.removeChild(e), e = null
    }
}, OrgChart.circleMenuUI.prototype.on = function(t, e) {
    return OrgChart.events.on(t, e, this._event_id), this
}, void 0 === OrgChart && (OrgChart = {}), OrgChart.idb = {
    version: 1,
    dbName: "BALKAN",
    tableName: "orgchart-js",
    keyPath: "id"
}, OrgChart.idb.db = null, OrgChart.idb._open = function(t) {
    if (OrgChart._browser().msie) t && t(!1);
    else if ((navigator.userAgent.toLowerCase().indexOf("safari") > 0 || navigator.userAgent.toLowerCase().indexOf("firefox") > 0) && window.location !== window.parent.location) t && t(!1);
    else {
        if (!window.indexedDB) return console.error("Your browser doesn't support a stable version of IndexedDB."), void(t && t(!1));
        if (null == OrgChart.idb.db) {
            var e = indexedDB.open(OrgChart.idb.dbName, OrgChart.idb.version);
            e.onerror = function(e) {
                console.error("Cannot open database!"), t && t(!1)
            }, e.onsuccess = function(e) {
                OrgChart.idb.db = e.target.result, t && t(!0)
            }, e.onupgradeneeded = function(t) {
                var e = t.target.result;
                e.objectStoreNames.contains(OrgChart.idb.tableName) && e.deleteObjectStore(OrgChart.idb.tableName);
                e.createObjectStore(OrgChart.idb.tableName, {
                    keyPath: OrgChart.idb.keyPath
                })
            }
        } else t && t(!0)
    }
}, OrgChart.idb.read = function(t, e) {
    OrgChart.idb._open((function(r) {
        if (r) {
            var i = OrgChart.idb.db.transaction([OrgChart.idb.tableName]).objectStore(OrgChart.idb.tableName).get(t);
            i.onerror = function(t) {
                console.error("Unable to retrieve data from database!"), e && e(!1)
            }, i.onsuccess = function(t) {
                i.result ? e && e(!0, i.result) : e && e(null)
            }
        } else e && e(!1)
    }))
}, OrgChart.idb.write = function(t, e) {
    OrgChart.idb.read(t.id, (function(r) {
        if (null == r) {
            var i = OrgChart.idb.db.transaction([OrgChart.idb.tableName], "readwrite").objectStore(OrgChart.idb.tableName).add(t);
            i.onerror = function(t) {
                console.error("Unable to add data to database!"), e && e(!1)
            }, i.onsuccess = function(t) {
                e && e(!0)
            }
        } else e && e(r)
    }))
}, OrgChart.idb.put = function(t, e) {
    OrgChart.idb._open((function(r) {
        if (r) {
            var i = OrgChart.idb.db.transaction([OrgChart.idb.tableName], "readwrite").objectStore(OrgChart.idb.tableName).put(t);
            i.onerror = function(t) {
                console.error("Unable to put data to database!"), e && e(!1)
            }, i.onsuccess = function(t) {
                e && e(!0)
            }
        } else e && e(!1)
    }))
}, OrgChart.idb.delete = function(t, e) {
    OrgChart.idb._open((function(r) {
        if (r) {
            var i = OrgChart.idb.db.transaction([OrgChart.idb.tableName], "readwrite").objectStore(OrgChart.idb.tableName).delete(t);
            i.onerror = function(t) {
                console.error("Unable to retrieve data from database!"), e && e(!1)
            }, i.onsuccess = function(t) {
                i.error ? e && e(!1) : e && e(!0)
            }
        } else e && e(!1)
    }))
}, OrgChart.toolbarUI = function() {}, OrgChart.toolbarUI.expandAllIcon = '<svg style="margin-bottom:7px;box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;" width="32px" height="32px"><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#757575" /></marker><line x1="11" y1="11" x2="6" y2="6" stroke="#757575" stroke-width="2" marker-end="url(#arrow)" /><line x1="21" y1="11" x2="26" y2="6" stroke="#757575" stroke-width="2" marker-end="url(#arrow)" /><line x1="21" y1="21" x2="26" y2="26" stroke="#757575" stroke-width="2" marker-end="url(#arrow)" /><line x1="11" y1="21" x2="6" y2="26" stroke="#757575" stroke-width="2" marker-end="url(#arrow)" /><rect x="12" y="12" width="8" height="8" fill="#757575"></rect></svg>', OrgChart.toolbarUI.fitIcon = '<svg  style="margin-bottom:7px;box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;" width="32px" height="32px"><path stroke-width="3" fill="none" stroke="#757575" d="M4,11 L4,4 L11,4"></path><path stroke-width="3" fill="none" stroke="#757575" d="M28,11 L28,4 L21,4"></path><path stroke-width="3" fill="none" stroke="#757575" d="M28,21 L28,28 L21,28"></path><path stroke-width="3" fill="none" stroke="#757575" d="M4,21 L4,28 L11,28"></path><circle cx="16" cy="16" r="5" fill="#757575"></circle></svg>', OrgChart.toolbarUI.openFullScreenIcon = '<svg  style="margin-bottom:7px;box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;" width="32px" height="32px"><path stroke-width="3" fill="none" stroke="#757575" d="M4,11 L4,4 L11,4"></path><path stroke-width="3" fill="none" stroke="#757575" d="M28,11 L28,4 L21,4"></path><path stroke-width="3" fill="none" stroke="#757575" d="M28,21 L28,28 L21,28"></path><path stroke-width="3" fill="none" stroke="#757575" d="M4,21 L4,28 L11,28"></path><line x1="5" y1="5" x2="27" y2="27" stroke-width="3" stroke="#757575"></line><line x1="5" y1="27" x2="27" y2="5" stroke-width="3" stroke="#757575"></line></svg>', OrgChart.toolbarUI.closeFullScreenIcon = '<svg  style="margin-bottom:7px;box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;" width="32px" height="32px"><path stroke-width="3" fill="none" stroke="#757575" d="M4,11 L4,4 L11,4"></path><path stroke-width="3" fill="none" stroke="#757575" d="M28,11 L28,4 L21,4"></path><path stroke-width="3" fill="none" stroke="#757575" d="M28,21 L28,28 L21,28"></path><path stroke-width="3" fill="none" stroke="#757575" d="M4,21 L4,28 L11,28"></path><rect x="11" y="11" width="10" height="10" stroke-width="3" fill="none" stroke="#757575" ></rect></svg>', OrgChart.toolbarUI.zoomInIcon = '<svg style="box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border-left: 1px solid #cacaca; border-right: 1px solid #cacaca; border-top: 1px solid #cacaca; background-color: #f9f9f9;display: block; cursor: pointer;" width="32px" height="32px" ><g><rect fill="#f9f9f9" x="0" y="0" width="32" height="32" ></rect><line x1="8" y1="16" x2="24" y2="16" stroke-width="3" stroke="#757575"></line><line x1="16" y1="8" x2="16" y2="24" stroke-width="3" stroke="#757575"></line></g><line x1="4" y1="32" x2="28" y2="32" stroke-width="1" stroke="#cacaca"></line></svg>', OrgChart.toolbarUI.zoomOutIcon = '<svg style="box-shadow: 0px 1px 4px rgba(0,0,0,0.3); margin-bottom:7px; border-left: 1px solid #cacaca; border-right: 1px solid #cacaca; border-bottom: 1px solid #cacaca; background-color: #f9f9f9;display: block; cursor: pointer;" width="32px" height="32px" ><g><rect fill="#f9f9f9" x="0" y="0" width="32" height="32" ></rect><line x1="8" y1="16" x2="24" y2="16" stroke-width="3" stroke="#757575"></line></g></svg>', OrgChart.toolbarUI.layoutIcon = "<svg " + OrgChart.attr.tlbr + '="layout" style="box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;" width="32px" height="32px"><path stroke-width="3" fill="none" stroke="#757575" d="M8,24 L16,14 L24,24"></path><path stroke-width="3" fill="none" stroke="#757575" d="M8,16 L16,8 L24,16"></path></svg>', OrgChart.toolbarUI.prototype.init = function(t, e) {
    if (e) {
        this.obj = t, this.toolbar = e, this._visible = !1, this.div = document.createElement("div"), this.div.classList.add("bg-toolbar-container"), Object.assign(this.div.style, {
            position: "absolute",
            padding: "3px",
            right: this.obj.config.padding - 10 + "px",
            bottom: this.obj.config.padding - 10 + "px"
        }), e.expandAll && (this.div.innerHTML += "<div " + OrgChart.attr.tlbr + '="expand">' + OrgChart.toolbarUI.expandAllIcon + "</div>"), e.fit && (this.div.innerHTML += "<div " + OrgChart.attr.tlbr + '="fit">' + OrgChart.toolbarUI.fitIcon + "</div>"), e.zoom && (this.div.innerHTML += "<div " + OrgChart.attr.tlbr + '="plus">' + OrgChart.toolbarUI.zoomInIcon + "</div>", this.div.innerHTML += "<div " + OrgChart.attr.tlbr + '="minus">' + OrgChart.toolbarUI.zoomOutIcon + "</div>"), e.layout && (this.div.innerHTML += "<div " + OrgChart.attr.tlbr + '="layout">' + OrgChart.toolbarUI.layoutIcon + "</div>", this.layouts = document.createElement("div"), this.layouts.innerHTML = "<svg " + OrgChart.attr.layout + '="normal" style="cursor: pointer;" width="110" height="100"><rect fill="#039BE5" x="35" y="0" width="50" height="27"></rect><rect fill="#F57C00" x="7" y="41" width="50" height="27"></rect><rect fill="#F57C00" x="63" y="41" width="50" height="27"></rect><line stroke="#000000" x1="60" x2="60" y1="27" y2="35" stroke-width="1"></line><line stroke="#000000" x1="32" x2="88" y1="35" y2="35" stroke-width="1"></line><line stroke="#000000" x1="32" x2="32" y1="35" y2="41" stroke-width="1"></line><line stroke="#000000" x1="88" x2="88" y1="35" y2="41" stroke-width="1"></line></svg><svg ' + OrgChart.attr.layout + '="treeRightOffset" style="cursor: pointer;" width="110" height="100"><rect fill="#039BE5" x="35" y="0" width="50" height="27"></rect><rect fill="#F57C00" x="40" y="41" width="50" height="27"></rect><rect fill="#F57C00" x="40" y="73" width="50" height="27"></rect><line stroke="#000000" x1="60" x2="60" y1="27" y2="35" stroke-width="1"></line><line stroke="#000000" x1="60" x2="35" y1="35" y2="35" stroke-width="1"></line><line stroke="#000000" x1="35" x2="35" y1="35" y2="86" stroke-width="1"></line><line stroke="#000000" x1="35" x2="40" y1="86" y2="86" stroke-width="1"></line><line stroke="#000000" x1="35" x2="40" y1="54" y2="54" stroke-width="1"></line></svg><svg ' + OrgChart.attr.layout + '="treeLeftOffset" style="cursor: pointer;" width="110" height="100"><rect fill="#039BE5" x="35" y="0" width="50" height="27"></rect><rect fill="#F57C00" x="30" y="41" width="50" height="27"></rect><rect fill="#F57C00" x="30" y="73" width="50" height="27"></rect><line stroke="#000000" x1="60" x2="60" y1="27" y2="35" stroke-width="1"></line><line stroke="#000000" x1="60" x2="85" y1="35" y2="35" stroke-width="1"></line><line stroke="#000000" x1="85" x2="85" y1="35" y2="86" stroke-width="1"></line><line stroke="#000000" x1="80" x2="85" y1="86" y2="86" stroke-width="1"></line><line stroke="#000000" x1="80" x2="85" y1="54" y2="54" stroke-width="1"></line></svg><svg ' + OrgChart.attr.layout + '="mixed" style="cursor: pointer;" width="110" height="100"><rect fill="#039BE5" x="35" y="0" width="50" height="27"></rect><rect fill="#F57C00" x="35" y="41" width="50" height="27"></rect><rect fill="#F57C00" x="35" y="73" width="50" height="27"></rect><line stroke="#000000" x1="60" x2="60" y1="27" y2="41" stroke-width="1"></line><line stroke="#000000" x1="60" x2="60" y1="68" y2="73" stroke-width="1"></line></svg><svg ' + OrgChart.attr.layout + '="tree" style="cursor: pointer;" width="110" height="100"><rect fill="#039BE5" x="35" y="0" width="50" height="27"></rect><rect fill="#F57C00" x="7" y="41" width="50" height="27"></rect><rect fill="#F57C00" x="7" y="73" width="50" height="27"></rect><rect fill="#F57C00" x="63" y="41" width="50" height="27"></rect><rect fill="#F57C00" x="63" y="73" width="50" height="27"></rect><line stroke="#000000" x1="60" x2="60" y1="27" y2="86" stroke-width="1"></line><line stroke="#000000" x1="57" x2="63" y1="54" y2="54" stroke-width="1"></line><line stroke="#000000" x1="57" x2="63" y1="86" y2="86" stroke-width="1"></line></svg>', this.obj.element.appendChild(this.layouts), Object.assign(this.layouts.style, {
            position: "absolute",
            width: "100%",
            left: "0",
            bottom: "-145px",
            "box-shadow": "0px 1px 4px rgba(0,0,0,0.3)",
            "background-color": "#f9f9f9",
            height: "123px",
            "padding-top": "20px",
            "border-top": "1px solid #cacaca"
        })), e.fullScreen && (this.div.innerHTML += "<div " + OrgChart.attr.tlbr + '="fullScreen">' + OrgChart.toolbarUI.openFullScreenIcon + "</div>"), this.obj.element.appendChild(this.div), this.layoutBtn = this.div.querySelector("[" + OrgChart.attr.tlbr + '="layout"]');
        var r = this.div.querySelector("[" + OrgChart.attr.tlbr + '="plus"]'),
            i = this.div.querySelector("[" + OrgChart.attr.tlbr + '="minus"]'),
            a = this.div.querySelector("[" + OrgChart.attr.tlbr + '="fit"]'),
            n = this.div.querySelector("[" + OrgChart.attr.tlbr + '="fullScreen"]'),
            o = this.div.querySelector("[" + OrgChart.attr.tlbr + '="expand"]'),
            l = this;
        r && r.addEventListener("click", (function() {
            l.obj.zoom(!0, null, !0)
        })), i && i.addEventListener("click", (function() {
            l.obj.zoom(!1, null, !0)
        })), a && a.addEventListener("click", (function() {
            l.obj.fit()
        })), n && n.addEventListener("click", (function() {
            l.obj.toggleFullScreen()
        })), o && o.addEventListener("click", (function() {
            l.obj.expand(null, "all")
        })), this.layoutBtn && this.layoutBtn.addEventListener("click", (function() {
            l._visible ? l.hideLayout() : l.showLayout()
        })), this.layouts && this.layouts.addEventListener("click", (function(t) {
            for (var e = t.target; e;) {
                if (e.hasAttribute && e.hasAttribute(OrgChart.attr.layout)) {
                    e = e.getAttribute(OrgChart.attr.layout), l.obj.setLayout(OrgChart[e]);
                    break
                }
                e = e.parentNode
            }
        }))
    }
}, OrgChart.toolbarUI.prototype.showLayout = function() {
    this._visible = !0, this.layoutBtn.style.transform = "rotate(180deg) translateX(0px) translateY(0px)", OrgChart.anim(this.div, {
        bottom: this.obj.config.padding - 10
    }, {
        bottom: this.obj.config.padding + 135
    }, this.obj.config.anim.duration, this.obj.config.anim.func), OrgChart.anim(this.layouts, {
        bottom: -145
    }, {
        bottom: 0
    }, this.obj.config.anim.duration, this.obj.config.anim.func)
}, OrgChart.toolbarUI.prototype.hideLayout = function() {
    this._visible = !1, this.layoutBtn.style.transform = "rotate(0deg) translateX(0px) translateY(0px)", OrgChart.anim(this.div, {
        bottom: this.obj.config.padding + 135
    }, {
        bottom: this.obj.config.padding - 10
    }, this.obj.config.anim.duration, this.obj.config.anim.func), OrgChart.anim(this.layouts, {
        bottom: 0
    }, {
        bottom: -145
    }, this.obj.config.anim.duration, this.obj.config.anim.func)
}, OrgChart.notifierUI = function() {}, OrgChart.notifierUI.prototype.init = function(t) {
    this.obj = t
}, OrgChart.notifierUI.prototype.show = function(t, e) {
    if (null != t) {
        1 == t && (t = OrgChart.MAX_NODES_MESS, e = "#FFCA28"), 2 == t && (t = OrgChart.OFFLINE_MESS, e = "#FFCA28");
        var r = document.createElement("div");
        r.innerHTML = t, Object.assign(r.style, {
            position: "absolute",
            "background-color": e,
            color: "#ffffff",
            padding: "15px",
            "border-radius": "40px",
            opacity: 0,
            overflow: "hidden",
            "white-space": "nowrap",
            "text-align": "center"
        }), this.obj.element.appendChild(r);
        var i = this.obj.width() / 2 - r.offsetWidth / 2,
            a = this.obj.height() / 2 - r.offsetHeight / 2;
        r.style.left = i + "px", r.style.top = a + "px";
        var n = r.offsetWidth;
        r.style.width = "20px", OrgChart.anim(r, {
            opacity: 0,
            width: 10
        }, {
            opacity: 1,
            width: n
        }, this.obj.config.anim.duration, this.obj.config.anim.func)
    }
}, OrgChart.icon = {}, OrgChart.icon.png = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '" viewBox="0 0 550.801 550.801"><path fill="' + r + '" d="M146.747,276.708c0-13.998-9.711-22.352-26.887-22.352c-6.99,0-11.726,0.675-14.204,1.355v44.927 c2.932,0.676,6.539,0.896,11.52,0.896C135.449,301.546,146.747,292.28,146.747,276.708z"/><path fill="' + r + '" d="M488.426,197.019H475.2v-63.816c0-0.398-0.063-0.799-0.116-1.202c-0.021-2.534-0.827-5.023-2.562-6.995L366.325,3.694 c-0.032-0.031-0.063-0.042-0.085-0.076c-0.633-0.707-1.371-1.295-2.151-1.804c-0.231-0.155-0.464-0.285-0.706-0.419 c-0.676-0.369-1.393-0.675-2.131-0.896c-0.2-0.056-0.38-0.138-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2 c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.873v160.545 c0,17.043,13.824,30.87,30.873,30.87h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601 V419.302h13.226c17.044,0,30.871-13.827,30.871-30.87v-160.54C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605 h250.193v110.513c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M234.344,335.86v45.831h-31.601V229.524h40.184 l31.611,55.759c9.025,16.031,18.064,34.983,24.825,52.154h0.675c-2.257-20.103-2.933-40.643-2.933-63.44v-44.473h31.614v152.167 h-36.117l-32.516-58.703c-9.049-16.253-18.971-35.892-26.438-53.727l-0.665,0.222C233.906,289.58,234.344,311.027,234.344,335.86z M71.556,381.691V231.56c10.613-1.804,25.516-3.159,46.506-3.159c21.215,0,36.353,4.061,46.509,12.192 c9.698,7.673,16.255,20.313,16.255,35.219c0,14.897-4.959,27.549-13.999,36.123c-11.738,11.063-29.123,16.031-49.441,16.031 c-4.522,0-8.593-0.231-11.736-0.675v54.411H71.556V381.691z M453.601,523.353H97.2V419.302h356.4V523.353z M485.652,374.688 c-10.61,3.607-30.713,8.585-50.805,8.585c-27.759,0-47.872-7.003-61.857-20.545c-13.995-13.1-21.684-32.97-21.452-55.318 c0.222-50.569,37.03-79.463,86.917-79.463c19.644,0,34.783,3.829,42.219,7.446l-7.214,27.543c-8.369-3.617-18.752-6.55-35.458-6.55 c-28.656,0-50.341,16.256-50.341,49.22c0,31.382,19.649,49.892,47.872,49.892c7.895,0,14.218-0.901,16.934-2.257v-31.835h-23.493 v-26.869h56.679V374.688z"/></svg>'
}, OrgChart.icon.pdf = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '" viewBox="0 0 550.801 550.801"><path fill="' + r + '" d="M160.381,282.225c0-14.832-10.299-23.684-28.474-23.684c-7.414,0-12.437,0.715-15.071,1.432V307.6 c3.114,0.707,6.942,0.949,12.192,0.949C148.419,308.549,160.381,298.74,160.381,282.225z"/><path fill="' + r + '" d="M272.875,259.019c-8.145,0-13.397,0.717-16.519,1.435v105.523c3.116,0.729,8.142,0.729,12.69,0.729 c33.017,0.231,54.554-17.946,54.554-56.474C323.842,276.719,304.215,259.019,272.875,259.019z"/><path fill="' + r + '" d="M488.426,197.019H475.2v-63.816c0-0.398-0.063-0.799-0.116-1.202c-0.021-2.534-0.827-5.023-2.562-6.995L366.325,3.694 c-0.032-0.031-0.063-0.042-0.085-0.076c-0.633-0.707-1.371-1.295-2.151-1.804c-0.231-0.155-0.464-0.285-0.706-0.419 c-0.676-0.369-1.393-0.675-2.131-0.896c-0.2-0.056-0.38-0.138-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2 c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.873v160.545 c0,17.043,13.824,30.87,30.873,30.87h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601 V419.302h13.226c17.044,0,30.871-13.827,30.871-30.87v-160.54C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605 h250.193v110.513c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M362.359,309.023c0,30.876-11.243,52.165-26.82,65.333 c-16.971,14.117-42.82,20.814-74.396,20.814c-18.9,0-32.297-1.197-41.401-2.389V234.365c13.399-2.149,30.878-3.346,49.304-3.346 c30.612,0,50.478,5.508,66.039,17.226C351.828,260.69,362.359,280.547,362.359,309.023z M80.7,393.499V234.365 c11.241-1.904,27.042-3.346,49.296-3.346c22.491,0,38.527,4.308,49.291,12.928c10.292,8.131,17.215,21.534,17.215,37.328 c0,15.799-5.25,29.198-14.829,38.285c-12.442,11.728-30.865,16.996-52.407,16.996c-4.778,0-9.1-0.243-12.435-0.723v57.67H80.7 V393.499z M453.601,523.353H97.2V419.302h356.4V523.353z M484.898,262.127h-61.989v36.851h57.913v29.674h-57.913v64.848h-36.593 V232.216h98.582V262.127z"/></svg>'
}, OrgChart.icon.svg = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '" viewBox="0 0 550.801 550.801"><path fill="' + r + '" d="M488.426,197.019H475.2v-63.816c0-0.398-0.063-0.799-0.116-1.202c-0.021-2.534-0.827-5.023-2.562-6.995L366.325,3.694 c-0.032-0.031-0.063-0.042-0.085-0.076c-0.633-0.707-1.371-1.295-2.151-1.804c-0.231-0.155-0.464-0.285-0.706-0.419 c-0.676-0.369-1.393-0.675-2.131-0.896c-0.2-0.056-0.38-0.138-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2 c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.873v160.545 c0,17.043,13.824,30.87,30.873,30.87h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601 V419.302h13.226c17.044,0,30.871-13.827,30.871-30.87v-160.54C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605 h250.193v110.513c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M338.871,225.672L284.545,386.96h-42.591 l-51.69-161.288h39.967l19.617,68.196c5.508,19.143,10.531,37.567,14.36,57.67h0.717c4.061-19.385,9.089-38.527,14.592-56.953 l20.585-68.918h38.77V225.672z M68.458,379.54l7.415-30.153c9.811,5.021,24.888,10.051,40.439,10.051 c16.751,0,25.607-6.935,25.607-17.465c0-10.052-7.662-15.795-27.05-22.734c-26.8-9.328-44.263-24.168-44.263-47.611 c0-27.524,22.971-48.579,61.014-48.579c18.188,0,31.591,3.823,41.159,8.131l-8.126,29.437c-6.465-3.116-17.945-7.657-33.745-7.657 c-15.791,0-23.454,7.183-23.454,15.552c0,10.296,9.089,14.842,29.917,22.731c28.468,10.536,41.871,25.365,41.871,48.094 c0,27.042-20.812,50.013-65.09,50.013C95.731,389.349,77.538,384.571,68.458,379.54z M453.601,523.353H97.2V419.302h356.4V523.353z M488.911,379.54c-11.243,3.823-32.537,9.103-53.831,9.103c-29.437,0-50.73-7.426-65.57-21.779 c-14.839-13.875-22.971-34.942-22.738-58.625c0.253-53.604,39.255-84.235,92.137-84.235c20.81,0,36.852,4.073,44.74,7.896 l-7.657,29.202c-8.859-3.829-19.849-6.95-37.567-6.95c-30.396,0-53.357,17.233-53.357,52.173c0,33.265,20.81,52.882,50.73,52.882 c8.375,0,15.072-0.96,17.94-2.395v-33.745h-24.875v-28.471h60.049V379.54L488.911,379.54z" /></svg>'
}, OrgChart.icon.csv = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '" viewBox="0 0 548.29 548.291" ><path fill="' + r + '" d="M486.2,196.121h-13.164V132.59c0-0.399-0.064-0.795-0.116-1.2c-0.021-2.52-0.824-5-2.551-6.96L364.656,3.677 c-0.031-0.034-0.064-0.044-0.085-0.075c-0.629-0.707-1.364-1.292-2.141-1.796c-0.231-0.157-0.462-0.286-0.704-0.419 c-0.672-0.365-1.386-0.672-2.121-0.893c-0.199-0.052-0.377-0.134-0.576-0.188C358.229,0.118,357.4,0,356.562,0H96.757 C84.893,0,75.256,9.649,75.256,21.502v174.613H62.093c-16.972,0-30.733,13.756-30.733,30.73v159.81 c0,16.966,13.761,30.736,30.733,30.736h13.163V526.79c0,11.854,9.637,21.501,21.501,21.501h354.777 c11.853,0,21.502-9.647,21.502-21.501V417.392H486.2c16.966,0,30.729-13.764,30.729-30.731v-159.81 C516.93,209.872,503.166,196.121,486.2,196.121z M96.757,21.502h249.053v110.006c0,5.94,4.818,10.751,10.751,10.751h94.973v53.861 H96.757V21.502z M258.618,313.18c-26.68-9.291-44.063-24.053-44.063-47.389c0-27.404,22.861-48.368,60.733-48.368 c18.107,0,31.447,3.811,40.968,8.107l-8.09,29.3c-6.43-3.107-17.862-7.632-33.59-7.632c-15.717,0-23.339,7.149-23.339,15.485 c0,10.247,9.047,14.769,29.78,22.632c28.341,10.479,41.681,25.239,41.681,47.874c0,26.909-20.721,49.786-64.792,49.786 c-18.338,0-36.449-4.776-45.497-9.77l7.38-30.016c9.772,5.014,24.775,10.006,40.264,10.006c16.671,0,25.488-6.908,25.488-17.396 C285.536,325.789,277.909,320.078,258.618,313.18z M69.474,302.692c0-54.781,39.074-85.269,87.654-85.269 c18.822,0,33.113,3.811,39.549,7.149l-7.392,28.816c-7.38-3.084-17.632-5.939-30.491-5.939c-28.822,0-51.206,17.375-51.206,53.099 c0,32.158,19.051,52.4,51.456,52.4c10.947,0,23.097-2.378,30.241-5.238l5.483,28.346c-6.672,3.34-21.674,6.919-41.208,6.919 C98.06,382.976,69.474,348.424,69.474,302.692z M451.534,520.962H96.757v-103.57h354.777V520.962z M427.518,380.583h-42.399 l-51.45-160.536h39.787l19.526,67.894c5.479,19.046,10.479,37.386,14.299,57.397h0.709c4.048-19.298,9.045-38.352,14.526-56.693 l20.487-68.598h38.599L427.518,380.583z" /></svg>'
}, OrgChart.icon.excel = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '" viewBox="0 0 512 512"><path fill="#ECEFF1" d="M496,432.011H272c-8.832,0-16-7.168-16-16s0-311.168,0-320s7.168-16,16-16h224 c8.832,0,16,7.168,16,16v320C512,424.843,504.832,432.011,496,432.011z" /><path fill="' + r + '" d="M336,176.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,176.011,336,176.011z" /><path fill="' + r + '" d="M336,240.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,240.011,336,240.011z" /><path fill="' + r + '" d="M336,304.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,304.011,336,304.011z" /><path fill="' + r + '" d="M336,368.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,368.011,336,368.011z" /><path fill="' + r + '" d="M432,176.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,176.011,432,176.011z" /><path fill="' + r + '" d="M432,240.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,240.011,432,240.011z" /><path fill="' + r + '" d="M432,304.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,304.011,432,304.011z" /><path fill="' + r + '" d="M432,368.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,368.011,432,368.011z" /><path fill="' + r + '"  d="M282.208,19.691c-3.648-3.04-8.544-4.352-13.152-3.392l-256,48C5.472,65.707,0,72.299,0,80.011v352 c0,7.68,5.472,14.304,13.056,15.712l256,48c0.96,0.192,1.952,0.288,2.944,0.288c3.712,0,7.328-1.28,10.208-3.68 c3.68-3.04,5.792-7.584,5.792-12.32v-448C288,27.243,285.888,22.731,282.208,19.691z" /><path fill="#FAFAFA" d="M220.032,309.483l-50.592-57.824l51.168-65.792c5.44-6.976,4.16-17.024-2.784-22.464 c-6.944-5.44-16.992-4.16-22.464,2.784l-47.392,60.928l-39.936-45.632c-5.856-6.72-15.968-7.328-22.56-1.504 c-6.656,5.824-7.328,15.936-1.504,22.56l44,50.304L83.36,310.187c-5.44,6.976-4.16,17.024,2.784,22.464 c2.944,2.272,6.432,3.36,9.856,3.36c4.768,0,9.472-2.112,12.64-6.176l40.8-52.48l46.528,53.152 c3.168,3.648,7.584,5.504,12.032,5.504c3.744,0,7.488-1.312,10.528-3.968C225.184,326.219,225.856,316.107,220.032,309.483z" /></svg>'
}, OrgChart.icon.edit = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '" viewBox="0 0 528.899 528.899"><path fill="' + r + '" d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z" /></svg>'
}, OrgChart.icon.details = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '" viewBox="0 0 512 512"><path fill="' + r + '" d="M447.933,103.629c-0.034-3.076-1.224-6.09-3.485-8.352L352.683,3.511c-0.004-0.004-0.007-0.005-0.011-0.008 C350.505,1.338,347.511,0,344.206,0H89.278C75.361,0,64.04,11.32,64.04,25.237v461.525c0,13.916,11.32,25.237,25.237,25.237 h333.444c13.916,0,25.237-11.32,25.237-25.237V103.753C447.96,103.709,447.937,103.672,447.933,103.629z M356.194,40.931 l50.834,50.834h-49.572c-0.695,0-1.262-0.567-1.262-1.262V40.931z M423.983,486.763c0,0.695-0.566,1.261-1.261,1.261H89.278 c-0.695,0-1.261-0.566-1.261-1.261V25.237c0-0.695,0.566-1.261,1.261-1.261h242.94v66.527c0,13.916,11.322,25.239,25.239,25.239 h66.527V486.763z"/><path fill="' + r + '" d="M362.088,164.014H149.912c-6.62,0-11.988,5.367-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175 c6.62,0,11.988-5.368,11.988-11.988C374.076,169.381,368.707,164.014,362.088,164.014z"/><path fill="' + r + '" d="M362.088,236.353H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175 c6.62,0,11.988-5.368,11.988-11.988C374.076,241.721,368.707,236.353,362.088,236.353z"/><path fill="' + r + '" d="M362.088,308.691H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988h212.175 c6.62,0,11.988-5.367,11.988-11.988C374.076,314.06,368.707,308.691,362.088,308.691z"/><path fill="' + r + '" d="M256,381.031H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988H256 c6.62,0,11.988-5.367,11.988-11.988C267.988,386.398,262.62,381.031,256,381.031z"/></svg>'
}, OrgChart.icon.remove = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '"  viewBox="0 0 900.5 900.5"><path fill="' + r + '" d="M176.415,880.5c0,11.046,8.954,20,20,20h507.67c11.046,0,20-8.954,20-20V232.487h-547.67V880.5L176.415,880.5z M562.75,342.766h75v436.029h-75V342.766z M412.75,342.766h75v436.029h-75V342.766z M262.75,342.766h75v436.029h-75V342.766z"/><path fill="' + r + '" d="M618.825,91.911V20c0-11.046-8.954-20-20-20h-297.15c-11.046,0-20,8.954-20,20v71.911v12.5v12.5H141.874 c-11.046,0-20,8.954-20,20v50.576c0,11.045,8.954,20,20,20h34.541h547.67h34.541c11.046,0,20-8.955,20-20v-50.576 c0-11.046-8.954-20-20-20H618.825v-12.5V91.911z M543.825,112.799h-187.15v-8.389v-12.5V75h187.15v16.911v12.5V112.799z"/></svg>'
}, OrgChart.icon.add = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '"   viewBox="0 0 922 922"><path fill="' + r + '" d="M922,453V81c0-11.046-8.954-20-20-20H410c-11.045,0-20,8.954-20,20v149h318c24.812,0,45,20.187,45,45v198h149 C913.046,473.001,922,464.046,922,453z" /><path fill="' + r + '" d="M557,667.001h151c11.046,0,20-8.954,20-20v-174v-198c0-11.046-8.954-20-20-20H390H216c-11.045,0-20,8.954-20,20v149h194 h122c24.812,0,45,20.187,45,45v4V667.001z" /><path fill="' + r + '" d="M0,469v372c0,11.046,8.955,20,20,20h492c11.046,0,20-8.954,20-20V692v-12.501V667V473v-4c0-11.046-8.954-20-20-20H390H196 h-12.5H171H20C8.955,449,0,457.955,0,469z" /></svg>'
}, OrgChart.icon.search = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 485.213 485.213"><path fill="' + r + '" d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324 c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z" /><path fill="' + r + '" d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951 C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46 c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465 C318.424,257.208,257.206,318.416,181.956,318.416z" /><path fill="' + r + '" d="M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z" /></svg>'
}, OrgChart.icon.xml = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '" viewBox="0 0 550.801 550.801"><path fill="' + r + '"  d="M488.426,197.019H475.2v-63.816c0-0.401-0.063-0.799-0.116-1.205c-0.021-2.534-0.827-5.023-2.562-6.992L366.325,3.691 c-0.032-0.031-0.063-0.042-0.085-0.073c-0.633-0.707-1.371-1.298-2.151-1.804c-0.231-0.158-0.464-0.287-0.706-0.422 c-0.676-0.366-1.393-0.675-2.131-0.896c-0.2-0.053-0.38-0.135-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2 c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.87v160.542 c0,17.044,13.824,30.876,30.873,30.876h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601 V419.302h13.226c17.044,0,30.871-13.827,30.871-30.87V227.89C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605 h250.193v110.51c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M369.531,374.53h-32.058l-2.156-55.519 c-0.644-17.434-1.298-38.518-1.298-59.611h-0.633c-4.514,18.516-10.547,39.166-16.137,56.162l-17.645,56.601h-25.618 l-15.494-56.157c-4.725-16.996-9.671-37.658-13.123-56.6h-0.43c-0.854,19.585-1.508,41.961-2.586,60.038l-2.576,55.086h-30.343 l9.26-145.035h43.677l14.207,48.421c4.517,16.774,9.041,34.847,12.258,51.843h0.654c4.081-16.77,9.038-35.923,13.774-52.064 l15.493-48.199h42.82L369.531,374.53z M69.992,374.53l41.955-73.385l-40.444-71.65h37.655l12.688,26.465 c4.316,8.828,7.533,15.928,10.99,24.092h0.422c3.438-9.242,6.23-15.694,9.893-24.092l12.274-26.465h37.434l-40.89,70.796 l43.044,74.239h-37.866l-13.134-26.257c-5.376-10.108-8.817-17.639-12.909-26.04h-0.433c-3.009,8.401-6.674,15.932-11.19,26.04 l-12.042,26.257H69.992z M453.601,523.353H97.2V419.302h356.4V523.353z M485.325,374.53h-90.608V229.495h32.933v117.497h57.682 v27.538H485.325z"/></svg>'
}, OrgChart.icon.link = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '" viewBox="0 0 512.092 512.092"  ><path fill="' + r + '" d="M312.453,199.601c-6.066-6.102-12.792-11.511-20.053-16.128c-19.232-12.315-41.59-18.859-64.427-18.859 c-31.697-0.059-62.106,12.535-84.48,34.987L34.949,308.23c-22.336,22.379-34.89,52.7-34.91,84.318 c-0.042,65.98,53.41,119.501,119.39,119.543c31.648,0.11,62.029-12.424,84.395-34.816l89.6-89.6 c1.628-1.614,2.537-3.816,2.524-6.108c-0.027-4.713-3.87-8.511-8.583-8.484h-3.413c-18.72,0.066-37.273-3.529-54.613-10.581 c-3.195-1.315-6.867-0.573-9.301,1.877l-64.427,64.512c-20.006,20.006-52.442,20.006-72.448,0 c-20.006-20.006-20.006-52.442,0-72.448l108.971-108.885c19.99-19.965,52.373-19.965,72.363,0 c13.472,12.679,34.486,12.679,47.957,0c5.796-5.801,9.31-13.495,9.899-21.675C322.976,216.108,319.371,206.535,312.453,199.601z" /><path fill="' + r + '" d="M477.061,34.993c-46.657-46.657-122.303-46.657-168.96,0l-89.515,89.429c-2.458,2.47-3.167,6.185-1.792,9.387 c1.359,3.211,4.535,5.272,8.021,5.205h3.157c18.698-0.034,37.221,3.589,54.528,10.667c3.195,1.315,6.867,0.573,9.301-1.877 l64.256-64.171c20.006-20.006,52.442-20.006,72.448,0c20.006,20.006,20.006,52.442,0,72.448l-80.043,79.957l-0.683,0.768 l-27.989,27.819c-19.99,19.965-52.373,19.965-72.363,0c-13.472-12.679-34.486-12.679-47.957,0 c-5.833,5.845-9.35,13.606-9.899,21.845c-0.624,9.775,2.981,19.348,9.899,26.283c9.877,9.919,21.433,18.008,34.133,23.893 c1.792,0.853,3.584,1.536,5.376,2.304c1.792,0.768,3.669,1.365,5.461,2.048c1.792,0.683,3.669,1.28,5.461,1.792l5.035,1.365 c3.413,0.853,6.827,1.536,10.325,2.133c4.214,0.626,8.458,1.025,12.715,1.195h5.973h0.512l5.12-0.597 c1.877-0.085,3.84-0.512,6.059-0.512h2.901l5.888-0.853l2.731-0.512l4.949-1.024h0.939c20.961-5.265,40.101-16.118,55.381-31.403 l108.629-108.629C523.718,157.296,523.718,81.65,477.061,34.993z" /></svg>'
}, OrgChart.icon.happy = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '" viewBox="0 0 512 512"><path fill="' + r + '" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480 C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/><path fill="' + r + '" d="M176,176c17.673,0,32,14.327,32,32h32c0-35.346-28.654-64-64-64c-35.346,0-64,28.654-64,64h32 C144,190.327,158.327,176,176,176z"/><path fill="' + r + '" d="M336,144c-35.346,0-64,28.654-64,64h32c0-17.673,14.327-32,32-32c17.673,0,32,14.327,32,32h32 C400,172.654,371.346,144,336,144z"/><path fill="' + r + '" d="M256,368c-53.019,0-96-42.981-96-96h-32c0,70.692,57.308,128,128,128s128-57.308,128-128h-32 C352,325.019,309.019,368,256,368z"/></svg>'
}, OrgChart.icon.sad = function(t, e, r) {
    return '<svg width="' + t + '" height="' + e + '" viewBox="0 0 512 512"><path fill="' + r + '" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480 C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/><path fill="' + r + '" d="M336,192c-17.673,0-32-14.327-32-32h-32c0,35.346,28.654,64,64,64c35.346,0,64-28.654,64-64h-32 C368,177.673,353.673,192,336,192z"/><path fill="' + r + '" d="M176,224c35.346,0,64-28.654,64-64h-32c0,17.673-14.327,32-32,32s-32-14.327-32-32h-32C112,195.346,140.654,224,176,224z "/><path fill="' + r + '" d="M256,256c-70.692,0-128,57.308-128,128h32c0-53.019,42.981-96,96-96s96,42.981,96,96h32C384,313.308,326.692,256,256,256 z"/></svg>'
}, OrgChart.icon.share = function(t, e, r, i, a) {
    return OrgChart.isNEU(i) && (i = 0), OrgChart.isNEU(a) && (a = 0), `<svg width="${t}" height="${e}" x="${i}" y="${a}" viewBox="0 0 512 512">\n                <path fill="${r}" d="M406,332c-29.641,0-55.761,14.581-72.167,36.755L191.99,296.124c2.355-8.027,4.01-16.346,4.01-25.124\n                    c0-11.906-2.441-23.225-6.658-33.636l148.445-89.328C354.307,167.424,378.589,180,406,180c49.629,0,90-40.371,90-90\n                    c0-49.629-40.371-90-90-90c-49.629,0-90,40.371-90,90c0,11.437,2.355,22.286,6.262,32.358l-148.887,89.59\n                    C156.869,193.136,132.937,181,106,181c-49.629,0-90,40.371-90,90c0,49.629,40.371,90,90,90c30.13,0,56.691-15.009,73.035-37.806\n                    l141.376,72.395C317.807,403.995,316,412.75,316,422c0,49.629,40.371,90,90,90c49.629,0,90-40.371,90-90\n                    C496,372.371,455.629,332,406,332z"/>\n                </svg>`
}, OrgChart.icon.user = function(t, e, r, i, a) {
    return OrgChart.isNEU(i) && (i = 0), OrgChart.isNEU(a) && (a = 0), `<svg width="${t}" height="${e}" x="${i}" y="${a}" viewBox="0 0 24 24">\n                <path fill="${r}" d="M12 11.796C14.7189 11.796 16.9231 9.60308 16.9231 6.89801C16.9231 4.19294 14.7189 2.00005 12 2.00005C9.28106 2.00005 7.07692 4.19294 7.07692 6.89801C7.07692 9.60308 9.28106 11.796 12 11.796Z" fill="#030D45"/>\n                <path fill="${r}" d="M14.5641 13.8369H9.4359C6.46154 13.8369 4 16.2859 4 19.245C4 19.9593 4.30769 20.5716 4.92308 20.8777C5.84615 21.3879 7.89744 22.0001 12 22.0001C16.1026 22.0001 18.1538 21.3879 19.0769 20.8777C19.5897 20.5716 20 19.9593 20 19.245C20 16.1838 17.5385 13.8369 14.5641 13.8369Z" fill="#030D45"/>\n            </svg>`
}, OrgChart.prototype.exportPDFProfile = function(t, e) {
    t = this._defaultExportProfileOptions(t, "pdf"), this._exportProfile(t, e)
}, OrgChart.prototype.exportPNGProfile = function(t, e) {
    t = this._defaultExportProfileOptions(t, "png"), this._exportProfile(t, e)
}, OrgChart.prototype.shareProfile = function(t) {
    var e;
    "object" == typeof t ? t = (e = t).focusId : e = this.editUI.content(t, !0, !0, "100%", !0);
    var r = new URL(window.location.href);
    r.searchParams.append("nodeId", t);
    var i = {
        title: e.title,
        text: e.shareText,
        url: r.href
    };
    try {
        navigator.share(i)
    } catch (t) {
        console.error("error: " + t)
    }
}, OrgChart.prototype.exportPDF = function(t, e) {
    t = this._defaultExportOptions(t, "pdf"), this._export(t, e)
}, OrgChart.prototype.exportPNG = function(t, e) {
    t = this._defaultExportOptions(t, "png"), this._export(t, e)
}, OrgChart.prototype.exportSVG = function(t, e) {
    t = this._defaultExportOptions(t, "svg"), this._export(t, e)
}, OrgChart.prototype._defaultExportOptions = function(t, e) {
    return null == t && (t = {}), "svg" == e ? (t.ext = "svg", t.mime = "image/svg+xml") : "pdf" == e ? (t.mime = "application/pdf", t.ext = "pdf") : "png" == e && (t.mime = "image/png", t.ext = "png"), null == t.margin && (t.margin = [50, 40, 50, 40]), null == t.padding && (t.padding = 0), null == t.landscape && (t.landscape = !1), null == t.filename && (t.filename = "OrgChart." + t.ext), null == t.scale && (t.scale = "fit"), null == t.format && (t.format = "fit"), null == t.header && (t.header = ""), null == t.footer && (t.footer = "Page {current-page} of {total-pages}"), null == t.openInNewTab && (t.openInNewTab = !1), null == t.mode && (t.mode = this.config.mode), t
}, OrgChart.prototype._export = function(t, e) {
    var r = this,
        i = {
            id: t.nodeId,
            expandChildren: t.expandChildren
        };
    t.margin && t.margin[0] < 2 && (t.margin[0] = 2), t.margin && t.margin[1] < 2 && (t.margin[1] = 2), t.margin && t.margin[2] < 2 && (t.margin[2] = 2), t.margin && t.margin[3] < 2 && (t.margin[3] = 2), this._draw(!1, OrgChart.action.exporting, i, (function(i) {
        var a = document.createElement("div");
        if (a.innerHTML = i, t.padding > 0) {
            var n = a.querySelector("svg"),
                o = OrgChart._getViewBox(n);
            o[0] -= t.padding, o[1] -= t.padding, o[2] += 2 * t.padding, o[3] += 2 * t.padding, n.setAttribute("viewBox", o.join()), n.setAttribute("width", o[2]), n.setAttribute("height", o[3])
        }
        if ("svg" == t.ext)
            if (e) e(t, a.innerHTML);
            else {
                (n = a.querySelector("svg")).classList.add(r.config.mode);
                var l = {
                        content: a.innerHTML,
                        options: t,
                        styles: ""
                    },
                    s = OrgChart.events.publish("exportstart", [r, l]),
                    h = r.element.querySelector("[data-ba-styles]");
                if (h && (l.styles += h.outerHTML), l.styles && (a.childNodes[0].insertAdjacentHTML("afterbegin", l.styles), l.content = a.innerHTML), !1 === s) return !1;
                if (!1 === (s = OrgChart.events.publish("exportend", [r, l]))) return !1;
                OrgChart._downloadFile(t.mime, l.content, l.options.filename, l.options.openInNewTab)
            }
        else r._pages(t, a.querySelector("svg"), (function(i) {
            var n = {
                    content: a.innerHTML,
                    options: t,
                    pages: i,
                    styles: ""
                },
                o = OrgChart.events.publish("exportstart", [r, n]),
                l = r.element.querySelector("[data-ba-styles]");
            if (l && (n.styles += l.outerHTML), !1 === o) return !1;
            e || OrgChart.loading.show(r), e ? e(r, n, a.querySelector("svg")) : (n = JSON.stringify(n), OrgChart._ajax(r.config.exportUrl + "/v3", "POST", n, "arraybuffer", (function(e) {
                var i = OrgChart.events.publish("exportend", [r, e]);
                if (OrgChart.loading.hide(r), !1 === i) return !1;
                OrgChart._downloadFile(t.mime, e, t.filename, t.openInNewTab)
            })))
        }))
    }))
}, OrgChart.prototype.exportCSV = function(t) {
    t || (t = "OrgChart.csv");
    var e = {
        ext: "csv",
        filename: t,
        nodes: JSON.parse(JSON.stringify(this.config.nodes))
    };
    if (!1 === OrgChart.events.publish("exportstart", [this, e])) return !1;
    var r = OrgChart._json2csv(e.nodes),
        i = {
            ext: e.ext,
            filename: e.filename,
            nodes: e.nodes,
            content: r
        };
    if (!1 === OrgChart.events.publish("exportend", [this, i])) return !1;
    OrgChart._downloadFile("text/csv;charset=utf-8;", "\ufeff" + i.content, i.filename, i.openInNewTab)
}, OrgChart.prototype.exportXML = function(t) {
    t || (t = "OrgChart.xml");
    var e = {
        ext: "xml",
        filename: t,
        nodes: JSON.parse(JSON.stringify(this.config.nodes))
    };
    if (!1 === OrgChart.events.publish("exportstart", [this, e])) return !1;
    var r = OrgChart._json2xml(e.nodes),
        i = {
            ext: e.ext,
            filename: e.filename,
            nodes: e.nodes,
            content: r
        };
    if (!1 === OrgChart.events.publish("exportend", [this, i])) return !1;
    OrgChart._downloadFile("application/xml", i.content, i.filename, i.openInNewTab)
}, OrgChart.prototype._pages = function(t, e, r) {
    "A5" == t.format && "fit" != t.scale || "A4" == t.format && "fit" != t.scale || "A3" == t.format && "fit" != t.scale || "A2" == t.format && "fit" != t.scale || "A1" == t.format && "fit" != t.scale || "Letter" == t.format && "fit" != t.scale || "Legal" == t.format && "fit" != t.scale ? r(this._pagesA100(t, e, t.scale)) : "A5" == t.format && "fit" == t.scale || "A4" == t.format && "fit" == t.scale || "A3" == t.format && "fit" == t.scale || "A2" == t.format && "fit" == t.scale || "A1" == t.format && "fit" == t.scale || "Letter" == t.format && "fit" == t.scale || "Legal" == t.format && "fit" == t.scale ? r(this._pagesAfit(t, e)) : "fit" == t.format && r(this._pagesFit(t, e))
}, OrgChart.prototype._pagesFit = function(t, e) {
    var r = e.getAttribute("width"),
        i = e.getAttribute("height"),
        a = OrgChart._getViewBox(e),
        n = {
            w: parseFloat(r),
            h: parseFloat(i)
        };
    return [{
        vb: a,
        size: {
            w: n.w + (t.margin[1] + t.margin[3]),
            h: n.h + (t.margin[0] + t.margin[2])
        },
        innerSize: n
    }]
}, OrgChart.prototype._pagesAfit = function(t, e) {
    var r = e.getAttribute("width"),
        i = 0,
        a = 0;
    switch (t.format) {
        case "A5":
            i = OrgChart.A5w, a = OrgChart.A5h;
            break;
        case "A4":
            i = OrgChart.A4w, a = OrgChart.A4h;
            break;
        case "A3":
            i = OrgChart.A3w, a = OrgChart.A3h;
            break;
        case "A2":
            i = OrgChart.A2w, a = OrgChart.A2h;
            break;
        case "A1":
            i = OrgChart.A1w, a = OrgChart.A1h;
            break;
        case "Letter":
            i = OrgChart.Letterw, a = OrgChart.Letterh;
            break;
        case "Legal":
            i = OrgChart.Legalw, a = OrgChart.Legalh
    }
    var n = t.landscape ? a - (t.margin[1] + t.margin[3]) : i - (t.margin[1] + t.margin[3]),
        o = (t.landscape ? (t.margin[0], t.margin[2]) : (t.margin[0], t.margin[2]), n / r);
    return this._pagesA100(t, e, 100 * o)
}, OrgChart.prototype._pagesA100 = function(t, e, r) {
    var i = OrgChart._getViewBox(e),
        a = 0,
        n = 0;
    switch (t.format) {
        case "A5":
            a = OrgChart.A5w, n = OrgChart.A5h;
            break;
        case "A4":
            a = OrgChart.A4w, n = OrgChart.A4h;
            break;
        case "A3":
            a = OrgChart.A3w, n = OrgChart.A3h;
            break;
        case "A2":
            a = OrgChart.A2w, n = OrgChart.A2h;
            break;
        case "A1":
            a = OrgChart.A1w, n = OrgChart.A1h;
            break;
        case "Letter":
            a = OrgChart.Letterw, n = OrgChart.Letterh;
            break;
        case "Legal":
            a = OrgChart.Legalw, n = OrgChart.Legalh
    }
    var o = i[0],
        l = i[1],
        s = i[2],
        h = i[3],
        d = {
            w: t.landscape ? n - (t.margin[1] + t.margin[3]) : a - (t.margin[1] + t.margin[3]),
            h: t.landscape ? a - (t.margin[0] + t.margin[2]) : n - (t.margin[0] + t.margin[2])
        },
        c = {
            w: t.landscape ? n : a,
            h: t.landscape ? a : n
        };
    e.setAttribute("preserveAspectRatio", "xMinYMin slice"), e.setAttribute("width", d.w), e.setAttribute("height", d.h);
    for (var g = d.w * (100 / r), p = d.h * (100 / r), u = o, f = l, m = []; u < s + o;) {
        for (; f < h + l;) {
            var C = [u, f, g, p];
            C = C.join(), m.push({
                vb: C,
                innerSize: d,
                size: c
            }), f += p
        }
        u += g, f = l
    }
    return m
}, OrgChart.prototype._defaultExportProfileOptions = function(t, e) {
    return (OrgChart.isNEU(t) || OrgChart.isNEU(t.id)) && console.error("options.id is not defilned"), "svg" == e ? (t.ext = "svg", t.mime = "image/svg+xml") : "pdf" == e ? (t.mime = "application/pdf", t.ext = "pdf") : "png" == e && (t.mime = "image/png", t.ext = "png"), null == t.margin && (t.margin = [50, 40, 50, 40]), null == t.padding && (t.padding = 0), null == t.landscape && (t.landscape = !1), null == t.filename && (t.filename = "Profile." + t.ext), null == t.scale && (t.scale = "fit"), null == t.format && (t.format = "A4"), null == t.header && (t.header = ""), null == t.footer && (t.footer = ""), null == t.openInNewTab && (t.openInNewTab = !1), null == t.mode && (t.mode = this.config.mode), t
}, OrgChart.prototype._exportProfile = function(t, e) {
    var r = this,
        i = 0,
        a = 0;
    switch (t.format) {
        case "A5":
            i = OrgChart.A5w, a = OrgChart.A5h;
            break;
        case "A4":
            i = OrgChart.A4w, a = OrgChart.A4h;
            break;
        case "A3":
            i = OrgChart.A3w, a = OrgChart.A3h;
            break;
        case "A2":
            i = OrgChart.A2w, a = OrgChart.A2h;
            break;
        case "A1":
            i = OrgChart.A1w, a = OrgChart.A1h;
            break;
        case "Letter":
            i = OrgChart.Letterw, a = OrgChart.Letterh;
            break;
        case "Legal":
            i = OrgChart.Legalw, a = OrgChart.Legalh
    }
    var n = {
            w: t.landscape ? a - (t.margin[1] + t.margin[3]) : i - (t.margin[1] + t.margin[3]),
            h: t.landscape ? i - (t.margin[0] + t.margin[2]) : a - (t.margin[0] + t.margin[2])
        },
        o = {
            w: t.landscape ? a : i,
            h: t.landscape ? i : a
        },
        l = this.editUI.content(t.id, !0, !0, "100%", !0).element;
    OrgChart.input.init(l);
    var s = {
        content: l.outerHTML,
        options: t,
        pages: [{
            vb: "",
            innerSize: n,
            size: o
        }],
        styles: ""
    };
    if (!e) {
        if (!1 === OrgChart.events.publish("exportstart", [r, s])) return !1;
        OrgChart.loading.show(r)
    }
    var h = this.element.querySelector("[data-ba-styles]");
    h && (s.styles += h.outerHTML);
    var d = this.getSvg().querySelector("defs");
    if (d)
        for (var c = 0; c < d.children.length; c++) "style" == d.children[c].nodeName.toLowerCase() && (s.styles += d.children[c].outerHTML);
    s = JSON.stringify(s), OrgChart._ajax(this.config.exportUrl + "/v3", "POST", s, "arraybuffer", (function(i) {
        if (e) e(r, i);
        else {
            var a = OrgChart.events.publish("exportend", [r, i]);
            if (OrgChart.loading.hide(r), !1 === a) return !1;
            OrgChart._downloadFile(t.mime, i, t.filename, t.openInNewTab)
        }
    }))
}, void 0 === OrgChart && (OrgChart = {}), OrgChart.events = function() {
    var t = {};
    return {
        on: function(e, r, i) {
            Array.isArray(t[e]) || (t[e] = []), t[e].push({
                listener: r,
                event_id: i
            })
        },
        removeAll: function(e) {
            Array.isArray(t[e]) || (t[e] = []), t[e] = []
        },
        removeForEventId: function(e) {
            for (var r in t)
                if (Array.isArray(t[r]))
                    for (var i = t[r].length - 1; i >= 0; i--) t[r][i].event_id == e && t[r].splice(i, 1)
        },
        publish: function(e, r) {
            if (t[e]) {
                for (var i = [], a = 0; a < t[e].length; a++) {
                    var n = t[e][a];
                    null != n.event_id && n.event_id != r[0]._event_id || i.push(n.listener)
                }
                if (i.length > 0) {
                    var o = !0;
                    for (a = 0; a < i.length; a++) 1 == r.length ? o = i[a](r[0]) && o : 2 == r.length ? o = i[a](r[0], r[1]) && o : 3 == r.length ? o = i[a](r[0], r[1], r[2]) && o : 4 == r.length ? o = i[a](r[0], r[1], r[2], r[3]) && o : 5 == r.length && (o = i[a](r[0], r[1], r[2], r[3], r[4]) && o);
                    return o
                }
            }
        }
    }
}(), OrgChart.prototype.importCSV = function() {
    var t = this,
        e = document.createElement("INPUT");
    e.setAttribute("type", "file"), e.setAttribute("accept", ".csv"), e.style.display = "none", e.onchange = function(e) {
        var r = e.target,
            i = new FileReader;
        i.onload = function() {
            var e = i.result,
                r = OrgChart._csvToArray(e, ","),
                a = [],
                n = r[0];
            OrgChart._importSetColumnNames(n, (function(e) {
                for (var i = 1; i < r.length; i++) {
                    for (var n = {}, o = 0; o < r[i].length; o++) {
                        var l = e[o],
                            s = r[i][o];
                        if ("tags" == l && "" != s) s = s.split(",");
                        else if ("tags" == l && "" == s) continue;
                        n[l] = s
                    }
                    "" != n.id.trim() && a.push(n)
                }
                var h = {
                    nodes: a,
                    columnNames: r[0]
                };
                0 != OrgChart.events.publish("import", [t, h]) && (t.config.nodes = h.nodes, t.draw())
            }))
        }, i.readAsText(r.files[0])
    }, e.click()
}, OrgChart._importSetColumnNames = function(t, e) {
    if (-1 == t.indexOf("id") || -1 == t.indexOf("pid")) {
        var r = document.createElement("DIV"),
            i = document.createElement("P");
        i.style.padding = "5px", i.style.color = "rgb(122, 122, 122)", i.innerHTML = OrgChart.IMPORT_MESSAGE, r.appendChild(i);
        var a = document.createElement("div"),
            n = document.createElement("div"),
            o = document.createElement("div"),
            l = document.createElement("span");
        a.setAttribute("id", "sampleDialog"), a.style.height = "260px", a.style.width = "400px", a.style.background = "white", a.style.border = "0.5px solid grey", a.style.position = "fixed", a.style.overflow = "hidden", a.style.zIndex = "99", n.setAttribute("id", "title"), n.style.backgroundColor = "#e5e5e5", n.style.fontWeight = "bold", n.style.color = "rgb(122, 122, 122)", n.style.height = "20px", n.style.padding = "3px 0 0 7px", l.setAttribute("id", "close"), l.style.cursor = "pointer", l.style.position = "absolute", l.style.color = "rgb(122, 122, 122)", l.style.fontWeight = "bold", l.style.top = "2px", l.style.zIndex = 100, o.setAttribute("id", "content"), o.style.padding = "2px", n.innerHTML = "Import Organizational Chart Data", l.innerHTML = "&times;";
        var s = document.createElement("HR");
        s.style.height = "0.1px", s.style.backgroundColor = "#aeaeae", s.style.border = "none", s.style.margin = "0", a.appendChild(n), a.appendChild(s), o.appendChild(r), a.appendChild(o), a.appendChild(l), document.body.appendChild(a), OrgChart._importCenter(a), l.style.left = a.offsetWidth - 20 + "px";
        var h = document.createElement("div");
        h.setAttribute("id", "overlay"), h.style.width = "100%", h.style.height = "100%", h.style.left = 0, h.style.top = 0, h.style.position = "fixed", h.style.background = "grey", h.style.opacity = "0.5", h.style.zIndex = 98, document.body.appendChild(h), a._overlay = h;
        var d = document.createElement("LABEL"),
            c = document.createTextNode("Name:");
        d.setAttribute("for", "id-select"), d.appendChild(c), d.style.fontSize = "16px", d.style.color = "rgb(122, 122, 122)", d.style.padding = "5px", d.style.margin = "5px", d.style.width = "30%", d.style.textAlign = "right", d.style.display = "inline-block", r.appendChild(d);
        var g = document.createElement("SELECT");
        g.id = "id-select", g.style.fontSize = "16px", g.style.color = "rgb(122, 122, 122)", g.style.padding = "5px", g.style.margin = "5px", g.style.width = "60%", g.style.border = "1px solid #aeaeae", r.appendChild(g);
        var p = document.createElement("BR");
        r.appendChild(p);
        for (var u = 0; u < t.length; u++) {
            (v = document.createElement("option")).setAttribute("value", t[u]);
            var f = document.createTextNode(t[u]);
            v.appendChild(f), g.appendChild(v)
        }
        var m = document.createElement("LABEL"),
            C = document.createTextNode("Reports to:");
        m.setAttribute("for", "pid-select"), m.appendChild(C), m.style.fontSize = "16px", m.style.color = "rgb(122, 122, 122)", m.style.padding = "5px", m.style.margin = "5px", m.style.width = "30%", m.style.textAlign = "right", m.style.display = "inline-block", r.appendChild(m);
        var O = document.createElement("SELECT");
        O.id = "pid-select", O.style.fontSize = "16px", O.style.color = "rgb(122, 122, 122)", O.style.padding = "5px", O.style.margin = "5px", O.style.width = "60%", O.style.border = "1px solid #aeaeae", r.appendChild(O);
        for (u = 0; u < t.length; u++) {
            var v;
            (v = document.createElement("option")).setAttribute("value", t[u]);
            f = document.createTextNode(t[u]);
            v.appendChild(f), O.appendChild(v)
        }
        var b = document.createElement("BUTTON");
        b.innerHTML = "Import", b.style.fontSize = "16px", b.style.color = "rgb(122, 122, 122)", b.style.padding = "5px 20px", b.style.margin = "20px auto", b.style.display = "block", b.onclick = function() {
            a.style.display = "none", a._overlay && a._overlay.parentNode.removeChild(a._overlay);
            var r = g.options[g.selectedIndex].value,
                i = t.indexOf(r);
            t[i] = "id";
            var n = O.options[O.selectedIndex].value,
                o = t.indexOf(n);
            t[o] = "pid", e(t)
        };
        var x = document.createElement("DIV");
        return x.appendChild(b), r.appendChild(x), l.onclick = function(t) {
            a._overlay && a._overlay.parentNode.removeChild(a._overlay), a.parentNode.removeChild(a), t.stopPropagation()
        }, n.onmousedown = function(t) {
            t = t || window.event, a._dragging = !0, a._originalLeft = a.offsetLeft, a._originalTop = a.offsetTop, a._mouseLeft = t.clientX, a._mouseTop = t.clientY
        }, document.onmousemove = function(t) {
            t = t || window.event, a._dragging && (a.style.left = a._originalLeft + t.clientX - a._mouseLeft + "px", a.style.top = a._originalTop + t.clientY - a._mouseTop + "px")
        }, document.onmouseup = function(t) {
            t = t || window.event, a._dragging && (a.style.left = a._originalLeft + t.clientX - a._mouseLeft + "px", a.style.top = a._originalTop + t.clientY - a._mouseTop + "px", a._dragging = !1)
        }, a
    }
    e(t)
}, OrgChart._importCenter = function(t) {
    t && (t.style.left = (window.innerWidth - t.offsetWidth) / 2 + "px", t.style.top = (window.innerHeight - t.offsetHeight) / 2 + "px")
}, OrgChart.prototype.importXML = function() {
    var t = this,
        e = document.createElement("INPUT");
    e.setAttribute("type", "file"), e.setAttribute("accept", ".xml"), e.style.display = "none", e.onchange = function(e) {
        var r = e.target,
            i = new FileReader;
        i.onload = function() {
            var e = i.result,
                r = OrgChart._xml2json(e);
            0 != OrgChart.events.publish("import", [t, r]) && (t.config.nodes = r, t.draw())
        }, i.readAsText(r.files[0])
    }, e.click()
}, OrgChart.prototype.expand = function(t, e, r) {
    var i = {
        id: t,
        ids: e
    };
    this._draw(!1, OrgChart.action.expand, i, r)
}, OrgChart.prototype.collapse = function(t, e, r) {
    var i = {
        id: t,
        ids: e
    };
    this._draw(!1, OrgChart.action.collapse, i, r)
}, OrgChart.prototype.changeRoots = function(t, e, r) {
    this.config.roots = e;
    var i = {
        id: t
    };
    this._draw(!1, OrgChart.action.update, i, r)
}, OrgChart.prototype.expandCollapse = function(t, e, r, i) {
    Array.isArray(e) || (e = []), Array.isArray(r) || (r = []);
    var a = {
        id: t,
        expandIds: e,
        collapseIds: r,
        ids: e.concat(r)
    };
    this._draw(!1, OrgChart.action.collapse, a, i)
}, OrgChart.prototype.expandCollapseToLevel = function(t, e, r, i) {
    this.config.collapse = e, null == r && (r = {}), this.config.expand = r;
    var a = {
        id: t,
        method: "expandCollapseToLevel"
    };
    this._draw(!1, OrgChart.action.collapse, a, i)
}, OrgChart.prototype.maximize = function(t, e, r, i) {
    var a = this,
        n = {
            id: t,
            options: {}
        };
    OrgChart.isNEU(n.id) && (n.id = this.roots[0].id, n.all = !0), n.options.horizontal = !1, n.options.vertical = !1, e && (n.options.horizontal = e), r && (n.options.vertical = r), this._draw(!1, OrgChart.action.maximize, n, (function() {
        a.ripple(t), i && i()
    }))
}, OrgChart.prototype.minimize = function(t, e) {
    var r = this,
        i = {
            id: t
        };
    OrgChart.isNEU(i.id) && (i.id = this.roots[0].id, i.all = !0), this._draw(!1, OrgChart.action.minimize, i, (function() {
        r.ripple(t), e && e()
    }))
}, OrgChart.prototype._expCollHandler = function(t) {
    this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide(), this.nodeCircleMenuUI.hide();
    var e = this.getNode(t),
        r = this.getCollapsedIds(e);
    if (r.length) {
        if (!1 === OrgChart.events.publish("expcollclick", [this, !1, t, r])) return !1;
        this.expand(t, r, !1)
    } else {
        if (!1 === OrgChart.events.publish("expcollclick", [this, !0, t, e.childrenIds])) return !1;
        this.collapse(t, e.childrenIds, !1)
    }
}, OrgChart.prototype._upHandler = function(t) {
    this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide(), this.nodeCircleMenuUI.hide();
    var e = this._upHandlerCreateArgs(t);
    if (!1 === OrgChart.events.publish("up-click", [this, e])) return !1;
    this.changeRoots(e.id, e.roots, !1)
}, OrgChart.prototype._upHandlerCreateArgs = function(t) {
    var e, r = this.getNode(t),
        i = Object.assign([], this.config.roots),
        a = this.getNode(r.pid);
    if (a && (e = a), e) {
        if (Array.isArray(i)) {
            var n = i.indexOf(r.id); - 1 != n && i.splice(n, 1)
        } else i = [];
        i.push(e.id)
    }
    return {
        id: r.id,
        roots: i
    }
}, String.prototype.replaceAll || (String.prototype.replaceAll = function(t, e) {
    return this.replace(new RegExp(t, "g"), e)
}), String.prototype.splice = function(t, e, r) {
    return this.slice(0, t) + r + this.slice(t + Math.abs(e))
}, String.prototype.insert = function(t, e) {
    return t > 0 ? this.substring(0, t) + e + this.substr(t) : e + this
}, Array.prototype.unique || (Array.prototype.unique = function() {
    for (var t = this.concat(), e = 0; e < t.length; ++e)
        for (var r = e + 1; r < t.length; ++r) t[e] === t[r] && t.splice(r--, 1);
    return t
}), Object.defineProperty(Array.prototype, "has", {
    value: function(t) {
        for (var e = 0; e < this.length; e++)
            if (this[e] == t) return !0;
        return !1
    },
    writable: !0,
    configurable: !0,
    enumerable: !1
}), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
    value: function(t, e) {
        "use strict";
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
        for (var r = Object(t), i = 1; i < arguments.length; i++) {
            var a = arguments[i];
            if (null != a)
                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (r[n] = a[n])
        }
        return r
    },
    writable: !0,
    configurable: !0
}), "function" != typeof String.prototype.endsWith && (String.prototype.endsWith = function(t) {
    return -1 !== this.indexOf(t, this.length - t.length)
}), OrgChart.prototype._globalMouseDownHandler = function(t, e) {
    var r = {
        move: "mousemove",
        up: "mouseup",
        leave: "mouseleave"
    };
    if (-1 != e.type.indexOf("touch") && (1 == e.touches.length ? this._touch = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        } : this._touch = null, r = {
            move: "touchmove",
            up: "touchend",
            touchstart: "touchstart"
        }), t == e.target) return e.stopPropagation(), e.preventDefault(), void this._mouseDownHandler(t, e, r);
    if (this.config.nodeMouseClick == OrgChart.action.pan) {
        for (var i = e.target; i != t && !i.hasAttribute(OrgChart.attr.control_expcoll_id) && !i.hasAttribute(OrgChart.attr.control_up_id);) i = i.parentNode;
        if (!i.hasAttribute(OrgChart.attr.control_expcoll_id) && !i.hasAttribute(OrgChart.attr.control_up_id)) return e.stopPropagation(), e.preventDefault(), void this._mouseDownHandler(t, e, r)
    }
    for (var a = e.target; a != t;) {
        if (a.hasAttribute(OrgChart.attr.node_id)) return void this._nodeMouseDownHandler(a, e, r);
        if (a.hasAttribute(OrgChart.attr.control_node_circle_menu_name)) return e.stopPropagation(), e.preventDefault(), void this._nodeCircleNodeMenuItemMouseDownHandler(a, e, r);
        a = a.parentNode
    }
}, OrgChart.prototype._globalClickHandler = function(t, e) {
    if (-1 != e.type.indexOf("touch") && this._touch && 1 == e.changedTouches.length) {
        if (e.changedTouches.length) {
            var r = {
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY
                },
                i = OrgChart.t(this.config.template, !1, this.getScale()).size,
                a = this.getScale(),
                n = Math.abs(r.x - this._touch.x) / a,
                o = Math.abs(r.y - this._touch.y) / a;
            if (this._touch = null, n > i[0] / 10) return;
            if (o > i[1] / 10) return
        }
    } else if (-1 != e.type.indexOf("touch") && null == this._touch) return;
    for (var l = e.target; l != t;) {
        if (l.hasAttribute(OrgChart.attr.control_expcoll_id)) {
            var s = l.getAttribute(OrgChart.attr.control_expcoll_id),
                h = this.getNode(s);
            return void this._expCollHandler(h.id)
        }
        if (l.hasAttribute(OrgChart.attr.node_id)) {
            s = l.getAttribute(OrgChart.attr.node_id), h = this.getNode(s);
            return void this._nodeClickHandler(h.id, e)
        }
        if (l.hasAttribute(OrgChart.attr.control_node_menu_id)) {
            e.stopPropagation(), e.preventDefault();
            s = l.getAttribute(OrgChart.attr.control_node_menu_id), h = this.getNode(s);
            return void this._nodeMenuClickHandler(h.id, l, e)
        }
        if (l.hasAttribute(OrgChart.attr.control_node_circle_menu_id)) {
            e.stopPropagation(), e.preventDefault();
            s = l.getAttribute(OrgChart.attr.control_node_circle_menu_id);
            return void this._nodeCircleMenuClickHandler(s)
        }
        if (l.hasAttribute(OrgChart.attr.control_node_circle_menu_name)) return e.stopPropagation(), e.preventDefault(), void this._nodeCircleMenuItemClickHandler(l, e);
        if (l.hasAttribute(OrgChart.attr.control_add)) return void this._lonelyButtonHandler();
        if (l.hasAttribute(OrgChart.attr.control_up_id)) {
            s = l.getAttribute(OrgChart.attr.control_up_id);
            return e.stopPropagation(), e.preventDefault(), void this._upHandler(s)
        }
        if (l.hasAttribute(OrgChart.attr.c_link_from)) return void OrgChart.events.publish("clink-click", [this, {
            from: l.getAttribute(OrgChart.attr.c_link_from),
            to: l.getAttribute(OrgChart.attr.c_link_to),
            event: e
        }]);
        if (l.hasAttribute(OrgChart.attr.s_link_from)) return void OrgChart.events.publish("slink-click", [this, {
            from: l.getAttribute(OrgChart.attr.s_link_from),
            to: l.getAttribute(OrgChart.attr.s_link_to),
            event: e
        }]);
        l = l.parentNode
    }
}, OrgChart.prototype._globalContextHandler = function(t, e) {
    for (var r = e.target; r != t;) {
        if (r.hasAttribute(OrgChart.attr.node_id)) {
            var i = r.getAttribute(OrgChart.attr.node_id),
                a = this.getNode(i);
            return void this._nodeContextHandler(a.id, e)
        }
        r = r.parentNode
    }
}, OrgChart.prototype._nodeContextHandler = function(t, e) {
    e.preventDefault(), this.searchUI.hide(), this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide(), this.nodeCircleMenuUI.hide();
    var r = this.get(t),
        i = null;
    if (null != r && Array.isArray(r.tags))
        for (var a = 0; a < r.tags.length; a++) {
            var n = r.tags[a];
            this.config.tags[n] && this.config.tags[n].nodeContextMenu && (i = this.config.tags[n].nodeContextMenu)
        }
    this.nodeContextMenuUI.show(e.pageX, e.pageY, t, null, i)
}, OrgChart.prototype._globalDbClickHandler = function(t, e) {
    for (var r = e.target; r != t;) {
        if (r.hasAttribute(OrgChart.attr.node_id)) {
            var i = r.getAttribute(OrgChart.attr.node_id),
                a = this.getNode(i);
            return void this._nodeDbClickHandler(a.id, e)
        }
        r = r.parentNode
    }
}, OrgChart.prototype._mouseScrollHandler = function(t, e) {
    if (this.config.mouseScrool != OrgChart.action.ctrlZoom || e.ctrlKey) {
        var r = this,
            i = !1,
            a = this.config.zoom.speed,
            n = this.config.zoom.smooth,
            o = 0,
            l = this.getScale(),
            s = OrgChart._centerPointInPercent(r.getSvg(), e.pageX, e.pageY),
            h = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                setTimeout(t, 20)
            };
        e.preventDefault();
        var d = e.delta || e.wheelDelta;
        void 0 === d && (d = -e.detail), d = Math.max(-1, Math.min(1, d)), o += -d * a, i || function t() {
            i = !0;
            var e = (o - l) / n;
            e > 0 ? e++ : e--, l += e, r.zoom(1 - e / 12 / 50, s), parseInt(l) == parseInt(o) ? i = !1 : h(t)
        }()
    }
}, OrgChart.prototype._nodeCircleNodeMenuItemMouseDownHandler = function(t, e, r) {
    var i = t.parentNode.getAttribute(OrgChart.attr.control_node_circle_menu_wrraper_id),
        a = t.getAttribute(OrgChart.attr.control_node_circle_menu_name),
        n = this.nodeCircleMenuUI._menu[a];
    if (n.draggable) {
        var o = this,
            l = OrgChart._getClientXY(e),
            s = this.getNode(i);
        t._dragEventFired = !1;
        var h = o.getScale(),
            d = null,
            c = null;
        this._gragStartedId = i, document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = "none";
        var g = this.getSvg(),
            p = {
                x: l.x,
                y: l.y
            },
            u = t.cloneNode(!0);
        g.insertBefore(u, g.firstChild);
        var f = OrgChart._getTransform(u),
            m = f[4],
            C = f[5],
            O = function(t) {
                for (; t && !t.hasAttribute(OrgChart.attr.control_node_circle_menu_wrraper_id);) t = t.parentNode;
                if (t) {
                    var e = OrgChart._getTransform(t);
                    return {
                        x: e[4],
                        y: e[5]
                    }
                }
                console.error("cannot find parent" + OrgChart.attr.control_node_circle_menu_wrraper_id)
            }(t);
        u.setAttribute("transform", "matrix(1,0,0,1," + (m + O.x) + "," + (C + O.y) + ")"), u.style.opacity = .7;
        var v = function(t, e) {
                if (null != t) {
                    e.classList.remove("drag-over");
                    for (var r = OrgChart.getStParentNodes(o.getNode(d)), i = 0; i < r.length; i++) {
                        var a = o.getNodeElement(r[i].id);
                        a && (a.style.opacity = 1)
                    }
                }
            },
            b = function(e) {
                if (p) {
                    var r = OrgChart._getClientXY(e),
                        i = e.target;
                    OrgChart.isMobile() && (i = document.elementFromPoint(r.x, r.y)), r.x += O.x * h, r.y += O.y * h;
                    var l = OrgChart._getOffsetXY(o.element, e),
                        s = {
                            left: o.width() - (l.x + o.config.padding) < 0,
                            right: l.x - o.config.padding < 0,
                            down: o.height() - (l.y + o.config.padding) < 0,
                            up: l.y - o.config.padding < 0
                        };
                    if (s.left || s.right || s.up || s.down) {
                        g.classList && (g.classList.remove("cursor-grab"), g.classList.add("cursor-move"), g.classList.remove("cursor-nodrop"), g.classList.remove("cursor-copy"));
                        var b = f[4],
                            y = f[5],
                            w = p.x,
                            _ = p.y,
                            k = r.x,
                            S = r.y;
                        o.startMove(s, (function(t) {
                            f[4] = b + t.x, f[5] = y + t.y, p.x = w - t.xWithoutScale, p.y = _ - t.yWithoutScale, r.x = k - t.xWithoutScale, r.y = S - t.yWithoutScale, u.setAttribute("transform", "matrix(" + f.toString() + ")")
                        }))
                    } else {
                        for (o.stopMove(), g.classList && (g.classList.add("cursor-grab"), g.classList.remove("cursor-move"), g.classList.remove("cursor-nodrop"), g.classList.remove("cursor-copy")), v(d, c), d = null, c = null; null != i && i != g;) {
                            if (i.hasAttribute && i.hasAttribute(OrgChart.attr.node_id)) {
                                var I = i.getAttribute(OrgChart.attr.node_id);
                                d = I, c = i;
                                break
                            }
                            i = i.parentNode
                        }
                        if (null != d) {
                            c.classList.add("drag-over");
                            for (var A = o.getNode(d), L = OrgChart.getStParentNodes(A), N = 0; N < L.length; N++) {
                                var M = o.getNodeElement(L[N].id);
                                M && (M.style.opacity = .1)
                            }
                            g.classList.remove("cursor-grab"), g.classList.remove("cursor-move"), g.classList.add("cursor-copy"), g.classList.remove("cursor-nodrop")
                        }
                        var E = (r.x - p.x) / h,
                            T = (r.y - p.y) / h;
                        if (f[4] = m + E, f[5] = C + T, !t._dragEventFired && (Math.abs(r.x - p.x) > OrgChart.FIRE_DRAG_NOT_CLICK_IF_MOVE || Math.abs(r.y - p.y) > OrgChart.FIRE_DRAG_NOT_CLICK_IF_MOVE)) !1 === OrgChart.events.publish("drag", [o.nodeCircleMenuUI, {
                            from: I,
                            menuItem: n,
                            menuItemName: a
                        }]) && x(), t._dragEventFired = !0;
                        u.setAttribute("transform", "matrix(" + f.toString() + ")")
                    }
                }
            },
            x = function(e) {
                if (o.stopMove(), g.classList && (g.classList.remove("cursor-grab"), g.classList.remove("cursor-move"), g.classList.remove("cursor-nodrop"), g.classList.remove("cursor-copy")), g.removeEventListener(r.move, b), g.removeEventListener(r.up, x), r.leave && g.removeEventListener(r.leave, x), s.id == d || null == d) return g.removeChild(u), o._gragStartedId = null, void(t._dragEventFired && OrgChart.events.publish("drop", [o.nodeCircleMenuUI, {
                    from: s.id,
                    menuItemName: a,
                    menuItem: n
                }]));
                var i = o.getNode(d);
                OrgChart.events.publish("drop", [o.nodeCircleMenuUI, {
                    from: s.id,
                    to: i.id,
                    menuItem: n,
                    menuItemName: a
                }]), v(d, c), g.removeChild(u), o._gragStartedId = null
            };
        g.addEventListener(r.move, b), g.addEventListener(r.up, x), r.leave && g.addEventListener(r.leave, x)
    }
}, OrgChart.prototype._nodeMouseDownHandler = function(t, e, r) {
    if (this.config.enableDragDrop) {
        var i = OrgChart._getClientXY(e),
            a = t.getAttribute(OrgChart.attr.node_id),
            n = this.getNode(a);
        t._dragEventFired = !1;
        var o = null,
            l = null;
        this._gragStartedId = a, document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = "none";
        var s = this,
            h = this.getSvg(),
            d = {
                x: i.x,
                y: i.y
            },
            c = OrgChart._getTransform(t),
            g = c[4],
            p = c[5],
            u = s.getScale(),
            f = t.cloneNode(!0);
        h.insertBefore(f, h.firstChild), f.style.opacity = .7;
        var m = function(t, e) {
                if (null != t) {
                    e.classList.remove("drag-over");
                    for (var r = s.getNode(o), i = OrgChart.getStParentNodes(r), a = 0; a < i.length; a++) {
                        var n = s.getNodeElement(i[a].id);
                        n && (n.style.opacity = 1)
                    }
                }
            },
            C = function(e) {
                if (d) {
                    var r = OrgChart._getClientXY(e),
                        i = e.target;
                    OrgChart.isMobile() && (i = document.elementFromPoint(r.x, r.y));
                    var a = OrgChart._getOffsetXY(s.element, e),
                        C = {
                            left: s.width() - (a.x + s.config.padding) < 0,
                            right: a.x - s.config.padding < 0,
                            down: s.height() - (a.y + s.config.padding) < 0,
                            up: a.y - s.config.padding < 0
                        };
                    if (C.left || C.right || C.up || C.down) {
                        h.classList && (h.classList.remove("cursor-grab"), h.classList.add("cursor-move"), h.classList.remove("cursor-nodrop"), h.classList.remove("cursor-copy"));
                        var v = c[4],
                            b = c[5],
                            x = d.x,
                            y = d.y,
                            w = r.x,
                            _ = r.y;
                        s.startMove(C, (function(t) {
                            c[4] = v + t.x, c[5] = b + t.y, d.x = x - t.xWithoutScale, d.y = y - t.yWithoutScale, r.x = w - t.xWithoutScale, r.y = _ - t.yWithoutScale, f.setAttribute("transform", "matrix(" + c.toString() + ")")
                        }))
                    } else {
                        if (s.stopMove(), h.classList && (h.classList.add("cursor-grab"), h.classList.remove("cursor-move"), h.classList.remove("cursor-nodrop"), h.classList.remove("cursor-copy")), m(o, l), o = null, l = null, s.config.enableDragDrop)
                            for (; null != i && i != h;) {
                                if (i.hasAttribute && i.hasAttribute(OrgChart.attr.node_id)) {
                                    var k = i.getAttribute(OrgChart.attr.node_id);
                                    if (s._gragStartedId && k != s._gragStartedId) {
                                        o = k, l = i;
                                        break
                                    }
                                }
                                i = i.parentNode
                            }
                        if (null != o) {
                            l.classList.add("drag-over");
                            for (var S = s.getNode(o), I = OrgChart.getStParentNodes(S), A = 0; A < I.length; A++) {
                                var L = s.getNodeElement(I[A].id);
                                L && (L.style.opacity = .1)
                            }!s._canUpdateLink(n.id, o) && h.classList ? (h.classList.remove("cursor-grab"), h.classList.remove("cursor-move"), h.classList.remove("cursor-copy"), h.classList.add("cursor-nodrop")) : h.classList && (h.classList.remove("cursor-grab"), h.classList.remove("cursor-move"), h.classList.add("cursor-copy"), h.classList.remove("cursor-nodrop"))
                        }
                        var N = (r.x - d.x) / u,
                            M = (r.y - d.y) / u;
                        if (c[4] = g + N, c[5] = p + M, !t._dragEventFired && (Math.abs(r.x - d.x) > OrgChart.FIRE_DRAG_NOT_CLICK_IF_MOVE || Math.abs(r.y - d.y) > OrgChart.FIRE_DRAG_NOT_CLICK_IF_MOVE)) !1 === OrgChart.events.publish("drag", [s, k]) && O(), t._dragEventFired = !0;
                        f.setAttribute("transform", "matrix(" + c.toString() + ")")
                    }
                }
            },
            O = function(e) {
                if (s.stopMove(), h.classList && (h.classList.remove("cursor-grab"), h.classList.remove("cursor-move"), h.classList.remove("cursor-nodrop"), h.classList.remove("cursor-copy")), h.removeEventListener(r.move, C), h.removeEventListener(r.up, O), r.leave && h.removeEventListener(r.leave, O), n.id == o || null == o) return h.removeChild(f), s._gragStartedId = null, void(t._dragEventFired && OrgChart.events.publish("drop", [s, n.id]));
                var i = s.getNode(o);
                if (!1 === OrgChart.events.publish("drop", [s, n.id, i.id])) return m(o, l), h.removeChild(f), void(s._gragStartedId = null);
                if (s._canUpdateLink(n.id, o)) {
                    var a = s.get(n.id);
                    a.pid = o, a.stpid = null, s.updateNode(a, null, !0)
                } else h.removeChild(f), m(o, l);
                s._gragStartedId = null
            };
        h.addEventListener(r.move, C), h.addEventListener(r.up, O), r.leave && h.addEventListener(r.leave, O)
    }
}, OrgChart.prototype._resizeHandler = function(t, e) {
    var r = this.getViewBox(),
        i = this.getSvg(),
        a = i.getAttribute("width"),
        n = i.getAttribute("height"),
        o = a / r[2],
        l = n / r[3],
        s = o > l ? l : o;
    i.setAttribute("width", this.width()), i.setAttribute("height", this.height()), r[2] = this.width() / s, r[3] = this.height() / s, this.setViewBox(r), this.xScrollUI.create(this.width()), this.yScrollUI.create(this.height()), this._draw(!1, OrgChart.action.resize)
}, OrgChart.prototype._nodeDbClickHandler = function(t, e) {
    if (!1 === OrgChart.events.publish("dbclick", [this, this.get(t)])) return !1;
    this._commonClickHandler(t, e, this.config.nodeMouseDbClick)
}, OrgChart.prototype._nodeClickHandler = function(t, e) {
    var r = this.getNodeElement(t);
    if (r && r._dragEventFired) r._dragEventFired = !1;
    else {
        if (!1 === OrgChart.events.publish("click", [this, {
                node: this.getNode(t),
                event: e
            }])) return !1;
        this._commonClickHandler(t, e, this.config.nodeMouseClick)
    }
}, OrgChart.prototype._nodeCircleMenuItemClickHandler = function(t, e) {
    var r = t.parentNode.getAttribute(OrgChart.attr.control_node_circle_menu_wrraper_id),
        i = t.getAttribute(OrgChart.attr.control_node_circle_menu_name),
        a = this.nodeCircleMenuUI._menu[i];
    OrgChart.events.publish("click", [this.nodeCircleMenuUI, {
        nodeId: r,
        menuItemName: i,
        menuItem: a,
        event: e
    }])
}, OrgChart.prototype._nodeCircleMenuClickHandler = function(t) {
    this.searchUI.hide(), this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide();
    var e = this.getNode(t),
        r = null;
    if (Array.isArray(e.tags))
        for (var i = 0; i < e.tags.length; i++) {
            var a = e.tags[i];
            this.config.tags[a] && this.config.tags[a].nodeCircleMenu && (r = this.config.tags[a].nodeCircleMenu)
        }
    this.nodeCircleMenuUI.show(t, r)
}, OrgChart.prototype._commonClickHandler = function(t, e, r) {
    if (this.searchUI.hide(), this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide(), this.nodeCircleMenuUI.hide(), r == OrgChart.action.expandCollapse && this.toggleExpandCollapse(t, e), r == OrgChart.action.edit) {
        var i = this.getNode(t);
        this.editUI.show(i.id), this.ripple(i.id, e.clientX, e.clientY)
    }
    if (r == OrgChart.action.details) {
        i = this.getNode(t);
        this.editUI.show(i.id, !0), this.ripple(i.id, e.clientX, e.clientY)
    }
}, OrgChart.prototype._menuHandlerMouseDownHandler = function(t, e) {
    e.stopPropagation(), e.preventDefault()
}, OrgChart.prototype._nodeMenuClickHandler = function(t, e, r) {
    this.searchUI.hide(), this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide(), this.nodeCircleMenuUI.hide();
    var i = this.getNode(t),
        a = null;
    if (Array.isArray(i.tags))
        for (var n = 0; n < i.tags.length; n++) {
            var o = i.tags[n];
            this.config.tags[o] && this.config.tags[o].nodeMenu && (a = this.config.tags[o].nodeMenu)
        }
    this.nodeMenuUI.showStickIn(e, t, null, a)
}, OrgChart.prototype._menuClickHandler = function(t, e) {
    e.stopPropagation(), e.preventDefault(), this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.show(t.offsetLeft, t.offsetTop)
}, OrgChart.prototype._lonelyButtonHandler = function() {
    var t = {
        id: this.generateId()
    };
    !1 !== this.addNode(t, null, !0) && this.center(t.id)
}, OrgChart.prototype.toggleExpandCollapse = function(t, e) {
    var r = this.getNode(t),
        i = this.getCollapsedIds(r);
    if (i.length) {
        if (!1 === OrgChart.events.publish("expcollclick", [this, !1, t, i])) return !1;
        this.expand(t, i, !1)
    } else {
        if (!1 === OrgChart.events.publish("expcollclick", [this, !0, t, r.childrenIds])) return !1;
        this.collapse(t, r.childrenIds, !1)
    }
    e && this.ripple(r.id, e.clientX, e.clientY)
}, OrgChart.prototype._move = function(t, e, r) {
    r[0] = e, r[1] = t, this.setViewBox(r), this.xScrollUI.setPosition(), this.yScrollUI.setPosition()
}, OrgChart.prototype.startMove = function(t, e) {
    if (t) {
        if (this._movePosition = t, !this._moveInterval) {
            var r = this,
                i = this.getViewBox().slice(0),
                a = this.getScale(),
                n = 0,
                o = 0;
            this._moveInterval = setInterval((function() {
                var t = {
                    x: 0,
                    y: 0,
                    xWithoutScale: 0,
                    yWithoutScale: 0
                };
                r._movePosition.left && (n++, t.x = n * OrgChart.MOVE_STEP / a, t.xWithoutScale = n * OrgChart.MOVE_STEP), r._movePosition.right && (n++, t.x = -n * OrgChart.MOVE_STEP / a, t.xWithoutScale = -n * OrgChart.MOVE_STEP), r._movePosition.up && (o++, t.y = -o * OrgChart.MOVE_STEP / a, t.yWithoutScale = -o * OrgChart.MOVE_STEP), r._movePosition.down && (o++, t.y = o * OrgChart.MOVE_STEP / a, t.yWithoutScale = o * OrgChart.MOVE_STEP), r.setViewBox([i[0] + t.x, i[1] + t.y, i[2], i[3]]), r.xScrollUI.setPosition(), r.yScrollUI.setPosition(), e && e(t)
            }), OrgChart.MOVE_INTERVAL)
        }
    } else console.error("movePosition parameter not defined")
}, OrgChart.prototype.stopMove = function() {
    this._moveInterval && (clearInterval(this._moveInterval), this._moveInterval = null, this._movePosition = null)
}, void 0 === OrgChart && (OrgChart = {}), OrgChart.node = function(t, e, r, i) {
    this.templateName = i, this.id = t, this.pid = e, this.children = [], this.childrenIds = [], this.parent = null, this.stpid = null, this.stParent = null, this.stChildren = [], this.stChildrenIds = [], this.tags = r, this.tags || (this.tags = [])
}, OrgChart.prototype._mouseDownHandler = function(t, e, r) {
    var i = this;
    this.editUI.hide(), this.searchUI.hide(), this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide(), this.nodeCircleMenuUI.hide();
    var a = this.getViewBox(),
        n = this.getScale(),
        o = OrgChart._getClientTouchesXY(e, 0),
        l = OrgChart._getClientTouchesXY(e, 1),
        s = {
            diffX: 0,
            diffY: 0,
            x0: o.x,
            y0: o.y,
            type: "pan",
            viewBoxLeft: a[0],
            viewBoxTop: a[1]
        };
    e.touches && e.touches.length > 1 && (s.type = "pinch", s.dist = Math.sqrt((o.x - l.x) * (o.x - l.x) + (o.y - l.y) * (o.y - l.y)));
    var h = this.getPointerElement();
    if ("pan" == s.type) {
        this._hideBeforeAnimation();
        var d = OrgChart._getOffsetXY(this.element, e),
            c = d.x / n + a[0] - 16 / n,
            g = d.y / n + a[1] - 16 / n;
        h.style.display = "inherit", h.setAttribute("transform", "matrix(0,0,0,0," + c + "," + g + ")"), OrgChart.anim(h, {
            transform: [0, 0, 0, 0, c, g],
            opacity: 0
        }, {
            transform: [1 / n, 0, 0, 1 / n, c, g],
            opacity: 1
        }, 300, OrgChart.anim.outBack)
    }
    var p = function(t) {
            var e = OrgChart._getClientTouchesXY(t, 0);
            if (s && "pan" == s.type) {
                i._hideBeforeAnimation(), s.diffX = e.x - s.x0, s.diffY = e.y - s.y0;
                var r = -s.diffY / n + s.viewBoxTop,
                    o = -s.diffX / n + s.viewBoxLeft;
                i._move(r, o, a)
            } else if (s && "pinch" == s.type) {
                var l = OrgChart._getClientTouchesXY(t, 1),
                    h = Math.sqrt((e.x - l.x) * (e.x - l.x) + (e.y - l.y) * (e.y - l.y)),
                    d = 1 + (h - s.dist) / (s.dist / 100) / 100;
                s.dist = h;
                var c = OrgChart._pinchMiddlePointInPercent(i.element, i.width(), i.height(), t);
                i.zoom(d, c)
            }
        },
        u = function() {
            "pan" == s.type && i.config.sticky ? setTimeout((function() {
                OrgChart._moveToBoundaryArea(t, i.getViewBox(), i.response.boundary, (function() {
                    i._draw(!0, OrgChart.action.pan)
                }))
            }), 0) : "pan" != s.type || i.config.sticky || i._draw(!0, OrgChart.action.pan), s = null, h.style.display = "none", t.removeEventListener(r.move, p), t.removeEventListener(r.up, u), r.leave && t.removeEventListener(r.leave, u), r.touchstart && t.removeEventListener(r.touchstart, u)
        };
    t.addEventListener(r.move, p), t.addEventListener(r.up, u), r.leave && t.addEventListener(r.leave, u), r.touchstart && t.addEventListener(r.touchstart, u)
}, OrgChart.searchUI = function() {}, OrgChart.searchUI.prototype.init = function(t) {
    this.obj = t;
    var e = this,
        r = document.createElement("div");
    r.classList.add("search"), r.style.right = this.obj.config.padding - 10 + "px", r.style.top = this.obj.config.padding - 10 + "px";
    var i = OrgChart.elements.textbox({}, {
        label: OrgChart.SEARCH_PLACEHOLDER
    }, "320px");
    r.innerHTML += i.html, this.searchTableWrapper = document.createElement("div"), r.appendChild(this.searchTableWrapper);
    var a = t.getSvg().nextSibling;
    this.obj.element.insertBefore(r, a), OrgChart.input.init(r), this.input = document.getElementById(i.id), this.input.addEventListener("keypress", (function(t) {
        "Enter" == t.key && t.preventDefault()
    })), this.input.addEventListener("keyup", (function(t) {
        "ArrowDown" == t.key ? (t.preventDefault(), n()) : "ArrowUp" == t.key ? (t.preventDefault(), t.stopPropagation(), o()) : "Enter" == t.key ? (t.preventDefault(), l()) : "Escape" == t.key ? (t.preventDefault(), e.hide()) : e._serverSearch(this.value)
    }));
    var n = function() {
            var t = e.obj.element.querySelectorAll("[data-search-item-id]"),
                r = e.obj.element.querySelector('[data-selected="yes"]');
            null == r && t.length > 0 ? t[0].setAttribute("data-selected", "yes") : t.length > 0 && r.nextSibling && r.nextSibling.setAttribute && (r.removeAttribute("data-selected"), r.nextSibling.setAttribute("data-selected", "yes"))
        },
        o = function() {
            var t = e.obj.element.querySelectorAll("[data-search-item-id]"),
                r = e.obj.element.querySelector('[data-selected="yes"]');
            null == r && t.length > 0 ? t[t.length - 1].setAttribute("data-selected", "yes") : t.length > 0 && r.previousSibling && r.previousSibling.setAttribute && (r.removeAttribute("data-selected"), r.previousSibling.setAttribute("data-selected", "yes"))
        },
        l = function() {
            var t = e.obj.element.querySelector('[data-selected="yes"]');
            if (t) {
                var r = t.getAttribute("data-search-item-id");
                0 != OrgChart.events.publish("searchclick", [e.obj, r]) && e.obj.center(r)
            }
        }
}, OrgChart.searchUI.prototype.hide = function() {
    this.searchTableWrapper && (this.searchTableWrapper.innerHTML = ""), this.input && (this.input.value = "", this.input.focus(), this.input.blur())
}, OrgChart.searchUI.prototype.find = function(t) {
    this.input && (this.input.value = t, this._serverSearch(t), this.input.focus())
}, OrgChart.searchUI.prototype._serverSearch = function(t) {
    var e = this,
        r = OrgChart._search.search(this.obj.config.nodes, t, this.obj.config.searchFields, this.obj.config.searchFields, this.obj.config.searchDisplayField, this.obj.config.searchFieldsWeight),
        i = OrgChart._getFistImgField(this.obj.config),
        a = `<table border="0" cellspacing="0" cellpadding="0">\n                    <tbody>\n                        ${function(){for(var t="",a=0;a<r.length&&!(a>=OrgChart.SEARCH_RESULT_LIMIT);a++){var n=r[a],o="";if(i){var l=e.obj._get(n.id);"function"==typeof i?o=i(e.obj,e.obj.getNode(n.id),l):l[i]&&(o=l[i])}var s="",h="";e.obj.config.searchDisplayField==n.__searchField?s=n.__searchMarks:e.obj.config.searchDisplayField?(s=n[e.obj.config.searchDisplayField],OrgChart.isNEU(s)&&(s=""),h=n.__searchMarks):s=n.__searchMarks,t+=OrgChart.searchUI.createItem(o,n.id,s,h)}return t}()}  \n                    </tbody>\n                </table>`;
    this.searchTableWrapper.innerHTML = a;
    for (var n = this.obj.element.querySelectorAll("[data-search-item-id]"), o = 0; o < n.length; o++) n[o].addEventListener("click", (function() {
        if (!1 !== OrgChart.events.publish("searchclick", [e.obj, this.getAttribute("data-search-item-id")])) {
            e.obj.center(this.getAttribute("data-search-item-id"));
            var t = e.obj.element.querySelector('[data-selected="yes"]');
            t && t.removeAttribute("data-selected"), this.setAttribute("data-selected", "yes"), e.input.focus()
        }
    }))
}, OrgChart.searchUI.createItem = function(t, e, r, i) {
    return r && (r = "<b>" + r + "</b>"), `<tr data-search-item-id="${e}">\n                <td class="search-image-td">\n                    ${t=t?`<div class="search-photo" style="background-image: url(${t})"></div>`:`<div class="search-photo">${OrgChart.icon.user(32,32,"#aeaeae")}</div>`}\n                </td>\n                <td class="search-text-td">${r} <br/>${i}</td>\n            </tr>`
}, void 0 === OrgChart && (OrgChart = {}), OrgChart.manager = function(t, e) {
    this.config = t, this.layoutConfigs = e, this.visibleNodeIds = [], this.viewBox = null, this.action = null, this.actionParams = null, this.nodes = {}, this.oldNodes = {}, this.maxX = null, this.maxY = null, this.minX = null, this.minY = null, this.bordersByRootIdAndLevel = null, this.roots = null, this.state = null, this.vbIsInitializedFromState = !1, this.rootList = []
}, OrgChart.manager.prototype.read = function(t, e, r, i, a, n, o, l) {
    var s = this;
    OrgChart.state._get(this.config.state, e, r, (function(h) {
        s.state = h, s.action = a, s.actionParams = n, a != OrgChart.action.init || !s.state || n && n.method && "fit" == n.method ? (s.viewBox = i, s.vbIsInitializedFromState = !1) : (s.viewBox = s.state.vb, s.vbIsInitializedFromState = !0);
        var d = s.maxX,
            c = s.maxY,
            g = s.minX,
            p = s.minY,
            u = s.bordersByRootIdAndLevel,
            f = s.roots,
            m = s.nodes;
        if (t) {
            var C = OrgChart.manager._getResponse(e, r, s.visibleNodeIds, s.config, d, c, g, p, s.viewBox, f, s.action, s.actionParams, m, s.oldNodes, s.vbIsInitializedFromState);
            a != OrgChart.action.exporting && (s.maxX = d, s.maxY = c, s.minX = g, s.minY = p, s.roots = f, s.nodes = m, s.visibleNodeIds = C.visibleNodeIds), C.bordersByRootIdAndLevel = u, C.roots = f, C.adjustify = {
                x: 0,
                y: 0
            }, s.state && (C.adjustify = s.state.adjustify), o(C)
        } else s.oldNodes = m || null, s._read((function(t) {
            d = t.maxX, c = t.maxY, g = t.minX, p = t.minY, u = t.bordersByRootIdAndLevel, f = t.roots, m = t.nodes;
            var i = OrgChart.manager._getResponse(e, r, s.visibleNodeIds, s.config, d, c, g, p, s.viewBox, f, s.action, s.actionParams, m, s.oldNodes, s.vbIsInitializedFromState);
            i.notif = t.limit, i.roots = f, i.bordersByRootIdAndLevel = u, i.adjustify = t.adjustify, a != OrgChart.action.exporting && (s.maxX = d, s.maxY = c, s.minX = g, s.minY = p, s.roots = f, s.nodes = m, s.visibleNodeIds = i.visibleNodeIds, s.bordersByRootIdAndLevel = u, s.rootList = t.rootList), o(i)
        }), l)
    }))
}, OrgChart.manager.prototype._read = function(t, e) {
    var r = this,
        i = OrgChart.manager._createNodes(r.config, r.layoutConfigs, r.action, r.actionParams, r.oldNodes, r.state);
    e(i);
    var a = i.nodes,
        n = i.roots,
        o = OrgChart.remote;
    null == o && (o = OrgChart.local), o._setPositions(n, r.layoutConfigs, (function(e) {
        var o = OrgChart.manager._doNotChangePositionOfClickedNodeIfAny(n, a, r.action, r.actionParams, r.oldNodes, r.config.orientation);
        r.state && r.action == OrgChart.action.init && (o = r.state.adjustify);
        for (var l = {
                minX: null,
                minY: null,
                maxX: null,
                maxY: null
            }, s = {}, h = 0; h < n.length; h++) OrgChart.manager._setMinMaxXYAdjustifyIterate(n[h], n[h], l, 0, s, o, r.config.orientation);
        t({
            minX: l.minX,
            minY: l.minY,
            maxX: l.maxX,
            maxY: l.maxY,
            bordersByRootIdAndLevel: s,
            nodes: a,
            roots: n,
            rootList: i.rootList,
            limit: e,
            adjustify: o
        })
    }), a)
}, void 0 === OrgChart && (OrgChart = {}), OrgChart.manager._initDinamicNode = function(t, e, r) {
    e && (t.lcn = e), r && (t.isAssistant = !0);
    var i = OrgChart.t(t.templateName);
    t.w = i && i.size ? i.size[0] : 0, t.h = i && i.size ? i.size[1] : 0, t.isSplit = "split" == t.templateName
}, OrgChart.manager._setCollpasedProperty = function(t, e, r, i, a, n, o) {
    null == t.collapsed && e.collapse && e.collapse.allChildren ? t.collapsed = !0 : null == t.collapsed && (t.collapsed = !1), a == OrgChart.action.expand && -1 != r.ids.indexOf(t.id) && (t.collapsed = !1), a == OrgChart.action.collapse && (r.expandIds || r.collapseIds) ? r.expandIds && -1 != r.expandIds.indexOf(t.id) ? t.collapsed = !1 : r.collapseIds && -1 != r.collapseIds.indexOf(t.id) && (t.collapsed = !0) : a == OrgChart.action.collapse && -1 != r.ids.indexOf(t.id) && (t.collapsed = !0), a == OrgChart.action.expand && "all" == r.ids && (t.collapsed = !1), a == OrgChart.action.exporting && r.expandChildren && (t.collapsed = !1), a == OrgChart.action.init && null != o ? t.collapsed = !o.exp.has(t.id) : a == OrgChart.action.init ? t.collapsed = e.collapse && n >= e.collapse.level - 1 && -1 == i.indexOf(t.id) : a != OrgChart.action.centerNode && a != OrgChart.action.insert && a != OrgChart.action.expand && a != OrgChart.action.collapse || i.has(t.id) && (t.collapsed = !1)
}, OrgChart.manager._initNode = function(t, e, r, i, a, n, o, l, s, h, d) {
    var c = n[r || "base"];
    null == t.parent && OrgChart.manager._setCollpasedProperty(t, c, s, l, a, i - 1, d);
    for (var g = 0; g < t.childrenIds.length; g++) {
        var p = e[t.childrenIds[g]];
        if (OrgChart.manager._setCollpasedProperty(p, c, s, l, a, i, d), !p.collapsed) {
            if (p.parent = t, null != p.ppid) {
                var u = e[p.ppid];
                u && (p.parentPartner = u)
            }(-1 != p.tags.indexOf("left-partner") || -1 != p.tags.indexOf("right-partner") || -1 != p.tags.indexOf("partner") || p.parentPartner) && -1 == h.indexOf(t.id) && h.push(t.id), t.children.push(p)
        }
    }
    if (t.min || a != OrgChart.action.minimize || (s.all || s.id == t.id) && (t.min = !0), !0 === t.min && a == OrgChart.action.maximize && (s.all || s.id == t.id) && (t.min = !1), a == OrgChart.action.init && null != d && (t.min = d.min.has(t.id)), !t.min)
        for (g = 0; g < t.stChildrenIds.length; g++) {
            (p = e[t.stChildrenIds[g]]).stParent = t, t.stChildren.push(p)
        }
    var f = OrgChart.t(t.templateName, t.min);
    t.w = f && f.size ? f.size[0] : 0, t.h = f && f.size ? f.size[1] : 0, t.padding = f && f.padding ? f.padding : [0, 0, 0, 0], null != i && (t.level = i), r && (t.lcn = r);
    var m = OrgChart._getSubLevels(t.tags, o.tags);
    m > 0 && (t.subLevels = m), -1 != t.tags.indexOf("assistant") && null != t.parent && (t.isAssistant = !0), OrgChart.events.publish("node-created", [t])
}, OrgChart.manager._iterate = function(t, e, r, i, a, n, o, l, s, h, d, c, g, p, u, f) {
    if (OrgChart.manager._initNode(e, r, s, i, c, h, d, g, p, u, f), e.isAssistant && (n[e.pid] || (n[e.pid] = []), n[e.pid].push(e.id)), e.subLevels > 0 && o.push(e.id), OrgChart.MIXED_LAYOUT_FOR_NODES_WITH_COLLAPSED_CHILDREN && !e.isAssistant && e.parent) {
        if (e.parent && e.parent.children.length && e.parent.children[e.parent.children.length - 1] == e) {
            for (var m = [], C = 0, O = 0, v = 0; v < e.parent.children.length; v++) {
                -1 == (b = e.parent.children[v]).tags.indexOf("partner") && -1 == b.tags.indexOf("left-partner") && -1 == b.tags.indexOf("right-partner") && -1 == b.tags.indexOf("assistant") && 0 == b.children.length ? m.push(b.id) : -1 != b.tags.indexOf("assistant") ? C++ : -1 == b.tags.indexOf("partner") && -1 == b.tags.indexOf("left-partner") && -1 == b.tags.indexOf("right-partner") || O++
            }(OrgChart.MIXED_LAYOUT_ALL_NODES && m.length > 1 && m.length == e.parent.children.length - C - O || !OrgChart.MIXED_LAYOUT_ALL_NODES && m.length > 1) && (l[e.pid] = m)
        }
    } else if (!e.isAssistant && 0 == e.childrenIds.length && e.parent && !l[e.pid]) {
        for (m = [], C = 0, O = 0, v = 0; v < e.parent.children.length; v++) {
            var b; - 1 == (b = e.parent.children[v]).tags.indexOf("partner") && -1 == b.tags.indexOf("left-partner") && -1 == b.tags.indexOf("right-partner") && -1 == b.tags.indexOf("assistant") && 0 == b.childrenIds.length ? m.push(b.id) : -1 != b.tags.indexOf("assistant") ? C++ : -1 == b.tags.indexOf("partner") && -1 == b.tags.indexOf("left-partner") && -1 == b.tags.indexOf("right-partner") || O++
        }(OrgChart.MIXED_LAYOUT_ALL_NODES && m.length > 1 && m.length == e.parent.childrenIds.length - C - O || !OrgChart.MIXED_LAYOUT_ALL_NODES && m.length > 1) && (l[e.pid] = m)
    }
    e.stChildren.length && (t.stContainerNodes || (t.stContainerNodes = []), t.stContainerNodes.push(e));
    for (var x = 0; x < e.stChildren.length; x++) {
        var y = "";
        for (v = 0; v < e.tags.length; v++)
            if (h[e.tags[v]]) {
                y = e.tags[v];
                break
            } a.push(e.stChildren[x].id), OrgChart.manager._iterate(t, e.stChildren[x], r, 0, a, n, o, l, y, h, d, c, g, p, u, f)
    }
    i++;
    for (x = 0; x < e.children.length; x++) OrgChart.manager._iterate(t, e.children[x], r, i, a, n, o, l, s, h, d, c, g, p, u, f)
}, OrgChart.manager.__createNodes = function(t, e, r, i, a, n, o) {
    for (var l = r.nodes, s = [], h = 0; h < l.length; h++) {
        var d, c = l[h];
        d = OrgChart.STRING_TAGS ? c.tags ? c.tags.split(",") : [] : Array.isArray(c.tags) ? c.tags.slice(0) : [];
        var g = OrgChart._getTemplate(d, r.tags, r.template),
            p = new OrgChart.node(c.id, c.pid, d, g);
        OrgChart.isNEU(c.ppid) || (p.ppid = c.ppid), OrgChart.isNEU(c.stpid) || (p.stpid = c.stpid), null != r.orderBy && (p.order = OrgChart.manager._getOrderFieldValue(c, r.orderBy)), t[c.id] = p, s.push(c.id)
    }
    null != r.orderBy && s.sort((function(e, i) {
        var a = t[e].order,
            n = t[i].order;
        return "number" == typeof a || "number" == typeof n ? (null == a && (a = -1), null == n && (n = -1), r.orderBy.desc ? n - a : a - n) : "string" == typeof a || "string" == typeof n ? (null == a && (a = ""), null == n && (n = ""), r.orderBy.desc ? n.localeCompare(a) : a.localeCompare(n)) : void 0
    }));
    for (h = 0; h < s.length; h++) {
        var u = s[h],
            f = (p = t[u], n ? n[u] : null),
            m = t[p.stpid],
            C = t[p.pid];
        if (m || (p.stpid = null), C || (p.pid = null), m) {
            var O = n ? n[m.id] : null;
            O && (m.min = O.min), m.stChildrenIds.push(p.id)
        } else C ? (f && (p.collapsed = f.collapsed, p.min = f.min), C.childrenIds.push(p.id)) : (f && (p.collapsed = f.collapsed, p.min = f.min), e.push(p), o.push(p.id));
        i == OrgChart.action.init && (p.min = OrgChart._getMin(p, r))
    }
}, OrgChart.manager._createNodes = function(t, e, r, i, a, n) {
    var o = {},
        l = [],
        s = [];
    if (OrgChart.manager.__createNodes(o, l, t, r, i, a, s), null != t.roots) {
        l = [];
        for (var h = 0; h < t.roots.length; h++) {
            var d = o[t.roots[h]];
            if (d && r == OrgChart.action.centerNode) {
                for (var c = d; null != c.pid || null != c.stpid;) c = null == c.pid && null != c.stpid ? o[c.stpid] : o[c.pid];
                for (var g = o[i.id]; null != g.pid || null != g.stpid;) g = null == g.pid && null != g.stpid ? o[g.stpid] : o[g.pid];
                c == g && (d = c)
            }
            if (d) {
                for (var p = !1, u = 0; u < l.length; u++)
                    if (l[u].id == d.id) {
                        p = !0;
                        break
                    } if (!p) {
                    if (!OrgChart.isNEU(d.pid))(z = (O = o[d.pid]).childrenIds.indexOf(d.id)) > -1 && O.childrenIds.splice(z, 1);
                    l.push(d)
                }
            }
        }
        t.roots = [];
        for (h = 0; h < l.length; h++) t.roots.push(l[h].id)
    }
    r == OrgChart.action.exporting && null != i.id && ((m = o[i.id]) && (m.pid = null, l = [m]));
    var f = [];
    if (r == OrgChart.action.init && t.expand && t.expand.nodes && null == n)
        for (h = 0; h < t.expand.nodes.length; h++) {
            var m = o[t.expand.nodes[h]];
            for (!0 === t.expand.allChildren && OrgChart.manager._addExpandedNodeIdsIterate(m, o, f); m;) f.push(m.id), null == m.pid && null != m.stpid ? (m = o[m.stpid]).min = !1 : m = o[m.pid]
        } else if (r == OrgChart.action.expand && i.ids && "all" != i.ids || r == OrgChart.action.collapse && i && i.expandIds) {
            var C;
            C = r == OrgChart.action.expand ? i.ids : i.expandIds;
            for (h = 0; h < C.length; h++)
                for (var O = o[(m = o[C[h]]).pid]; O;) f.push(O.id), null == O.pid && null != O.stpid ? (O = o[O.stpid]).min = !1 : O = o[O.pid]
        } else if (r == OrgChart.action.centerNode) {
        for (var v = o[i.id]; v;) {
            if (f.push(v.id), i.options.parentState === OrgChart.COLLAPSE_PARENT_NEIGHBORS && v)
                for (h = 0; h < v.childrenIds.length; h++) {
                    (U = o[v.childrenIds[h]]).collapsed = !0
                }
            null == v.pid && null != v.stpid ? (v = o[v.stpid]).min = !1 : v = o[v.pid]
        }
        v = o[i.id];
        if (i.options.childrenState === OrgChart.COLLAPSE_SUB_CHILDRENS)
            for (h = 0; h < v.childrenIds.length; h++) {
                (x = o[v.childrenIds[h]]).collapsed = !1;
                for (var b = 0; b < x.childrenIds.length; b++) {
                    o[x.childrenIds[b]].collapsed = !0
                }
            }
        if (i.options.parentState === OrgChart.COLLAPSE_PARENT_SUB_CHILDREN_EXCEPT_CLICKED)
            if (O = o[v.pid])
                for (h = 0; h < O.childrenIds.length; h++) {
                    var x;
                    if ((x = o[O.childrenIds[h]]) != v) {
                        x.collapsed = !1;
                        for (b = 0; b < x.childrenIds.length; b++) {
                            o[x.childrenIds[b]].collapsed = !0
                        }
                    }
                }
    } else if (r == OrgChart.action.insert)
        for (m = o[i.insertedNodeId]; m;) f.push(m.id), null == m.pid && null != m.stpid ? (m = o[m.stpid]).min = !1 : m = o[m.pid];
    var y = [],
        w = {},
        _ = [],
        k = {},
        S = [];
    for (h = 0; h < l.length; h++) OrgChart.manager._iterate(l[h], l[h], o, 0, y, w, _, k, "", e, t, r, f, i, S, n);
    for (h = l.length - 1; h >= 0; h--) l[h].collapsed && l.splice(h, 1);
    for (h = 0; h < S.length; h++) {
        m = o[S[h]];
        var I = [],
            A = [],
            L = [],
            N = {},
            M = 0,
            E = 0,
            T = 0,
            B = [],
            P = [];
        for (b = 0; b < m.children.length; b++) {
            (U = m.children[b]).isAssistant ? I.push(U.id) : -1 != U.tags.indexOf("right-partner") ? (U.isPartner = 1, U.children = [], A.push(U.id)) : -1 != U.tags.indexOf("left-partner") ? (U.isPartner = 2, U.children = [], L.push(U.id)) : -1 == U.tags.indexOf("partner") || M % 2 ? -1 != U.tags.indexOf("partner") && M % 2 ? (U.isPartner = 2, U.children = [], L.push(U.id), M++) : U.parentPartner ? (N[U.parentPartner.id] || (N[U.parentPartner.id] = []), N[U.parentPartner.id].push(U.id)) : I.push(U.id) : (U.isPartner = 1, U.children = [], A.push(U.id), M++)
        }
        m.children = [];
        for (b = 0; b < A.length; b++) {
            N[(U = o[A[b]]).id] ? m.children.push(U) : m.children.splice(0, 0, U)
        }
        for (b = 0; b < L.length; b++) {
            N[(U = o[L[b]]).id] ? m.children.push(U) : m.children.splice(0, 0, U)
        }
        for (b = L.length - 1; b >= 0; b--)
            if (N[L[b]])
                for (u = 0; u < N[L[b]].length; u++) m.children.push(o[N[L[b]][u]]), E++, -1 == P.indexOf(L[b]) && P.push(L[b]);
        for (b = 0; b < I.length; b++) {
            var U = o[I[b]];
            m.children.push(U)
        }
        for (b = 0; b < A.length; b++)
            if (N[A[b]])
                for (u = 0; u < N[A[b]].length; u++) m.children.push(o[N[A[b]][u]]), T++, -1 == B.indexOf(A[b]) && B.push(A[b]);
        m.partnerSeparation = Math.max(P.length, B.length) * t.partnerChildrenSplitSeparation + t.minPartnerSeparation, I.length || !E || T ? I.length || E || !T ? I.length || 1 != E || 1 != T ? I.length || E || T ? !I.length || E || T ? I.length && (E || T) ? m.hasPartners = 7 : m.hasPartners = 1 : m.hasPartners = 6 : m.hasPartners = 5 : m.hasPartners = 4 : m.hasPartners = 3 : m.hasPartners = 2
    }
    for (h = 0; h < _.length; h++) {
        if ((Z = e[(m = o[_[h]]).lcn ? m.lcn : "base"]).layout == OrgChart.normal || !k[m.pid])
            for (b = 0; b < m.subLevels; b++) {
                var z, F = new OrgChart.node(m.id + "_sub_level_index_" + b, m.pid, [], "subLevel");
                if (OrgChart.manager._initDinamicNode(F, m.lcn), O = m.parent)(z = O.children.indexOf(m)) > -1 && (O.children.splice(z, 1), O.children.splice(z, 0, F)), F.children.push(m), F.parent = O, m.parent = F, o[F.id] = F
            }
    }
    for (var H in w) {
        (O = o[H]).hasAssistants = !0;
        F = new OrgChart.node(O.id + "_split_assitant_0", O.id, ["assistant"], "split");
        OrgChart.manager._initDinamicNode(F, O.lcn, !0), o[F.id] = F;
        var j = [];
        for (b = O.children.length - 1; b >= 0; b--) {
            (U = O.children[b]).isAssistant ? (U.parent = null, O.children.splice(b, 1), j.splice(0, 0, U.id)) : U.isPartner || (U.parent && k[U.parent.id] && F && U.parent.id != F.id && (Object.defineProperty(k, F.id, Object.getOwnPropertyDescriptor(k, U.parent.id)), delete k[U.parent.id]), U.parent = F, F.children.unshift(U), O.children.splice(b, 1))
        }
        if (j.length % 2) {
            var R = o[j[j.length - 1]],
                D = new OrgChart.node(R.id + "_mirror", R.pid, [], "mirror");
            OrgChart.manager._initDinamicNode(D, R.lcn, !0), R._m = D.id, D.isAssistant = !0, D.w = R.w, D.h = R.h, o[D.id] = D, j.splice(j.length - 1, 0, D.id)
        }
        var Y = 1;
        for (b = j.length - 1; b >= 0; b--)
            if (b % 2 && b != j.length - 1) {
                var q = new OrgChart.node(O.id + "_split_assitant_" + Y, null, [], "split");
                OrgChart.manager._initDinamicNode(q, O.lcn, !0), o[q.id] = q, j.splice(b, 0, q.id), Y++
            } else b % 2 && j.splice(b, 0, F.id);
        for (b = 0; b < j.length; b += 3) {
            var X = null;
            X = 0 == b ? O : o[j[b - 2]];
            var V = o[j[b]],
                $ = o[j[b + 1]],
                W = o[j[b + 2]];
            V.parent = X, $.parent = X, W.parent = X, X.children.push(V), X.children.push($), X.children.push(W)
        }
    }
    var G = !1;
    for (var K in e) {
        if ((Z = e[K]).layout == OrgChart.mixed || Z.layout == OrgChart.tree || Z.layout == OrgChart.treeRightOffset || Z.layout == OrgChart.treeLeftOffset) {
            G = !0;
            break
        }
    }
    if (G) {
        var J = {
            nodes: o,
            config: t,
            action: r,
            actionParams: i
        };
        for (var H in k) {
            var Z;
            if ((Z = e[(O = o[H]).lcn ? O.lcn : "base"]).layout == OrgChart.mixed || Z.layout == OrgChart.tree || Z.layout == OrgChart.treeRightOffset || Z.layout == OrgChart.treeLeftOffset)
                if (J.pnode = O, J.layout = Z.layout, J.childrenIds = k[H], J.lastChildrenPidIds = k, OrgChart.events.publish("layout", [J]), J.layout == OrgChart.mixed) {
                    var Q = J.childrenIds;
                    for (h = Q.length - 1; h >= 0; h--) {
                        O = (U = o[Q[h]]).parent, U.layout = OrgChart.mixed;
                        for (b = O.children.length - 1; b >= 0; b--)
                            if (U.id == O.children[b].id) {
                                O.children.splice(b, 1);
                                break
                            } if (h > 0) {
                            var tt = o[Q[h - 1]];
                            U.parent = tt, U.layout = OrgChart.mixed, tt.children.push(U)
                        } else O.children.push(U)
                    }
                } else if (J.layout == OrgChart.tree || J.layout == OrgChart.treeRightOffset || J.layout == OrgChart.treeLeftOffset) {
                F = new OrgChart.node(O.id + "_split_0", O.id, [], "split");
                OrgChart.manager._initDinamicNode(F, O.lcn), o[F.id] = F, F.layout = OrgChart.tree;
                var et = [];
                for (h = J.childrenIds.length - 1; h >= 0; h--) {
                    for (U = o[J.childrenIds[h]], b = 0; b < O.children.length; b++) O.children[b].id == U.id && O.children.splice(b, 1);
                    if (U.parent = null, U.layout = OrgChart.tree, J.layout == OrgChart.treeRightOffset && et.splice(0, 0, U.id), J.layout == OrgChart.treeLeftOffset || J.layout == OrgChart.treeRightOffset) {
                        var rt = new OrgChart.node(U.id + "_mirror", null, [], "mirror");
                        OrgChart.manager._initDinamicNode(rt, U.lcn), rt.layout = OrgChart.tree, o[rt.id] = rt, et.splice(0, 0, rt.id)
                    }
                    J.layout != OrgChart.treeRightOffset && et.splice(0, 0, U.id)
                }
                for (Y = 1, b = et.length - 1; b >= 0; b--)
                    if (b % 2 && b != et.length - 1) {
                        q = new OrgChart.node(O.id + "_split_" + Y, null, [], "split");
                        OrgChart.manager._initDinamicNode(q, O.lcn), q.layout = OrgChart.tree, o[q.id] = q, et.splice(b, 0, q.id), Y++
                    } else b % 2 && et.splice(b, 0, F.id);
                for (b = 0; b < et.length; b += 3) {
                    X = null;
                    0 == b && (X = O);
                    V = o[et[b]], $ = o[et[b + 1]], W = o[et[b + 2]];
                    0 != b && (X = o[et[b - 3]]), 0 == b || $ || (X = o[et[b - 2]]), V.parent = X, X.children.push(V), $ && (0 != b && (X = o[et[b - 2]]), $.parent = X, X.children.push($)), W && (0 != b && (X = o[et[b - 1]]), W.parent = X, X.children.push(W))
                }
            }
        }
    }
    return {
        nodes: o,
        roots: l,
        rootList: s
    }
}, OrgChart.manager._getOrderFieldValue = function(t, e) {
    var r = e;
    return e.field && (r = e.field), t[r]
}, OrgChart.manager._getNodeWidth = function(t, e) {
    switch (e.orientation) {
        case OrgChart.orientation.top:
        case OrgChart.orientation.top_left:
        case OrgChart.orientation.bottom:
        case OrgChart.orientation.bottom_left:
            return t.w;
        case OrgChart.orientation.right:
        case OrgChart.orientation.right_top:
        case OrgChart.orientation.left:
        case OrgChart.orientation.left_top:
            return t.h
    }
    return 0
}, OrgChart.manager._isVisible = function(t, e, r, i) {
    if (null != t.x && null != t.y) {
        if (e.lazyLoading && i !== OrgChart.action.exporting) {
            function a(t, e) {
                var r = t.x,
                    i = t.y,
                    a = t.w,
                    n = t.h,
                    o = e[0] - OrgChart.LAZY_LOADING_FACTOR,
                    l = e[2] + OrgChart.LAZY_LOADING_FACTOR + e[0],
                    s = e[1] - OrgChart.LAZY_LOADING_FACTOR,
                    h = e[3] + OrgChart.LAZY_LOADING_FACTOR + e[1],
                    d = r + a > o && l > r;
                return d && (d = i + n > s && h > i), d
            }
            if (a(t, r)) return !0;
            for (var n = 0; n < t.children.length; n++)
                if (a(t.children[n], r)) return !0;
            return !1
        }
        return !0
    }
}, OrgChart.manager.getAllFields = function(t) {
    var e = [OrgChart.TAGS];
    for (var r in t.nodeBinding) e.push(t.nodeBinding[r]);
    for (r = 0; r < t.nodes.length; r++)
        for (var i in t.nodes[r]) i !== OrgChart.ID && i !== OrgChart.TAGS && i !== OrgChart.NODES && i !== OrgChart.PID && i !== OrgChart.STPID && (t.nodeBinding[i] || e.has(i) || e.push(i));
    return e
}, OrgChart.manager._getMostDeepChild = function(t) {
    if (t) {
        var e = t;
        return function t(r) {
            r.sl > e.sl && (e = r);
            for (var i = 0; i < r.children.length; i++) t(r.children[i])
        }(t), e
    }
}, OrgChart.manager._getResponse = function(t, e, r, i, a, n, o, l, s, h, d, c, g, p, u) {
    var f = h[0],
        m = [],
        C = {
            top: null,
            left: null,
            bottom: null,
            right: null,
            minX: null,
            maxX: null,
            minY: null,
            maxY: null
        },
        O = [
            [],
            [],
            []
        ],
        v = a - o + 2 * i.padding,
        b = n - l + 2 * i.padding,
        x = OrgChart.getScale(s, t, e, i.scaleInitial, i.scaleMax, i.scaleMin, v, b);
    if (C.top = l - i.padding, C.left = o - i.padding, C.bottom = n + i.padding - e / x, C.right = a + i.padding - t / x, C.maxX = a, C.minX = o, C.maxY = n, C.minY = l, 0 == h.length || null == s && !u && i.align == OrgChart.CENTER) {
        var y = Math.ceil(t / x),
            w = Math.ceil(e / x),
            _ = 0,
            k = 0;
        if (y - 2 * i.padding >= a - o) switch (_ = (a + o) / 2 - y / 2, i.orientation) {
            case OrgChart.orientation.right:
            case OrgChart.orientation.right_top:
                _ = (o - a) / 2 - y / 2
        } else switch (_ = f.x - y / 2 + OrgChart.manager._getNodeWidth(f, i) / 2, i.orientation) {
            case OrgChart.orientation.right:
            case OrgChart.orientation.right_top:
                (_ = -(y / 2 - (o - a) / 2)) < i.padding - y && (_ = i.padding - y);
                break;
            case OrgChart.orientation.left:
            case OrgChart.orientation.bottom_left:
            case OrgChart.orientation.top_left:
            case OrgChart.orientation.left_top:
                (_ = -(y / 2 - (a - o) / 2)) > -i.padding && (_ = -i.padding)
        }
        if (w - 2 * i.padding >= n - l) switch (k = (n + l) / 2 - w / 2, i.orientation) {
            case OrgChart.orientation.bottom:
            case OrgChart.orientation.bottom_left:
                k = (l - n) / 2 - w / 2
        } else switch ((k = -(w / 2 - (n - l) / 2)) > -i.padding && (k = -i.padding), i.orientation) {
            case OrgChart.orientation.bottom:
            case OrgChart.orientation.bottom_left:
                (k = -(w / 2 - (l - n) / 2)) < i.padding - w && (k = i.padding - w);
                break;
            case OrgChart.orientation.left:
            case OrgChart.orientation.right:
                k = f.y - w / 2 + OrgChart.manager._getNodeWidth(f, i) / 2
        }
        s = [_, k, y, w]
    } else if (null == s && !u && i.align == OrgChart.ORIENTATION) {
        y = Math.ceil(t / x), w = Math.ceil(e / x), _ = 0, k = 0;
        switch (i.orientation) {
            case OrgChart.orientation.top:
                _ = f.x - y / 2 + OrgChart.manager._getNodeWidth(f, i) / 2, k = -i.padding;
                break;
            case OrgChart.orientation.bottom:
                _ = f.x - y / 2 + OrgChart.manager._getNodeWidth(f, i) / 2, k = i.padding - w;
                break;
            case OrgChart.orientation.left:
                _ = -i.padding, k = f.y - w / 2 + OrgChart.manager._getNodeWidth(f, i) / 2;
                break;
            case OrgChart.orientation.right:
                _ = i.padding - y, k = f.y - w / 2 + OrgChart.manager._getNodeWidth(f, i) / 2;
                break;
            case OrgChart.orientation.top_left:
                _ = -i.padding, k = -i.padding;
                break;
            case OrgChart.orientation.right_top:
                _ = i.padding - y, k = -i.padding;
                break;
            case OrgChart.orientation.left_top:
                _ = -i.padding, k = -i.padding;
                break;
            case OrgChart.orientation.bottom_left:
                _ = -i.padding, k = i.padding - w
        }
        s = [_, k, y, w], i.sticky && (s[0] < C.left && s[0] < C.right && (s[0] = C.left > C.right ? C.right : C.left), s[0] > C.right && s[0] > C.left && (s[0] = C.left > C.right ? C.left : C.right), s[1] < C.top && s[1] < C.bottom && (s[1] = C.top > C.bottom ? C.bottom : C.top), s[1] > C.bottom && s[1] > C.top && (s[1] = C.top > C.bottom ? C.top : C.bottom))
    }
    if (d == OrgChart.action.centerNode || d == OrgChart.action.maximize) {
        var S = g[c.id];
        1 == c.options.horizontal && (s[0] = S.x + S.w / 2 - s[2] / 2), 1 == c.options.vertical && (s[1] = S.y + S.h / 2 - s[3] / 2), i.sticky && (s[0] < C.left && s[0] < C.right && (s[0] = C.left > C.right ? C.right : C.left), s[0] > C.right && s[0] > C.left && (s[0] = C.left > C.right ? C.left : C.right), s[1] < C.top && s[1] < C.bottom && (s[1] = C.top > C.bottom ? C.bottom : C.top), s[1] > C.bottom && s[1] > C.top && (s[1] = C.top > C.bottom ? C.top : C.bottom))
    }
    if (d == OrgChart.action.insert || d == OrgChart.action.expand || d == OrgChart.action.collapse || d == OrgChart.action.update || d == OrgChart.action.centerNode || d == OrgChart.action.maximize) {
        var I = null;
        if (d == OrgChart.action.insert && c && null != c.insertedNodeId && null != c.insertedNodeId) I = g[c.insertedNodeId];
        else if (d == OrgChart.action.update && c && null != c.visId && null != c.visId) I = g[c.visId];
        else if (d != OrgChart.action.expand && d != OrgChart.action.collapse && d != OrgChart.action.maximize || !c || null == c.id || null == c.id) {
            if (d == OrgChart.action.centerNode || d == OrgChart.action.maximize) {
                switch (i.orientation) {
                    case OrgChart.orientation.top:
                    case OrgChart.orientation.top_left:
                    case OrgChart.orientation.bottom:
                    case OrgChart.orientation.bottom_left:
                        c.options.vertical || (I = g[c.id]);
                        break;
                    case OrgChart.orientation.right:
                    case OrgChart.orientation.right_top:
                    case OrgChart.orientation.left:
                    case OrgChart.orientation.left_top:
                        c.options.horizontal || (I = g[c.id])
                }
                I && (I = OrgChart.manager._getMostDeepChild(I, g))
            }
        } else I = g[c.id], I = OrgChart.manager._getMostDeepChild(I, g);
        if (!OrgChart.FIXED_POSITION_ON_CLICK && I) switch (i.orientation) {
            case OrgChart.orientation.top:
            case OrgChart.orientation.top_left:
                var A = I.y + I.h - s[3] + i.padding;
                s[1] < A && (s[1] = A);
                break;
            case OrgChart.orientation.bottom:
            case OrgChart.orientation.bottom_left:
                A = I.y - i.padding;
                s[1] > A && (s[1] = A);
                break;
            case OrgChart.orientation.right:
            case OrgChart.orientation.right_top:
                A = I.x - i.padding;
                s[0] > A && (s[0] = A);
                break;
            case OrgChart.orientation.left:
            case OrgChart.orientation.left_top:
                A = I.x + I.w - s[2] + i.padding;
                s[0] < A && (s[0] = A)
        }
    }
    for (var L = 0; L < h.length; L++) OrgChart.manager._iterate2(h[L], g, i, s, d, c, m, p, r, O);
    return {
        animations: O,
        boundary: C,
        viewBox: s,
        visibleNodeIds: m,
        nodes: g,
        allFields: OrgChart.manager.getAllFields(i)
    }
}, OrgChart.manager._iterate2 = function(t, e, r, i, a, n, o, l, s, h) {
    if (OrgChart.manager._isVisible(t, r, i, a)) {
        o.push(t.id);
        var d = null;
        if ((a == OrgChart.action.expand || a == OrgChart.action.collapse || a == OrgChart.action.maximize) && l && l[t.id] && "expandCollapseToLevel" == n.method) {
            if (d = {
                    x: (u = l[t.id]).x,
                    y: u.y
                }, u) {
                d = {
                    x: u.x,
                    y: u.y
                };
                for (var c = t, g = null; null != c;) l[c.id] && l[c.id].collapsed && (g = c), c = c.parent;
                g && g.parent && (d = {
                    x: g.parent.x,
                    y: g.parent.y
                })
            }
            if (f = e[n.id]) {
                for (c = t.parent; null != c;) c = c.parent;
                c && (d = {
                    x: f.x + f.w / 2 - t.w / 2,
                    y: f.y + f.h / 2 - t.h / 2
                })
            }
        } else if ((a == OrgChart.action.expand || a == OrgChart.action.collapse) && l && l[t.id]) {
            if (d = {
                    x: (u = l[t.id]).x,
                    y: u.y
                }, "all" == n.ids && u) {
                d = {
                    x: u.x,
                    y: u.y
                };
                for (c = t, g = null; null != c;) l[c.id] && l[c.id].collapsed && (g = c), c = c.parent;
                g && g.parent && (d = {
                    x: g.parent.x,
                    y: g.parent.y
                })
            }
            if (f = e[n.id]) {
                for (c = t.parent; null != c && -1 == n.ids.indexOf(t.id) && -1 == n.ids.indexOf(c.id);) c = c.parent;
                c && (d = {
                    x: f.x + f.w / 2 - t.w / 2,
                    y: f.y + f.h / 2 - t.h / 2
                })
            }
        } else if (a == OrgChart.action.centerNode && l && l[t.id]) {
            if (null != (u = l[t.id]).x && null != u.y && (d = {
                    x: u.x,
                    y: u.y
                }), (p = e[n.id]) && p == t)(c = t.parent) && c.id == n.id && (d = {
                x: p.x + p.w / 2 - t.w / 2,
                y: p.y + p.h / 2 - t.h / 2
            })
        } else if (a == OrgChart.action.maximize && l && l[t.id]) {
            var p;
            if (null != (u = l[t.id]).x && null != u.y && (d = {
                    x: u.x,
                    y: u.y
                }), (p = e[n.id]) && p == t)(c = t.parent) && c.id == n.id && (d = {
                x: p.x + p.w / 2 - t.w / 2,
                y: p.y + p.h / 2 - t.h / 2
            })
        } else if (a == OrgChart.action.minimize && l && l[t.id]) {
            d = {
                x: (u = l[t.id]).x,
                y: u.y
            }
        } else if (a == OrgChart.action.insert && n && n.insertedNodeId == t.id && t.parent) d = {
            x: t.parent.x,
            y: t.parent.y
        };
        else if (a != OrgChart.action.update && a != OrgChart.action.insert || !l) a !== OrgChart.action.exporting && a !== OrgChart.action.init && -1 == s.indexOf(t.id) && (h[0].push(t.id), h[1].push({
            opacity: 0
        }), h[2].push({
            opacity: 1
        }));
        else {
            var u, f;
            if ((!(u = l[t.id]) || OrgChart.isNEU(u.x) && OrgChart.isNEU(u.y)) && n) {
                if (f = e[n.id]) {
                    for (c = f; c && c.id == t.id;) c = c.parent;
                    c && (d = {
                        x: f.x,
                        y: f.y
                    })
                }
            } else u && (d = {
                x: u.x,
                y: u.y
            })
        }
        null != d && null != d.x && null != d.y && (d.x == t.x && d.y == t.y || (h[0].push(t.id), h[1].push({
            transform: [1, 0, 0, 1, d.x, d.y]
        }), h[2].push({
            transform: [1, 0, 0, 1, t.x, t.y]
        })))
    }
    for (var m = 0; m < t.stChildren.length; m++) OrgChart.manager._iterate2(t.stChildren[m], e, r, i, a, n, o, l, s, h);
    for (m = 0; m < t.children.length; m++) OrgChart.manager._iterate2(t.children[m], e, r, i, a, n, o, l, s, h)
}, OrgChart.manager._addExpandedNodeIdsIterate = function(t, e, r) {
    for (var i = 0; i < t.childrenIds.length; i++) r.push(t.childrenIds[i]), OrgChart.manager._addExpandedNodeIdsIterate(e[t.childrenIds[i]], e, r)
}, OrgChart.manager._setMinMaxXYAdjustifyIterate = function(t, e, r, i, a, n, o) {
    t.x += n.x, t.y += n.y, OrgChart._setMinMaxXY(t, r);
    for (var l = 0; l < t.stChildren.length; l++) OrgChart.manager._setMinMaxXYAdjustifyIterate(t.stChildren[l], t.stChildren[l], r, 0, a, n, o);
    t.isPartner ? t.sl = i - 1 : t.sl = i, null == a[e.id] && (a[e.id] = {}), null == a[e.id][t.sl] && (a[e.id][t.sl] = {
        minX: null,
        minY: null,
        maxX: null,
        maxY: null
    }), t.layout || OrgChart._setMinMaxXY(t, a[e.id][t.sl]), i++;
    for (l = 0; l < t.children.length; l++) OrgChart.manager._setMinMaxXYAdjustifyIterate(t.children[l], e, r, i, a, n, o)
}, OrgChart.manager._doNotChangePositionOfClickedNodeIfAny = function(t, e, r, i, a, n) {
    if (r != OrgChart.action.expand && r != OrgChart.action.collapse && r != OrgChart.action.minimize && r != OrgChart.action.maximize && r != OrgChart.action.centerNode && r != OrgChart.action.update && r != OrgChart.action.insert) return {
        x: 0,
        y: 0
    };
    if (r == OrgChart.action.update && (!i || null == i.id)) {
        if (!t || !t.length) return {
            x: 0,
            y: 0
        };
        i = {
            id: t[0].id
        }
    }
    if (null == i.id) return {
        x: 0,
        y: 0
    };
    var o = i.id;
    (r == OrgChart.action.minimize && e[o].parent || r == OrgChart.action.maximize && e[o].parent) && (o = e[o].pid);
    var l = e[o],
        s = a[o];
    return s ? {
        x: (s.x ? s.x : 0) - l.x,
        y: (s.y ? s.y : 0) - l.y
    } : {
        x: 0,
        y: 0
    }
}, void 0 === OrgChart && (OrgChart = {}), OrgChart.templates = {}, OrgChart.templates.base = {
    defs: "",
    size: [250, 120],
    expandCollapseSize: 30,
    linkAdjuster: {
        fromX: 0,
        fromY: 0,
        toX: 0,
        toY: 0
    },
    ripple: {
        radius: 0,
        color: "#e6e6e6",
        rect: null
    },
    assistanseLink: '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} {xd},{yd} L{xe},{ye}"/>',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:block;" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>',
    link: '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>',
    pointer: '<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)"><radialGradient id="pointerGradient"><stop stop-color="#ffffff" offset="0" /><stop stop-color="#C1C1C1" offset="1" /></radialGradient><circle cx="16" cy="16" r="16" stroke-width="1" stroke="#acacac" fill="url(#pointerGradient)"></circle></g>',
    node: '<rect x="0" y="0" height="120" width="250" fill="none" stroke-width="1" stroke="#aeaeae" rx="7" ry="7"></rect>',
    plus: '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#aeaeae"></line><line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#aeaeae"></line>',
    minus: '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#aeaeae"></line>',
    nodeMenuButton: '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="7" cy="0" r="2" fill="#ffffff"></circle><circle cx="14" cy="0" r="2" fill="#ffffff"></circle></g>',
    menuButton: '<div style="position:absolute;right:{p}px;top:{p}px; width:30px;height:50px;cursor:pointer;" ' + OrgChart.attr.control_export_menu + '=""><hr style="background-color: #7A7A7A; height: 3px; border: none;"><hr style="background-color: #7A7A7A; height: 3px; border: none;"><hr style="background-color: #7A7A7A; height: 3px; border: none;"></div>',
    img_0: '<clipPath id="{randId}"><circle cx="60" cy="60" r="40"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="20" y="20"  width="80" height="80"></image>',
    link_field_0: '<text text-anchor="middle" fill="#aeaeae" ' + OrgChart.attr.width + '="290" x="0" y="0" style="font-size:10px;">{val}</text>',
    editFormHeaderColor: "#039BE5"
}, OrgChart.templates.ana = {
    defs: "",
    size: [250, 120],
    linkAdjuster: {
        fromX: 0,
        fromY: 0,
        toX: 0,
        toY: 0
    },
    ripple: {
        radius: 0,
        color: "#e6e6e6",
        rect: null
    },
    expandCollapseSize: 30,
    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style="display:block;" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>',
    link: '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{rounded}" />',
    assistanseLink: '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} {xd},{yd} L{xe},{ye}"/>',
    pointer: '<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)"><radialGradient id="pointerGradient"><stop stop-color="#ffffff" offset="0" /><stop stop-color="#C1C1C1" offset="1" /></radialGradient><circle cx="16" cy="16" r="16" stroke-width="1" stroke="#acacac" fill="url(#pointerGradient)"></circle></g>',
    node: '<rect x="0" y="0" height="{h}" width="{w}" fill="#039BE5" stroke-width="1" stroke="#aeaeae" rx="7" ry="7"></rect>',
    plus: '<circle cx="15" cy="15" r="15" class="ba-fill" stroke="#aeaeae" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#aeaeae"></line><line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#aeaeae"></line>',
    minus: '<circle cx="15" cy="15" r="15" class="ba-fill" stroke="#aeaeae" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#aeaeae"></line>',
    up: '<rect x="20" y="-25" width="30" height="17" fill="#aeaeae" rx="3" ry="3"></rect><line x1="35" x2="35" y1="0" y2="-8" stroke="#aeaeae" stroke-width="1"></line>',
    nodeMenuButton: '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="7" cy="0" r="2" fill="#ffffff"></circle><circle cx="14" cy="0" r="2" fill="#ffffff"></circle></g>',
    menuButton: OrgChart.templates.base.menuButton,
    img_0: '<clipPath id="{randId}"><circle cx="50" cy="30" r="40"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="-10"  width="80" height="80"></image>',
    link_field_0: '<text text-anchor="middle" fill="#aeaeae" ' + OrgChart.attr.width + '="290" x="0" y="0" style="font-size:10px;">{val}</text>',
    field_0: "<text " + OrgChart.attr.width + '="230" style="font-size: 18px;" fill="#ffffff" x="125" y="95" text-anchor="middle">{val}</text>',
    field_1: "<text " + OrgChart.attr.width + '="130" ' + OrgChart.attr.text_overflow + '="multiline" style="font-size: 14px;" fill="#ffffff" x="230" y="30" text-anchor="end">{val}</text>',
    padding: [50, 20, 35, 20],
    editFormHeaderColor: "#039BE5"
}, OrgChart.templates.split = Object.assign({}, OrgChart.templates.ana), OrgChart.templates.split.size = [10, 10], OrgChart.templates.split.node = '<circle cx="5" cy="5" r="5" fill="none" stroke-width="1" stroke="#aeaeae"></circle>', OrgChart.templates.group = Object.assign({}, OrgChart.templates.ana), OrgChart.templates.group.size = [250, 120], OrgChart.templates.group.node = '<rect rx="50" ry="50" x="0" y="0" height="{h}" width="{w}" fill="#f2f2f2" stroke-width="0"></rect>', OrgChart.templates.group.link = '<path stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}"/>', OrgChart.templates.group.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,{ew},25)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><g transform="matrix(1,0,0,1,-22,-8)"><rect x="0" y="0" fill="red" fill-opacity="0" width="18" height="22"></rect><line x1="0" y1="2" x2="9" y2="2" stroke="#aeaeae" stroke-width="1"></line><line x1="0" y1="9" x2="18" y2="9" stroke="#aeaeae" stroke-width="1"></line><line x1="0" y1="16" x2="22" y2="16" stroke="#aeaeae" stroke-width="1"></line></g></g>', OrgChart.templates.group.field_0 = "<text " + OrgChart.attr.width + '="230" style="font-size: 18px;" fill="#aeaeae" x="{cw}" y="30" text-anchor="middle">{val}</text>', OrgChart.templates.group.field_1 = "", OrgChart.templates.group.ripple = {
    radius: 50,
    color: "#aeaeae"
}, OrgChart.templates.invisibleGroup = Object.assign({}, OrgChart.templates.group), OrgChart.templates.invisibleGroup.node = "", OrgChart.templates.invisibleGroup.padding = [0, 0, 0, 0], OrgChart.templates.invisibleGroup.field_0 = "", OrgChart.templates.invisibleGroup.nodeMenuButton = "", OrgChart.templates.mirror = {
    linkAdjuster: {},
    link: "",
    node: "",
    nodeMenuButton: "",
    size: [0, 0]
}, OrgChart.templates.ula = Object.assign({}, OrgChart.templates.ana), OrgChart.templates.ula.field_0 = "<text " + OrgChart.attr.width + '="145" style="font-size: 18px;" fill="#039BE5" x="100" y="55">{val}</text>', OrgChart.templates.ula.field_1 = "<text " + OrgChart.attr.width + '="145" ' + OrgChart.attr.text_overflow + '="multiline" style="font-size: 14px;" fill="#afafaf" x="100" y="76">{val}</text>', OrgChart.templates.ula.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></rect><line x1="0" y1="0" x2="250" y2="0" stroke-width="2" stroke="#039BE5"></line>', OrgChart.templates.ula.img_0 = '<clipPath id="{randId}"><circle cx="50" cy="60" r="40"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="20" width="80" height="80" ></image>', OrgChart.templates.ula.menu = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,12)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#ffffff" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#039BE5"></circle><circle cx="7" cy="0" r="2" fill="#039BE5"></circle><circle cx="14" cy="0" r="2" fill="#039BE5"></circle></g>', OrgChart.templates.ula.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#AEAEAE"></circle><circle cx="7" cy="0" r="2" fill="#AEAEAE"></circle><circle cx="14" cy="0" r="2" fill="#AEAEAE"></circle></g>', OrgChart.templates.olivia = Object.assign({}, OrgChart.templates.ana), OrgChart.templates.olivia.defs = '<style>\n                                    #olivia_gradient {\n                                        --color-stop-1: #ffffff;\n                                        --color-stop-2: #eeeeee;\n                                        --opacity-stop: 1;\n                                    }\n                                    .olivia-f0{\n                                        font-size: 18px;\n                                        fill: #757575;\n                                    }\n                                    .olivia-f1{\n                                        font-size: 14px;\n                                        fill: #757575;\n                                    }\n                                    .dark .olivia-f0,.dark .olivia-f1{\n                                        fill: #aeaeae;\n                                    }\n                                    .dark #olivia_gradient {\n                                        --color-stop-1: #646464;\n                                        --color-stop-2: #363636;\n                                        --opacity-stop: 1;\n                                    }\n                                </style>\n                                \'<linearGradient id="olivia_gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="var(--color-stop-1)" stop-opacity="var(--opacity-stop)"/><stop offset="100%" stop-color="var(--color-stop-2)" stop-opacity="var(--opacity-stop)" /></linearGradient>', OrgChart.templates.olivia.field_0 = "<text " + OrgChart.attr.width + '="135" class="olivia-f0" x="100" y="55">{val}</text>', OrgChart.templates.olivia.field_1 = "<text " + OrgChart.attr.width + '="135" class="olivia-f1" x="100" y="76">{val}</text>', OrgChart.templates.olivia.node = '<rect fill="url(#olivia_gradient)" x="0" y="0" height="{h}" width="{w}" stroke-width="1" stroke="#aeaeae" rx="7" ry="7"></rect>', OrgChart.templates.olivia.img_0 = '<clipPath id="{randId}"><circle cx="50" cy="60" r="40"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="20" width="80" height="80" ></image>', OrgChart.templates.olivia.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#AEAEAE"></circle><circle cx="7" cy="0" r="2" fill="#AEAEAE"></circle><circle cx="14" cy="0" r="2" fill="#AEAEAE"></circle></g>', OrgChart.templates.belinda = Object.assign({}, OrgChart.templates.ana), OrgChart.templates.belinda.size = [180, 180], OrgChart.templates.belinda.ripple = {
    radius: 90,
    color: "#e6e6e6",
    rect: null
}, OrgChart.templates.belinda.node = '<circle cx="90" cy="90" r="90" fill="#039BE5" stroke-width="1" stroke="#aeaeae"></circle>', OrgChart.templates.belinda.img_0 = '<clipPath id="{randId}"><circle cx="90" cy="45" r="40"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="50" y="5" width="80" height="80" ></image>', OrgChart.templates.belinda.field_0 = "<text " + OrgChart.attr.width + '="170" style="font-size: 18px;" text-anchor="middle" fill="#ffffff"  x="90" y="105">{val}</text>', OrgChart.templates.belinda.field_1 = "<text " + OrgChart.attr.width + '="160" style="font-size: 14px;" text-anchor="middle" fill="#ffffff"  x="90" y="125">{val}</text>', OrgChart.templates.belinda.link = '<path stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}"/>', OrgChart.templates.belinda.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,79,5)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="0" y="0" fill="#000000" fill-opacity="0" width="22" height="22"></rect><line stroke-width="2" stroke="#000" x1="0" y1="3" x2="22" y2="3"></line><line stroke-width="2" stroke="#000" x1="0" y1="9" x2="22" y2="9"></line><line stroke-width="2" stroke="#000" x1="0" y1="15" x2="22" y2="15"></line></g>', OrgChart.templates.rony = Object.assign({}, OrgChart.templates.ana), OrgChart.templates.rony.svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background-color:#E8E8E8;display:block;" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>', OrgChart.templates.rony.defs = '<filter id="{randId}" x="0" y="0" width="200%" height="200%"><feOffset result="offOut" in="SourceAlpha" dx="5" dy="5"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="5"></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter>', OrgChart.templates.rony.size = [180, 250], OrgChart.templates.rony.ripple = {
    color: "#F57C00",
    radius: 5,
    rect: null
}, OrgChart.templates.rony.img_0 = '<clipPath id="{randId}"><circle cx="90" cy="160" r="60"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="30" y="100"  width="120" height="120"></image>', OrgChart.templates.rony.node = '<rect filter="url(#{randId})" x="0" y="0" height="250" width="180" fill="#ffffff" stroke-width="0" rx="7" ry="7"></rect>', OrgChart.templates.rony.field_0 = "<text " + OrgChart.attr.width + '="165" style="font-size: 18px;" fill="#039BE5" x="90" y="40" text-anchor="middle">{val}</text>', OrgChart.templates.rony.field_1 = "<text " + OrgChart.attr.width + '="165" style="font-size: 14px;" fill="#F57C00" x="90" y="60" text-anchor="middle">{val}</text>', OrgChart.templates.rony.field_2 = "<text " + OrgChart.attr.width + '="165" style="font-size: 14px;" fill="#FFCA28" x="90" y="80" text-anchor="middle">{val}</text>', OrgChart.templates.rony.link = '<path stroke="#039BE5" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>', OrgChart.templates.rony.plus = '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#039BE5" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#039BE5"></line><line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#039BE5"></line>', OrgChart.templates.rony.minus = '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#039BE5" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#039BE5"></line>', OrgChart.templates.rony.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,155,235)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#F57C00"></circle><circle cx="7" cy="0" r="2" fill="#F57C00"></circle><circle cx="14" cy="0" r="2" fill="#F57C00"></circle></g>', OrgChart.templates.mery = Object.assign({}, OrgChart.templates.ana), OrgChart.templates.mery.ripple = {
    color: "#e6e6e6",
    radius: 50,
    rect: null
}, OrgChart.templates.mery.node = '<rect x="0" y="0" height="120" width="250" fill="#ffffff" stroke-width="1" stroke="#686868" rx="50" ry="50"></rect><rect x="0" y="45" height="30" width="250" fill="#039BE5" stroke-width="1"></rect>', OrgChart.templates.mery.link = '<path stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}" />', OrgChart.templates.mery.img_0 = '<clipPath id="{randId}"><circle cx="125" cy="60" r="24"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="95" y="33"  width="60" height="60"></image>', OrgChart.templates.mery.field_0 = "<text " + OrgChart.attr.width + '="220" style="font-size: 18px;" fill="#039BE5" x="125" y="30" text-anchor="middle">{val}</text>', OrgChart.templates.mery.field_1 = "<text " + OrgChart.attr.width + '="220" style="font-size: 14px;" fill="#039BE5" x="125" y="100" text-anchor="middle">{val}</text>', OrgChart.templates.mery.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,60)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="7" cy="0" r="2" fill="#ffffff"></circle><circle cx="14" cy="0" r="2" fill="#ffffff"></circle></g>', OrgChart.templates.polina = Object.assign({}, OrgChart.templates.ana), OrgChart.templates.polina.size = [300, 80], OrgChart.templates.polina.ripple = {
    color: "#e6e6e6",
    radius: 40,
    rect: null
}, OrgChart.templates.polina.node = '<rect x="0" y="0" height="80" width="300" fill="#039BE5" stroke-width="1" stroke="#686868" rx="40" ry="40"></rect>', OrgChart.templates.polina.img_0 = '<clipPath id="{randId}"><circle  cx="40" cy="40" r="35"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="0" y="0"  width="80" height="80"></image>', OrgChart.templates.polina.field_0 = "<text " + OrgChart.attr.width + '="210" style="font-size: 18px;" fill="#ffffff" x="80" y="30" text-anchor="start">{val}</text>', OrgChart.templates.polina.field_1 = "<text " + OrgChart.attr.width + '="210" style="font-size: 14px;" fill="#ffffff" x="80" y="55" text-anchor="start">{val}</text>', OrgChart.templates.polina.link = '<path stroke="#686868" stroke-width="1px" fill="none" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}" />', OrgChart.templates.polina.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,285,33)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="0" cy="7" r="2" fill="#ffffff"></circle><circle cx="0" cy="14" r="2" fill="#ffffff"></circle></g>', OrgChart.templates.mila = Object.assign({}, OrgChart.templates.ana), OrgChart.templates.mila.node = '<rect x="0" y="0" height="120" width="250" fill="#039BE5" stroke-width="1" stroke="#aeaeae"></rect><rect x="-5" y="70" height="30" width="260" fill="#ffffff" stroke-width="1" stroke="#039BE5"></rect><line x1="-5" x2="0" y1="100" y2="105" stroke-width="1" stroke="#039BE5"/><line x1="255" x2="250" y1="100" y2="105" stroke-width="1" stroke="#039BE5"/>', OrgChart.templates.mila.img_0 = '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="20" y="5"  width="64" height="64"></image>', OrgChart.templates.mila.field_0 = "<text " + OrgChart.attr.width + '="240" style="font-size: 18px;" fill="#039BE5" x="125" y="92" text-anchor="middle">{val}</text>', OrgChart.templates.mila.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,110)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="7" cy="0" r="2" fill="#ffffff"></circle><circle cx="14" cy="0" r="2" fill="#ffffff"></circle></g>', OrgChart.templates.diva = Object.assign({}, OrgChart.templates.ana), OrgChart.templates.diva.size = [200, 170], OrgChart.templates.diva.node = '<rect x="0" y="80" height="90" width="200" fill="#039BE5"></rect><circle cx="100" cy="50" fill="#ffffff" r="50" stroke="#039BE5" stroke-width="2"></circle>', OrgChart.templates.diva.img_0 = '<clipPath id="{randId}"><circle cx="100" cy="50" r="45"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="50" y="0"  width="100" height="100"></image>', OrgChart.templates.diva.field_0 = "<text " + OrgChart.attr.width + '="185" style="font-size: 18px;" fill="#ffffff" x="100" y="125" text-anchor="middle">{val}</text>', OrgChart.templates.diva.field_1 = "<text " + OrgChart.attr.width + '="185" style="font-size: 14px;" fill="#ffffff" x="100" y="145" text-anchor="middle">{val}</text>', OrgChart.templates.diva.pointer = '<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)"><radialGradient id="pointerGradient"><stop stop-color="#ffffff" offset="0" /><stop stop-color="#039BE5" offset="1" /></radialGradient><circle cx="16" cy="16" r="16" stroke-width="1" stroke="#acacac" fill="url(#pointerGradient)"></circle></g>', OrgChart.templates.diva.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,175,155)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="7" cy="0" r="2" fill="#ffffff"></circle><circle cx="14" cy="0" r="2" fill="#ffffff"></circle></g>', OrgChart.templates.luba = Object.assign({}, OrgChart.templates.ana), OrgChart.templates.luba.svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:block;background-color: #2E2E2E;" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>', OrgChart.templates.luba.defs = '<linearGradient id="{randId}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#646464;stop-opacity:1" /><stop offset="100%" style="stop-color:#363636;stop-opacity:1" /></linearGradient>', OrgChart.templates.luba.node = '<rect fill="url(#{randId})" x="0" y="0" height="120" width="250" stroke-width="1" stroke="#aeaeae" rx="7" ry="7"></rect>', OrgChart.templates.luba.img_0 = '<clipPath id="{randId}"><circle cx="50" cy="25" r="40"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="-15"  width="80" height="80"></image>', OrgChart.templates.luba.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#aeaeae"></circle><circle cx="7" cy="0" r="2" fill="#aeaeae"></circle><circle cx="14" cy="0" r="2" fill="#aeaeae"></circle></g>', OrgChart.templates.luba.field_0 = "<text " + OrgChart.attr.width + '="235" style="font-size: 18px;" fill="#aeaeae" x="125" y="90" text-anchor="middle">{val}</text>', OrgChart.templates.luba.field_1 = "<text " + OrgChart.attr.width + '="140" style="font-size: 14px;" fill="#aeaeae" x="240" y="30" text-anchor="end">{val}</text>', OrgChart.templates.luba.plus = '<rect x="0" y="0" width="36" height="36" rx="12" ry="12" fill="#2E2E2E" stroke="#aeaeae" stroke-width="1"></rect><line x1="4" y1="18" x2="32" y2="18" stroke-width="1" stroke="#aeaeae"></line><line x1="18" y1="4" x2="18" y2="32" stroke-width="1" stroke="#aeaeae"></line>', OrgChart.templates.luba.minus = '<rect x="0" y="0" width="36" height="36" rx="12" ry="12" fill="#2E2E2E" stroke="#aeaeae" stroke-width="1"></rect><line x1="4" y1="18" x2="32" y2="18" stroke-width="1" stroke="#aeaeae"></line>', OrgChart.templates.luba.expandCollapseSize = 36, OrgChart.templates.isla = Object.assign({}, OrgChart.templates.ana), OrgChart.templates.isla.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="isla-shadow"><feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" /><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>', OrgChart.templates.isla.size = [180, 120], OrgChart.templates.isla.node = '<rect filter="url(#isla-shadow)" x="0" y="20" rx="7" ry="7" height="100" width="180" fill="#FFF" stroke-width="1" stroke="#039BE5" ></rect><rect x="25" y="75" rx="10" ry="10" height="20" width="130" fill="#039BE5" stroke-width="3" stroke="#039BE5"></rect><rect fill="#ffffff" stroke="#039BE5" stroke-width="1" x="70" y="0" rx="13" ry="13" width="40" height="40"></rect><circle stroke="#FFCA28" stroke-width="3" fill="none" cx="90" cy="12" r="8"></circle><path d="M75,34 C75,17 105,17 105,34" stroke="#FFCA28" stroke-width="3" fill="none"></path>', OrgChart.templates.isla.field_0 = "<text " + OrgChart.attr.width + '="120" style="font-size: 12px;" fill="#fff" x="90" y="90" text-anchor="middle">{val}</text>', OrgChart.templates.isla.field_1 = "<text " + OrgChart.attr.width + '="160" style="font-size: 13px;" fill="#039BE5" x="90" y="64" text-anchor="middle">{val}</text>', OrgChart.templates.isla.img_0 = '<clipPath id="{randId}"><rect filter="url(#isla-shadow)" fill="#ffffff" stroke="#039BE5" stroke-width="1" x="70" y="0" rx="13" ry="13" width="40" height="40"></rect></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="70" y="0"  width="40" height="40"></image>', OrgChart.templates.isla.minus = '<circle cx="15" cy="15" r="15" fill="#F57C00" stroke="#F57C00" stroke-width="1"></circle><line x1="8" y1="15" x2="22" y2="15" stroke-width="1" stroke="#ffffff"></line>', OrgChart.templates.isla.plus = '<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#039BE5" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#039BE5"></line><line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#039BE5"></line>', OrgChart.templates.isla.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,83,45)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#F57C00"></circle><circle cx="7" cy="0" r="2" fill="#F57C00"></circle><circle cx="14" cy="0" r="2" fill="#F57C00"></circle></g>', OrgChart.templates.isla.ripple = {
    radius: 0,
    color: "#F57C00",
    rect: {
        x: 0,
        y: 20,
        width: 180,
        height: 100
    }
}, OrgChart.templates.deborah = Object.assign({}, OrgChart.templates.polina), OrgChart.templates.deborah.size = [150, 150], OrgChart.templates.deborah.node = '<rect x="0" y="0" height="150" width="150" fill="#039BE5" stroke-width="1" stroke="#686868" rx="15" ry="15"></rect>', OrgChart.templates.deborah.img_0 = '<clipPath id="{randId}"><rect fill="#ffffff" stroke="#039BE5" stroke-width="1" x="5" y="5" rx="15" ry="15" width="140" height="140"></rect></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="5" y="5"  width="140" height="140"></image><rect x="3" y="5" height="30" width="144" fill="#039BE5" opacity="0.5" rx="3" ry="3"></rect><rect x="3" y="115" height="30" width="144" fill="#039BE5" opacity="0.5" rx="3" ry="3"></rect>', OrgChart.templates.deborah.field_0 = "<text " + OrgChart.attr.width + '="125" ' + OrgChart.attr.text_overflow + '="ellipsis" style="font-size: 18px;" fill="#ffffff" x="15" y="25" text-anchor="start">{val}</text>', OrgChart.templates.deborah.field_1 = "<text " + OrgChart.attr.width + '="105" ' + OrgChart.attr.text_overflow + '="ellipsis" style="font-size: 11px;" fill="#ffffff" x="15" y="135" text-anchor="start">{val}</text>', OrgChart.templates.deborah.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,125,130)" ' + OrgChart.attr.control_node_menu_id + '="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="7" cy="0" r="2" fill="#ffffff"></circle><circle cx="14" cy="0" r="2" fill="#ffffff"></circle></g>', OrgChart.templates.subLevel = Object.assign({}, OrgChart.templates.base), OrgChart.templates.subLevel.size = [0, 0], OrgChart.templates.subLevel.node = "", OrgChart.templates.subLevel.plus = "", OrgChart.templates.subLevel.minus = "", OrgChart.templates.subLevel.nodeMenuButton = "", OrgChart.ui = {
    _defsIds: {},
    defs: function(t) {
        var e = "";
        for (var r in OrgChart.templates) {
            var i = OrgChart.templates[r];
            i.defs && (OrgChart.ui._defsIds[r] = OrgChart.randomId(), e += i.defs.replaceAll("{randId}", OrgChart.ui._defsIds[r]))
        }
        return "<defs>" + e + t + "</defs>"
    },
    lonely: function(t) {
        return t.nodes && t.nodes.length ? "" : OrgChart.IT_IS_LONELY_HERE.replace("{link}", OrgChart.RES.IT_IS_LONELY_HERE_LINK)
    },
    pointer: function(t, e, r) {
        return e === OrgChart.action.exporting ? "" : OrgChart.t(t.template, !1, r).pointer
    },
    node: function(t, e, r, i, a, n, o, l, s, h) {
        var d = OrgChart.t(t.templateName, t.min, s),
            c = d.node.replaceAll("{w}", t.w).replaceAll("{h}", t.h);
        d.defs && (c = c.replaceAll("{randId}", OrgChart.ui._defsIds[t.templateName])), null == o && (o = i.nodeBinding);
        var g = {
            node: t,
            data: e
        };
        for (var p in o) {
            var u, f = o[p];
            if (e && (u = e[f]), "function" == typeof f && (u = f(h, t, e)), g.value = u, g.element = d[p], g.name = f, !1 !== OrgChart.events.publish("field", [h, g]))
                if (null != g.value && null != g.value && null != g.element) OrgChart._lblIsImg(i, p) || "string" != typeof g.value || (g.value = OrgChart.wrapText(g.value, g.element)), c += g.element.replace("{val}", (function() {
                    return g.value
                })).replaceAll("{ew}", t.w - (t.padding ? t.padding[1] : 0)).replaceAll("{cw}", t.w / 2).replaceAll("{randId}", OrgChart.randomId()).replaceAll("{randId2}", OrgChart.randomId())
        }
        var m = OrgChart._getPosition(r, t, a, n),
            C = "node";
        Array.isArray(t.tags) && t.tags.length && (C += " " + t.tags.join(" ")), t.layout && (C += " tree-layout");
        var O = "";
        t.lcn && (O = 'lcn="' + t.lcn + '"');
        var v = OrgChart.nodeOpenTag.replace("{lcn}", O).replace("{id}", t.id).replace("{class}", C).replace("{sl}", t.sl).replace("{level}", t.level).replace("{x}", m.x).replace("{y}", m.y),
            b = OrgChart._getOpacity(r, t);
        return c = (v = v.replace("{opacity}", b)) + (c += OrgChart.ui.nodeBtns(i, t, l, d, h)) + OrgChart.grCloseTag
    },
    nodeBtns: function(t, e, r, i, a) {
        var n = "";
        return null == t.nodeMenu || e.isSplit || r === OrgChart.action.exporting || (n += i.nodeMenuButton.replace("{id}", e.id).replace("{cw}", e.w / 2).replace("{ew}", e.w - (e.padding ? e.padding[1] : 0))), null == t.nodeCircleMenu || e.isSplit || r === OrgChart.action.exporting || OrgChart.isNEU(i.nodeCircleMenuButton) || (n += '<g style="cursor:pointer;" transform="matrix(1,0,0,1,' + i.nodeCircleMenuButton.x + "," + i.nodeCircleMenuButton.y + ')" ' + OrgChart.attr.control_node_circle_menu_id + '="' + e.id + '"><circle cx="0" cy="0" fill="' + i.nodeCircleMenuButton.color + '" r="' + i.nodeCircleMenuButton.radius + '" stroke-width="1" stroke="' + i.nodeCircleMenuButton.stroke + '"></circle><line x1="-' + i.nodeCircleMenuButton.radius / 2 + '" y1="-6" x2="' + i.nodeCircleMenuButton.radius / 2 + '" y2="-6" stroke-width="2" stroke="' + i.nodeCircleMenuButton.stroke + '"></line><line x1="-' + i.nodeCircleMenuButton.radius / 2 + '" y1="0" x2="' + i.nodeCircleMenuButton.radius / 2 + '" y2="0" stroke-width="2" stroke="' + i.nodeCircleMenuButton.stroke + '"></line><line x1="-' + i.nodeCircleMenuButton.radius / 2 + '" y1="6" x2="' + i.nodeCircleMenuButton.radius / 2 + '" y2="6" stroke-width="2" stroke="' + i.nodeCircleMenuButton.stroke + '"></line></g>'), n
    },
    expandCollapseBtn: function(t, e, r, i, a) {
        var n = "";
        if (i !== OrgChart.action.exporting && !e.isSplit) {
            var o = r[e.lcn ? e.lcn : "base"],
                l = 0,
                s = 0,
                h = OrgChart.t(e.templateName, e.min, a);
            if (e.childrenIds.length > 0) {
                if (e.hasPartners) {
                    for (var d = !1, c = 0; c < e.children.length; c++) e.children[c].parentPartner || e.children[c].isPartner || (d = !0);
                    if (!d) return ""
                }
                switch (o.orientation) {
                    case OrgChart.orientation.top:
                    case OrgChart.orientation.top_left:
                        l = e.x + e.w / 2, s = e.y + e.h;
                        break;
                    case OrgChart.orientation.bottom:
                    case OrgChart.orientation.bottom_left:
                        l = e.x + e.w / 2, s = e.y;
                        break;
                    case OrgChart.orientation.right:
                    case OrgChart.orientation.right_top:
                        l = e.x, s = e.y + e.h / 2;
                        break;
                    case OrgChart.orientation.left:
                    case OrgChart.orientation.left_top:
                        l = e.x + e.w, s = e.y + e.h / 2
                }
                if (l -= h.expandCollapseSize / 2, s -= h.expandCollapseSize / 2, t.getCollapsedIds(e).length ? (n += OrgChart.expcollOpenTag.replace("{id}", e.id).replace("{x}", l).replace("{y}", s), n += h.plus, n += OrgChart.grCloseTag) : (n += OrgChart.expcollOpenTag.replace("{id}", e.id).replace("{x}", l).replace("{y}", s), n += h.minus, n += OrgChart.grCloseTag), n.indexOf("{collapsed-children-count}")) {
                    var g = OrgChart.collapsedChildrenCount(t, e);
                    n = n.replace("{collapsed-children-count}", g)
                }
            }
            t._nodeHasHiddenParent(e) && (n += OrgChart.upOpenTag.replace("{id}", e.id).replace("{x}", e.x).replace("{y}", e.y), n += h.up, n += OrgChart.grCloseTag)
        }
        var p = {
            html: n,
            node: e
        };
        return OrgChart.events.publish("renderbuttons", [t, p]), p.html
    },
    link: function(t, e, r, i, a, n) {
        var o = t.lcn ? t.lcn : "base",
            l = e._layoutConfigs[o],
            s = OrgChart.t(t.templateName, t.min, r),
            h = [],
            d = l.levelSeparation / 2;
        t.layout != OrgChart.mixed && t.layout != OrgChart.tree || (d = l.mixedHierarchyNodesSeparation / 2);
        var c = 0,
            g = OrgChart.getRootOf(t).id,
            p = i[g][t.sl],
            u = void 0;
        if (t.hasPartners) {
            u = {
                ids: [],
                indexes: {},
                ppnodes: {},
                lastLeft: null,
                firstRight: null,
                maxSidePartnersWithChildren: 0,
                rightIds: [],
                leftIds: [],
                partnerChildrenSplitSeparation: e.config.partnerChildrenSplitSeparation
            };
            for (var f = 0; f < t.children.length; f++) {
                (m = t.children[f]).parentPartner ? (u.ppnodes[m.id] = m.parentPartner, u.ids.push(m.id), 1 == m.parentPartner.isPartner ? (-1 == u.rightIds.indexOf(m.parentPartner.id) && u.rightIds.push(m.parentPartner.id), u.indexes[m.id] = u.rightIds.indexOf(m.parentPartner.id), u.firstRight || (u.firstRight = m)) : 2 == m.parentPartner.isPartner && (-1 == u.leftIds.indexOf(m.parentPartner.id) && u.leftIds.push(m.parentPartner.id), u.indexes[m.id] = u.leftIds.indexOf(m.parentPartner.id), u.lastLeft = m)) : m.isPartner || (u.lastLeft = m, u.firstRight || (u.firstRight = m))
            }
            u.maxSidePartnersWithChildren = Math.max(u.leftIds.length, u.rightIds.length), c = 0 == u.maxSidePartnersWithChildren ? e.config.minPartnerSeparation / 2 : e.config.minPartnerSeparation / 2 + u.partnerChildrenSplitSeparation * u.maxSidePartnersWithChildren + u.partnerChildrenSplitSeparation / 2
        }
        for (f = 0; f < t.children.length; f++) {
            var m = t.children[f],
                C = i[g][m.sl],
                O = {
                    xa: 0,
                    ya: 0,
                    xb: 0,
                    yb: 0,
                    xc: 0,
                    yc: 0,
                    xd: 0,
                    yd: 0,
                    x: 0,
                    y: 0,
                    rotate: 0
                },
                v = (s = OrgChart.t(m.templateName, m.min, r)).link;
            if (u && -1 != u.ids.indexOf(m.id)) switch (l.orientation) {
                case OrgChart.orientation.top:
                case OrgChart.orientation.top_left:
                    O = OrgChart.ui._linkPpTop(u, t, m, C, p, s);
                    break;
                case OrgChart.orientation.bottom:
                case OrgChart.orientation.bottom_left:
                    O = OrgChart.ui._linkPpBottom(u, t, m, C, p, s);
                    break;
                case OrgChart.orientation.right:
                case OrgChart.orientation.right_top:
                    O = OrgChart.ui._linkPpRight(u, t, m, C, p, s);
                    break;
                case OrgChart.orientation.left:
                case OrgChart.orientation.left_top:
                    O = OrgChart.ui._linkPpLeft(u, t, m, C, p, s)
            } else if ((m.isAssistant || 2 == m.layout) && m.rightNeighbor && m.rightNeighbor.isSplit) switch (l.orientation) {
                case OrgChart.orientation.top:
                case OrgChart.orientation.top_left:
                case OrgChart.orientation.bottom:
                case OrgChart.orientation.bottom_left:
                    O = OrgChart.ui._linkRightToLeft(m.rightNeighbor, m, s, d);
                    break;
                case OrgChart.orientation.right:
                case OrgChart.orientation.right_top:
                case OrgChart.orientation.left:
                case OrgChart.orientation.left_top:
                    O = OrgChart.ui._linkBottomToTop(m.rightNeighbor, m, s, d)
            } else if ((m.isAssistant || 2 == m.layout) && m.leftNeighbor && m.leftNeighbor.isSplit) switch (l.orientation) {
                case OrgChart.orientation.top:
                case OrgChart.orientation.top_left:
                case OrgChart.orientation.bottom:
                case OrgChart.orientation.bottom_left:
                    O = OrgChart.ui._linkLeftToRight(m.leftNeighbor, m, s, d);
                    break;
                case OrgChart.orientation.right:
                case OrgChart.orientation.right_top:
                case OrgChart.orientation.left:
                case OrgChart.orientation.left_top:
                    O = OrgChart.ui._linkTopToBottom(m.leftNeighbor, m, s, d)
            } else switch (l.orientation) {
                case OrgChart.orientation.top:
                case OrgChart.orientation.top_left:
                    if (1 == m.isPartner) O = OrgChart.ui._linkLeftToRight(t, m, s, c);
                    else if (2 == m.isPartner) O = OrgChart.ui._linkRightToLeft(t, m, s, c);
                    else {
                        var b = 1 == m.layout ? void 0 : C.minY - (C.minY - p.maxY) / 2;
                        O = OrgChart.ui._linkTopToBottom(t, m, s, d, b)
                    }
                    break;
                case OrgChart.orientation.bottom:
                case OrgChart.orientation.bottom_left:
                    if (1 == m.isPartner) O = OrgChart.ui._linkLeftToRight(t, m, s, c);
                    else if (2 == m.isPartner) O = OrgChart.ui._linkRightToLeft(t, m, s, c);
                    else {
                        b = 1 == m.layout ? void 0 : C.maxY - (C.maxY - p.minY) / 2;
                        O = OrgChart.ui._linkBottomToTop(t, m, s, d, b)
                    }
                    break;
                case OrgChart.orientation.right:
                case OrgChart.orientation.right_top:
                    if (1 == m.isPartner) O = OrgChart.ui._linkTopToBottom(t, m, s, c);
                    else if (2 == m.isPartner) O = OrgChart.ui._linkBottomToTop(t, m, s, c);
                    else {
                        b = 1 == m.layout ? void 0 : C.maxX - (C.maxX - p.minX) / 2;
                        O = OrgChart.ui._linkRightToLeft(t, m, s, d, b)
                    }
                    break;
                case OrgChart.orientation.left:
                case OrgChart.orientation.left_top:
                    if (1 == m.isPartner) O = OrgChart.ui._linkTopToBottom(t, m, s, c);
                    else if (2 == m.isPartner) O = OrgChart.ui._linkBottomToTop(t, m, s, c);
                    else {
                        b = 1 == m.layout ? void 0 : C.minX - (C.minX - p.maxX) / 2;
                        O = OrgChart.ui._linkLeftToRight(t, m, s, d, b)
                    }
            }
            if (-1 != v.indexOf("{rounded}"))
                if (O.xa == O.xb && O.xa == O.xc && O.xa == O.xd || O.ya == O.yb && O.ya == O.yc && O.ya == O.yd) v = v.replace("{rounded}", "M" + O.xa + "," + O.ya + " L" + O.xd + "," + O.yd);
                else {
                    var x = OrgChart.ui._roundedEdge(O.xa, O.ya, O.xb, O.yb, O.xc, O.yc),
                        y = OrgChart.ui._roundedEdge(O.xb, O.yb, O.xc, O.yc, O.xd, O.yd);
                    v = v.replace("{rounded}", "M" + x.x1 + "," + x.y1 + " " + x.x2 + "," + x.y2 + " Q" + x.qx1 + "," + x.qy1 + " " + x.qx2 + "," + x.qy2 + " L" + y.x2 + "," + y.y2 + " Q" + y.qx1 + "," + y.qy1 + " " + y.qx2 + "," + y.qy2 + " L" + y.x3 + "," + y.y3)
                }
            else v = -1 != v.indexOf("{edge}") ? v.replace("{edge}", "M" + O.xa + "," + O.ya + " " + O.xb + "," + O.yb + " " + O.xc + "," + O.yc + " L" + O.xd + "," + O.yd) : -1 != v.indexOf("{curve}") ? v.replace("{curve}", "M" + O.xa + "," + O.ya + " C" + O.xb + "," + O.yb + " " + O.xc + "," + O.yc + " " + O.xd + "," + O.yd) : v.replaceAll("{xa}", O.xa).replaceAll("{ya}", O.ya).replaceAll("{xb}", O.xb).replaceAll("{yb}", O.yb).replaceAll("{xc}", O.xc).replaceAll("{yc}", O.yc).replaceAll("{xd}", O.xd).replaceAll("{yd}", O.yd);
            h.push(OrgChart.linkOpenTag.replace("{id}", t.id).replace("{class}", "link " + m.tags.join(" ")).replace("{child-id}", m.id));
            var w = {
                node: t,
                cnode: m,
                p: O,
                html: v,
                action: n
            };
            OrgChart.events.publish("render-link", [e, w]), h.push(w.html);
            var _ = "";
            for (var k in e.config.linkBinding) {
                var S = e.config.linkBinding[k],
                    I = e._get(m.id);
                if (I) {
                    var A = I[S];
                    w.value = A, w.element = s[k], w.name = S, !1 !== OrgChart.events.publish("label", [e, w]) && (OrgChart.isNEU(w.value) || OrgChart.isNEU(w.element) || (_ += w.element.replace("{val}", w.value)))
                }
            }
            "" != _ && (_ = OrgChart.linkFieldsOpenTag.replace("{x}", O.x).replace("{y}", O.y).replace("{rotate}", 0) + _ + OrgChart.grCloseTag, h.push(_)), h.push(OrgChart.grCloseTag)
        }
        return h.join("")
    },
    svg: function(t, e, r, i, a, n) {
        return OrgChart.t(i.template, !1, n).svg.replace("{w}", t).replace("{h}", e).replace("{viewBox}", r).replace("{randId}", OrgChart.ui._defsIds[i.template]).replace("{mode}", i.mode).replace("{template}", i.template).replace("{content}", (function() {
            return a
        }))
    },
    menuButton: function(t) {
        return null == t.menu ? "" : OrgChart.t(t.template, !1).menuButton.replaceAll("{p}", t.padding)
    },
    _roundedEdge: function(t, e, r, i, a, n) {
        var o = OrgChart.LINK_ROUNDED_CORNERS;
        Math.abs(t - a) < o && (o = 0), Math.abs(e - n) < o && (o = 0);
        var l, s, h, d = 0;
        return t == r && t == a || e == i && e == n ? (l = h = r, s = d = i) : (t != a && r == a && (l = h = r, s = i, e < n ? d = i + o : e > n && (d = i - o)), t < a && r == a ? r -= o : t > a && r == a && (r += o), e != n && i == n && (l = r, s = d = i, t < a ? h = r + o : t > a && (h = r - o)), e < n && i == n ? i -= o : e > n && i == n && (i += o)), {
            x1: t,
            y1: e,
            x2: r,
            y2: i,
            x3: a,
            y3: n,
            qx1: l,
            qy1: s,
            qx2: h,
            qy2: d
        }
    },
    _linkTopToBottom: function(t, e, r, i, a) {
        var n, o, l, s, h, d = 0;
        return n = t.x + t.w / 2 + r.linkAdjuster.toX, o = t.y + t.h + r.linkAdjuster.toY, s = l = e.x + e.w / 2 + r.linkAdjuster.fromX, h = e.y + r.linkAdjuster.fromY, {
            xa: n,
            ya: o,
            xb: n,
            yb: d = t.rightNeighbor && t.rightNeighbor.isAssistant && "split" == e.templateName ? t.rightNeighbor.y + t.rightNeighbor.h + i : "split" != t.templateName || !e.isAssistant && 2 != e.layout ? "split" == e.templateName ? o + i : null != a ? a : h - i : h,
            xc: l,
            yc: d,
            xd: s,
            yd: h,
            x: l,
            y: d + 16,
            rotate: 0
        }
    },
    _linkBottomToTop: function(t, e, r, i, a) {
        var n, o, l, s, h, d = 0;
        return n = t.x + t.w / 2 + r.linkAdjuster.toX, o = t.y + r.linkAdjuster.toY, s = l = e.x + e.w / 2 + r.linkAdjuster.fromX, h = e.y + e.h + r.linkAdjuster.fromY, {
            xa: n,
            ya: o,
            xb: n,
            yb: d = t.rightNeighbor && t.rightNeighbor.isAssistant && "split" == e.templateName ? t.rightNeighbor.y - i : "split" != t.templateName || !e.isAssistant && 2 != e.layout ? "split" == e.templateName ? o - i : null != a ? a : h + i : h,
            xc: l,
            yc: d,
            xd: s,
            yd: h,
            x: l,
            y: d - 14,
            rotate: 0
        }
    },
    _linkRightToLeft: function(t, e, r, i, a) {
        var n, o, l, s, h, d, c = 0;
        return n = t.x + r.linkAdjuster.toX, o = t.y + t.h / 2 + r.linkAdjuster.toY, h = e.x + e.w + r.linkAdjuster.fromX, d = s = e.y + e.h / 2 + r.linkAdjuster.fromY, l = o, 90, {
            xa: n,
            ya: o,
            xb: c = t.rightNeighbor && t.rightNeighbor.isAssistant && "split" == e.templateName ? t.rightNeighbor.x - i : "split" != t.templateName || !e.isAssistant && 2 != e.layout ? "split" == e.templateName ? n - i : null != a ? a : h + i : h,
            yb: l,
            xc: c,
            yc: s,
            xd: h,
            yd: d,
            x: c - 16,
            y: s,
            rotate: 90
        }
    },
    _linkLeftToRight: function(t, e, r, i, a) {
        var n, o, l, s, h, d, c = 0;
        return n = t.x + t.w + r.linkAdjuster.toX, o = t.y + t.h / 2 + r.linkAdjuster.toY, h = e.x + r.linkAdjuster.fromX, d = s = e.y + e.h / 2 + r.linkAdjuster.fromY, l = o, 270, {
            xa: n,
            ya: o,
            xb: c = t.rightNeighbor && t.rightNeighbor.isAssistant && "split" == e.templateName ? t.rightNeighbor.x + t.rightNeighbor.w + i : "split" != t.templateName || !e.isAssistant && 2 != e.layout ? "split" == e.templateName ? n + i : null != a ? a : h - i : h,
            yb: l,
            xc: c,
            yc: s,
            xd: h,
            yd: d,
            x: c + 14,
            y: s,
            rotate: 270
        }
    },
    _linkPpTop: function(t, e, r, i, a, n) {
        var o = t.ppnodes[r.id],
            l = o.y + o.h / 2,
            s = i.minY - (i.minY - a.maxY) / 2,
            h = (i.minY - a.maxY) / t.maxSidePartnersWithChildren / 4,
            d = OrgChart.ui.__linkPpBottomTop(t, e, r, s, h, o),
            c = d.x;
        return s = d.mid, OrgChart.ui._linkTopToBottom({
            x: c,
            y: l,
            w: 0,
            h: 0
        }, r, n, 0, s)
    },
    _linkPpBottom: function(t, e, r, i, a, n) {
        var o = t.ppnodes[r.id],
            l = o.y + o.h / 2,
            s = i.maxY - (i.maxY - a.minY) / 2,
            h = (i.maxY - a.minY) / t.maxSidePartnersWithChildren / 4,
            d = OrgChart.ui.__linkPpBottomTop(t, e, r, s, h, o),
            c = d.x;
        return s = d.mid, OrgChart.ui._linkBottomToTop({
            x: c,
            y: l,
            w: 0,
            h: 0
        }, r, n, 0, s)
    },
    _linkPpLeft: function(t, e, r, i, a, n) {
        var o = t.ppnodes[r.id],
            l = i.minX - (i.minX - a.maxX) / 2,
            s = (i.minX - a.maxX) / t.maxSidePartnersWithChildren / 4,
            h = o.x + o.w / 2,
            d = OrgChart.ui.__linkPpLeftRight(t, e, r, l, s, o),
            c = d.y;
        return l = d.mid, OrgChart.ui._linkLeftToRight({
            x: h,
            y: c,
            w: 0,
            h: 0
        }, r, n, 0, l)
    },
    _linkPpRight: function(t, e, r, i, a, n) {
        var o = t.ppnodes[r.id],
            l = i.maxX - (i.maxX - a.minX) / 2,
            s = (i.maxX - a.minX) / t.maxSidePartnersWithChildren / 4,
            h = o.x + o.w / 2,
            d = OrgChart.ui.__linkPpLeftRight(t, e, r, l, s, o),
            c = d.y;
        return l = d.mid, OrgChart.ui._linkRightToLeft({
            x: h,
            y: c,
            w: 0,
            h: 0
        }, r, n, 0, l)
    },
    __linkPpBottomTop: function(t, e, r, i, a, n) {
        var o = 0;
        return 1 == n.isPartner ? (o = n.x - e.partnerSeparation / 2 + t.indexes[r.id] * t.partnerChildrenSplitSeparation - (t.rightIds.length - 1) * t.partnerChildrenSplitSeparation / 2, t.lastLeft && o < t.lastLeft.x + t.lastLeft.w / 2 ? o < r.x + r.w / 2 ? i -= (t.indexes[r.id] + 1) * a : i -= (t.rightIds.length - t.indexes[r.id]) * a : o < r.x + r.w / 2 ? i += (t.rightIds.length - t.indexes[r.id]) * a : i += (t.indexes[r.id] + 1) * a) : 2 == n.isPartner && (o = n.x + n.w + e.partnerSeparation / 2 + t.indexes[r.id] * t.partnerChildrenSplitSeparation - (t.leftIds.length - 1) * t.partnerChildrenSplitSeparation / 2, t.firstRight && o > t.firstRight.x + t.firstRight.w / 2 ? o < r.x + r.w / 2 ? i -= (t.indexes[r.id] + 1) * a : i -= (t.leftIds.length - t.indexes[r.id]) * a : o < r.x + r.w / 2 ? i += (t.leftIds.length - t.indexes[r.id]) * a : i += (t.indexes[r.id] + 1) * a), {
            x: o,
            mid: i
        }
    },
    __linkPpLeftRight: function(t, e, r, i, a, n) {
        var o = 0;
        return 1 == n.isPartner ? (o = n.y - e.partnerSeparation / 2 + t.indexes[r.id] * t.partnerChildrenSplitSeparation - (t.rightIds.length - 1) * t.partnerChildrenSplitSeparation / 2, t.lastLeft && o < t.lastLeft.y + t.lastLeft.h / 2 ? o < r.y + r.h / 2 ? i -= (t.indexes[r.id] + 1) * a : i -= (t.rightIds.length - t.indexes[r.id]) * a : o < r.y + r.h / 2 ? i += (t.rightIds.length - t.indexes[r.id]) * a : i += (t.indexes[r.id] + 1) * a) : 2 == n.isPartner && (o = n.y + n.h + e.partnerSeparation / 2 + t.indexes[r.id] * t.partnerChildrenSplitSeparation - (t.leftIds.length - 1) * t.partnerChildrenSplitSeparation / 2, t.firstRight && o > t.firstRight.y + t.firstRight.h / 2 ? o < r.y + r.h / 2 ? i -= (t.indexes[r.id] + 1) * a : i -= (t.leftIds.length - t.indexes[r.id]) * a : o < r.y + r.h / 2 ? i += (t.leftIds.length - t.indexes[r.id]) * a : i += (t.indexes[r.id] + 1) * a), {
            y: o,
            mid: i
        }
    }
}, void 0 === OrgChart && (OrgChart = {}), OrgChart._validateConfig = function(t) {
    return !!t || (console.error("config is not defined"), !1)
}, OrgChart._arrayContains = function(t, e) {
    if (t && Array.isArray(t))
        for (var r = t.length; r--;)
            if (t[r] === e) return !0;
    return !1
}, OrgChart._interceptions = function(t, e) {
    if (!t) return [];
    if (!e) return [];
    var r = [];
    if (Array.isArray(t) && Array.isArray(e))
        for (var i in t)
            for (var a in e) t[i] == e[a] && r.push(t[i]);
    else if (Array.isArray(t) && !Array.isArray(e))
        for (var i in t)
            for (var a in e) t[i] == a && r.push(t[i]);
    else if (!Array.isArray(t) && Array.isArray(e))
        for (var i in t)
            for (var a in e) i == e[a] && r.push(e[a]);
    return r
}, OrgChart._getTags = function(t) {
    return t.tags && !Array.isArray(t.tags) ? t.tags.split(",") : t.tags && Array.isArray(t.tags) ? t.tags : []
}, OrgChart._centerPointInPercent = function(t, e, r) {
    var i = t.getBoundingClientRect(),
        a = e - i.left,
        n = r - i.top;
    return [a / (i.width / 100), n / (i.height / 100)]
}, OrgChart._trim = function(t) {
    return t.replace(/^\s+|\s+$/g, "")
}, OrgChart._getTransform = function(t) {
    var e = t.getAttribute("transform");
    return e = e.replace("matrix", "").replace("(", "").replace(")", ""), OrgChart._browser().msie && (e = e.replace(/ /g, ",")), e = "[" + (e = OrgChart._trim(e)) + "]", e = JSON.parse(e)
}, OrgChart.getScale = function(t, e, r, i, a, n, o, l) {
    var s = 1;
    if (t || i !== OrgChart.match.boundary)
        if (t || i !== OrgChart.match.width)
            if (t || i !== OrgChart.match.height)
                if (t) {
                    var h, d;
                    s = (h = e / t[2]) > (d = r / t[3]) ? d : h
                } else s = i;
    else s = r / l;
    else s = e / o;
    else s = (h = e / o) > (d = r / l) ? d : h;
    return s && s > a && (s = a), s && s < n && (s = n), s
}, OrgChart.isObject = function(t) {
    return t && "object" == typeof t && !Array.isArray(t) && null !== t
}, OrgChart.fileUploadDialog = function(t, e) {
    var r = document.createElement("INPUT");
    r.setAttribute("type", "file"), r.style.display = "none", r.onchange = function() {
        var t = this.files[0];
        e(t)
    }, document.body.appendChild(r), r.click()
}, OrgChart.mergeDeep = function(t, e) {
    if (OrgChart.isObject(t) && OrgChart.isObject(e))
        for (var r in e) OrgChart.isObject(e[r]) ? (t[r] || Object.assign(t, {
            [r]: {}
        }), OrgChart.mergeDeep(t[r], e[r])) : Object.assign(t, {
            [r]: e[r]
        });
    return t
}, OrgChart._lblIsImg = function(t, e) {
    return !(!t.nodeBinding || "string" != typeof e || -1 == e.indexOf("img") || !t.nodeBinding[e])
}, OrgChart._getFistImgField = function(t) {
    if (t.nodeBinding)
        for (var e in t.nodeBinding)
            if (-1 != e.indexOf("img")) return t.nodeBinding[e];
    return !1
}, OrgChart._fieldIsImg = function(t, e) {
    if (t.nodeBinding)
        for (var r in t.nodeBinding)
            if (t.nodeBinding[r] == e) return OrgChart._lblIsImg(t, r);
    return !1
}, OrgChart._guid = function() {
    function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
}, OrgChart.htmlRipple = function(t) {
    var e = document.createElement("style");
    e.type = "text/css", e.innerHTML = " .bg-ripple-container {position: absolute; top: 0; right: 0; bottom: 0; left: 0; } .bg-ripple-container span {transform: scale(0);border-radius:100%;position:absolute;opacity:0.75;background-color:#fff;animation: bg-ripple 1000ms; }@-moz-keyframes bg-ripple {to {opacity: 0;transform: scale(2);}}@-webkit-keyframes bg-ripple {to {opacity: 0;transform: scale(2);}}@-o-keyframes bg-ripple {to {opacity: 0;transform: scale(2);}}@keyframes bg-ripple {to {opacity: 0;transform: scale(2);}}", document.head.appendChild(e);
    var r, i, a, n = document.createElement("div");
    n.className = "bg-ripple-container", t.addEventListener("mousedown", (function(e) {
        var r, i, a, n, o;
        return this, i = document.createElement("span"), a = this.offsetWidth, r = this.getBoundingClientRect(), o = e.pageX - r.left - a / 2, n = "top:" + (e.pageY - r.top - a / 2) + "px; left: " + o + "px; height: " + a + "px; width: " + a + "px;", t.rippleContainer.appendChild(i), i.setAttribute("style", n)
    })), t.addEventListener("mouseup", (r = function() {
        for (; this.rippleContainer.firstChild;) this.rippleContainer.removeChild(this.rippleContainer.firstChild)
    }, i = 2e3, a = void 0, function() {
        var t, e;
        return e = this, t = arguments, clearTimeout(a), a = setTimeout((function() {
            return r.apply(e, t)
        }), i)
    })), t.rippleContainer = n, t.appendChild(n)
}, OrgChart._moveToBoundaryArea = function(t, e, r, i) {
    var a = e.slice(0);
    e[0] < r.left && e[0] < r.right && (a[0] = r.left > r.right ? r.right : r.left), e[0] > r.right && e[0] > r.left && (a[0] = r.left > r.right ? r.left : r.right), e[1] < r.top && e[1] < r.bottom && (a[1] = r.top > r.bottom ? r.bottom : r.top), e[1] > r.bottom && e[1] > r.top && (a[1] = r.top > r.bottom ? r.top : r.bottom), e[0] !== a[0] || e[1] !== a[1] ? OrgChart.anim(t, {
        viewBox: e
    }, {
        viewBox: a
    }, 300, OrgChart.anim.outPow, (function() {
        i && i()
    })) : i && i()
}, OrgChart.randomId = function() {
    return "_" + ("0000" + (Math.random() * Math.pow(36, 4) | 0).toString(36)).slice(-4)
}, OrgChart._getClientXY = function(t) {
    return -1 == t.type.indexOf("touch") ? {
        x: t.clientX,
        y: t.clientY
    } : t.changedTouches.length ? {
        x: t.changedTouches[0].clientX,
        y: t.changedTouches[0].clientY
    } : void 0
}, OrgChart._getClientTouchesXY = function(t, e) {
    return -1 != t.type.indexOf("touch") ? t.touches.length < e + 1 ? {
        x: null,
        y: null
    } : {
        x: t.touches[e].clientX,
        y: t.touches[e].clientY
    } : {
        x: t.clientX,
        y: t.clientY
    }
}, OrgChart._getOffset = function(t, e) {
    t && (e.x += t.offsetLeft, e.y += t.offsetTop, OrgChart._getOffset(t.offsetParent, e))
}, OrgChart._getTopLeft = function(t) {
    var e = {
        x: 0,
        y: 0
    };
    return OrgChart._getOffset(t, e), e
}, OrgChart._getOffsetXY = function(t, e) {
    if (-1 == e.type.indexOf("touch")) return {
        x: e.offsetX,
        y: e.offsetY
    };
    if (e.touches.length) {
        var r = OrgChart._getTopLeft(t);
        return {
            x: e.touches[0].pageX - r.x,
            y: e.touches[0].pageY - r.y
        }
    }
    if (e.changedTouches.length) {
        r = OrgChart._getTopLeft(t);
        return {
            x: e.changedTouches[0].pageX - r.x,
            y: e.changedTouches[0].pageY - r.y
        }
    }
}, OrgChart._pinchMiddlePointInPercent = function(t, e, r, i) {
    var a = OrgChart._getTopLeft(t),
        n = i.touches[0].pageX - a.x,
        o = i.touches[0].pageY - a.y,
        l = i.touches[1].pageX - a.x,
        s = i.touches[1].pageY - a.y;
    return [((n - l) / 2 + l) / (e / 100), ((o - s) / 2 + s) / (r / 100)]
}, OrgChart._browser = function() {
    var t = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
        e = "undefined" != typeof InstallTrigger,
        r = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString(),
        i = !!document.documentMode,
        a = !i && !!window.StyleMedia,
        n = !(!window.chrome || !window.chrome.webstore && !window.chrome.runtime);
    return {
        opera: t,
        firefox: e,
        safari: r,
        msie: i,
        edge: a,
        chrome: n,
        blink: (n || t) && !!window.CSS
    }
}, OrgChart._menuPosition = function(t, e, r) {
    var i = t.getBoundingClientRect(),
        a = r.getBoundingClientRect(),
        n = e.getBoundingClientRect(),
        o = i.left - a.left,
        l = i.top - a.top;
    return i.top + n.height > a.top + a.height && (l -= n.height), i.left - n.width < a.left && (o += n.width), {
        x: o,
        y: l
    }
}, OrgChart._getTemplate = function(t, e, r) {
    if (Array.isArray(t))
        for (var i = 0; i < t.length; i++) {
            var a = e[t[i]];
            if (a && a.template) return a.template
        }
    return r
}, OrgChart._getMin = function(t, e) {
    if (t.tags && t.tags.length && e.tags)
        for (var r = 0; r < t.tags.length; r++) {
            var i = e.tags[t.tags[r]];
            if (i && !0 === i.min) return !0
        }
    return e.min
}, OrgChart._getSubLevels = function(t, e) {
    if (t && t.length)
        for (var r = 0; r < t.length; r++) {
            var i = e[t[r]];
            if (i && i.subLevels) return i.subLevels
        }
    return 0
}, OrgChart._isHTML = function(t) {
    var e = document.createElement("div");
    e.innerHTML = t;
    for (var r = e.childNodes, i = r.length; i--;)
        if (1 == r[i].nodeType) return !0;
    return !1
}, OrgChart._getTestDiv = function() {
    var t = document.getElementById("orgchart_js_test_div");
    return t || ((t = document.createElement("div")).id = "orgchart_js_test_div", t.style.position = "fixed", t.style.top = "-10000px", t.style.left = "-10000px", document.body.appendChild(t)), t
}, OrgChart._getLabelSize = function(t) {
    var e = OrgChart._getTestDiv();
    return e.innerHTML = "<svg>" + t + "</svg>", e.querySelector("text").getBoundingClientRect()
}, OrgChart.wrapText = function(t, e) {
    var r = e.toLowerCase();
    if (-1 == r.indexOf("<text")) return t;
    if (-1 == r.indexOf(OrgChart.attr.width)) return t;
    if (-1 != r.indexOf("foreignobject")) return t;
    if (-1 == e.indexOf(OrgChart.attr.width)) return t;
    if (OrgChart._isHTML(t)) return t;
    var i = OrgChart._getTestDiv();
    e = e.replaceAll("{cw}", 0), i.innerHTML = "<svg>" + e + "</svg>";
    var a, n, o = (new DOMParser).parseFromString(e, "text/xml").getElementsByTagName("text")[0],
        l = parseFloat(o.getAttribute("x")),
        s = parseFloat(o.getAttribute("y")),
        h = o.getAttribute("text-anchor"),
        d = o.getAttribute(OrgChart.attr.width),
        c = o.getAttribute(OrgChart.attr.text_overflow),
        g = "http://www.w3.org/2000/svg",
        p = i.getElementsByTagName("svg")[0].getElementsByTagName("text")[0];
    c || (c = "ellipsis");
    var u = c.split("-");
    if (u.length > 1 && (a = parseInt(c.split("-")[1]), u.length > 2 && "ellipsis" == u[2] && (n = !0)), !d) return t;
    if (d = parseFloat(d), l || (l = 0), s || (s = 0), l || (h = "start"), "ellipsis" == c) {
        p.removeChild(p.firstChild), p.textContent = t;
        for (var f = p.getComputedTextLength(), m = 2; f > d;) p.textContent = t.substring(0, t.length - m), p.textContent += "...", f = p.getComputedTextLength(), m++;
        return m > 2 ? "<title>" + t + "</title>" + p.textContent : t
    }
    if (-1 != c.indexOf("multiline")) {
        var C = t.split(" "),
            O = p.getBBox().height;
        p.textContent = "";
        var v = document.createElementNS(g, "tspan"),
            b = document.createTextNode(C[0]);
        v.setAttributeNS(null, "x", l), v.setAttributeNS(null, "y", s), v.setAttributeNS(null, "text-anchor", h), v.appendChild(b), p.appendChild(v);
        m = 1;
        for (var x = 1, y = 1; y < C.length; y++) {
            var w = v.firstChild.data.length;
            if (v.firstChild.data += " " + C[y], v.getComputedTextLength() > d) {
                if (v.firstChild.data = v.firstChild.data.slice(0, w), x++, a && x > a) {
                    if (n && p.children.length == a) {
                        var _ = p.children[a - 1].textContent;
                        p.children[a - 1].textContent = _.substring(0, _.length - 3) + "..."
                    }
                    break
                }(v = document.createElementNS(g, "tspan")).setAttributeNS(null, "x", l), v.setAttributeNS(null, "y", s + O * m), v.setAttributeNS(null, "text-anchor", h), b = document.createTextNode(C[y]), v.appendChild(b), p.appendChild(v), m++
            }
        }
        var k = "";
        if (null != p.innerHTML) k = p.innerHTML, p.innerHTML = "";
        else {
            var S = "";
            for (y = p.childNodes.length - 1; y >= 0; y--) S = XMLSerializer().serializeToString(p.childNodes[y]) + S, p.removeChild(p.childNodes[y]);
            k = S
        }
        return k
    }
}, OrgChart._downloadFile = function(t, e, r, i) {
    var a = new Blob([e], {
        type: t
    });
    if (1 == i) {
        var n = URL.createObjectURL(a);
        window.open(n, "_blank").focus()
    } else if (navigator.msSaveBlob) navigator.msSaveBlob(a, r);
    else {
        var o = document.createElement("a");
        if (void 0 !== o.download) {
            n = URL.createObjectURL(a);
            o.setAttribute("href", n), o.setAttribute("download", r), o.style.visibility = "hidden", document.body.appendChild(o), o.click(), document.body.removeChild(o)
        }
    }
}, OrgChart._getPosition = function(t, e, r, i) {
    var a = {
        x: e.x,
        y: e.y
    };
    if (null != r && (a.x = r), null != i && (a.y = r), t && 3 == t.length) {
        var n = t[0].indexOf(e.id); - 1 != n && null != t[1][n].transform && (null == r && (a.x = t[1][n].transform[4]), null == i && (a.y = t[1][n].transform[5]))
    }
    return a
}, OrgChart._getOpacity = function(t, e) {
    var r = 1;
    if (t && 3 == t.length) {
        var i = t[0].indexOf(e.id); - 1 != i && null != t[1][i].opacity && (r = t[1][i].opacity)
    }
    return r
}, OrgChart.t = function(t, e, r) {
    var i = OrgChart.templates[t],
        a = null;
    if (null != r && i.scaleLessThen) {
        var n = [];
        for (var o in i.scaleLessThen) {
            var l = parseFloat(o);
            r < l && n.push(l)
        }
        if (n.length > 0) {
            n.sort((function(t, e) {
                return t - e
            }));
            var s = i.scaleLessThen[n[0]];
            for (var h in s) null == a && (a = Object.assign({}, i)), a[h] = s[h]
        }
    }
    return e ? null == a ? i.min ? i.min : i : a.min ? a.min : a : null == a ? i : a
}, OrgChart.setNodeSize = function(t) {
    var e = OrgChart.t(t.templateName, t.min);
    t.w = e && e.size ? e.size[0] : 0, t.h = e && e.size ? e.size[1] : 0
}, OrgChart._imgs2base64 = function(t, e, r, i) {
    var a = t.getElementsByTagName(e),
        n = a.length;
    0 == n && i();
    for (var o = 0; o < n; o++) ! function() {
        var t = o,
            e = a[t];
        OrgChart._getDataUri(e.getAttribute(r), (function(a) {
            a.success && e.setAttribute(r, a.result), t == n - 1 && i()
        }))
    }()
}, OrgChart._getDataUri = function(t, e) {
    if (-1 != t.indexOf("base64")) e({
        success: !1
    });
    else {
        var r = new XMLHttpRequest;
        r.open("GET", t), r.responseType = "blob", r.onload = function() {
            200 === r.status ? i.readAsDataURL(r.response) : 404 === r.status && e({
                success: !1,
                result: r.status
            })
        };
        var i = new FileReader;
        i.onloadend = function() {
            e({
                success: !0,
                result: i.result
            })
        }, r.send()
    }
}, OrgChart._csvToArray = function(t, e) {
    e = e || ",";
    for (var r = new RegExp("(\\" + e + '|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' + e + "\\r\\n]*))", "gi"), i = [
            []
        ], a = null; a = r.exec(t);) {
        var n, o = a[1];
        o.length && o !== e && i.push([]), n = a[2] ? a[2].replace(new RegExp('""', "g"), '"') : a[3], i[i.length - 1].push(n)
    }
    return i
}, OrgChart._json2xml = function(t) {
    for (var e = document.implementation.createDocument("", "", null), r = e.createElement("nodes"), i = 0; i < t.length; i++) {
        var a = e.createElement("node"),
            n = t[i];
        for (var o in n) {
            var l = n[o];
            "tags" == o && (l = l.join()), a.setAttribute(o, l)
        }
        r.appendChild(a)
    }
    return e.appendChild(r), '<?xml version="1.0" encoding="utf-8" ?>' + (new XMLSerializer).serializeToString(e.documentElement)
}, OrgChart._xml2json = function(t) {
    for (var e = (new DOMParser).parseFromString(t, "text/xml").getElementsByTagName("node"), r = [], i = 0; i < e.length; i++) {
        for (var a = e[i], n = {}, o = 0; o < a.attributes.length; o++) {
            var l = a.attributes[o],
                s = l.value;
            "tags" == l.name && (s = s.split(",")), n[l.name] = s
        }
        r.push(n)
    }
    return r
}, OrgChart._json2csv = function(t) {
    for (var e = [], r = function(t) {
            for (var r = "", i = 0; i < e.length; i++) {
                var a;
                (a = "reportsTo" == e[i] ? null : null == t[e[i]] ? "" : t[e[i]]) instanceof Date && (a = a.toLocaleString());
                var n = (a = null === a ? "" : a.toString()).replace(/"/g, '""');
                n.search(/("|,|\n)/g) >= 0 && (n = '"' + n + '"'), i > 0 && (r += ","), r += n
            }
            return r + "\n"
        }, i = "", a = 0; a < t.length; a++)
        for (var n in t[a]) OrgChart._arrayContains(e, n) || (e.push(n), i += n + ",");
    i = i.substring(0, i.length - 1), i += "\n";
    for (a = 0; a < t.length; a++) i += r(t[a]);
    return i = i.substring(0, i.length - 1)
}, OrgChart.accentFold = function(t) {
    return (t = t.toString().toLowerCase()).replace(/([Ã Ã¡Ã¢Ã£Ã¤Ã¥])|([Ã§])|([Ã¨Ã©ÃªÃ«])|([Ã¬Ã­Ã®Ã¯])|([Ã±])|([Ã²Ã³Ã´ÃµÃ¶Ã¸])|([ÃŸ])|([Ã¹ÃºÃ»Ã¼])|([Ã¿])|([Ã¦])/g, (function(t, e, r, i, a, n, o, l, s, h, d) {
        return e ? "a" : r ? "c" : i ? "e" : a ? "i" : n ? "n" : o ? "o" : l ? "s" : s ? "u" : h ? "y" : d ? "ae" : void 0
    }))
}, OrgChart.copy = function(t) {
    if (null === t || "object" != typeof t || "isActiveClone" in t) return t;
    if (t instanceof Date) var e = new t.constructor;
    else e = t.constructor();
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (t.isActiveClone = null, e[r] = OrgChart.copy(t[r]), delete t.isActiveClone);
    return e
}, OrgChart._getScrollSensitivity = function() {
    var t = OrgChart._browser();
    return t.msie && OrgChart.scroll.ie ? OrgChart.scroll.ie : t.edge && OrgChart.scroll.edge ? OrgChart.scroll.edge : t.safari && OrgChart.scroll.safari ? OrgChart.scroll.safari : t.chrome && OrgChart.scroll.chrome ? OrgChart.scroll.chrome : t.firefox && OrgChart.scroll.firefox ? OrgChart.scroll.firefox : t.opera && OrgChart.scroll.opera ? OrgChart.scroll.opera : {
        smooth: OrgChart.scroll.smooth,
        speed: OrgChart.scroll.speed
    }
}, OrgChart.isMobile = function() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}, OrgChart.childrenCount = function(t, e, r) {
    null == r && (r = 0);
    for (var i = 0; i < e.childrenIds.length; i++) {
        var a = t.nodes[e.childrenIds[i]];
        a && (r++, OrgChart.childrenCount(t, a, r))
    }
    return r
}, OrgChart.collapsedChildrenCount = function(t, e, r) {
    null == r && (r = 0);
    for (var i = 0; i < e.childrenIds.length; i++) {
        var a = t.nodes[e.childrenIds[i]];
        a && (!0 === a.collapsed && r++, OrgChart.collapsedChildrenCount(t, a, r))
    }
    return r
}, OrgChart._setMinMaxXY = function(t, e) {
    (null == e.minX || null != t.x && t.x < e.minX) && (e.minX = t.x), (null == e.minY || null != t.y && t.y < e.minY) && (e.minY = t.y), (null == e.maxX || null != t.x && t.x + t.w > e.maxX) && (e.maxX = t.x + t.w), (null == e.maxY || null != t.y && t.y + t.h > e.maxY) && (e.maxY = t.y + t.h)
}, OrgChart.getStParentNodes = function(t, e) {
    for (e || (e = []); t.parent;) t = t.parent;
    return t.stParent && (e.push(t.stParent), OrgChart.getStParentNodes(t.stParent, e)), e
}, OrgChart.getRootOf = function(t) {
    for (; t && t.parent;) t = t.parent;
    return t
}, OrgChart._getViewBox = function(t) {
    var e = null;
    return t ? (e = (e = "[" + (e = t.getAttribute("viewBox")) + "]").replace(/\ /g, ","), e = JSON.parse(e)) : null
}, OrgChart.isNEU = function(t) {
    return null == t || "" === t
}, OrgChart.xScrollUI = function(t, e, r, i, a) {
    this.element = t, this.requestParams = r, this.config = e, this.onSetViewBoxCallback = i, this.onDrawCallback = a, this.pos = 0
}, OrgChart.xScrollUI.prototype.addListener = function(t) {
    var e = this;
    if ((this.config.mouseScrool == OrgChart.action.xScroll || this.config.mouseScrool == OrgChart.action.scroll) && this.bar) {
        var r = OrgChart._getScrollSensitivity();
        ! function(t, r, i) {
            var a = !1;

            function n() {
                a = !0;
                var t = (e.pos - e.bar.scrollLeft) / i;
                if (t > 0) t++;
                else {
                    if (0 == t) return void(a = !1);
                    t--
                }
                Math.ceil(e.bar.scrollLeft) == Math.ceil(e.pos) ? a = !1 : (e.bar.scrollLeft += t, o(n))
            }
            t.addEventListener("wheel", (function(t) {
                var i = 0;
                if (e.config.mouseScrool == OrgChart.action.xScroll)(i = t.deltaX || t.wheelDeltaX) || (i = t.deltaY || t.wheelDeltaY);
                else if (e.config.mouseScrool == OrgChart.action.scroll && !(i = t.shiftKey ? t.deltaY || t.wheelDeltaY : t.deltaX || t.wheelDeltaX)) return;
                i = -i, i = Math.max(-1, Math.min(1, i)), e.pos += -i * r;
                var o = parseFloat(e.innerBar.clientWidth) - parseFloat(e.bar.clientWidth);
                e.pos < 0 && (e.pos = 0);
                e.pos > o && (e.pos = o);
                a || n()
            }), {
                passive: !0
            });
            var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                setTimeout(t, 20)
            }
        }(t, r.speed, r.smooth)
    }
}, OrgChart.xScrollUI.prototype.create = function(t) {
    if (this.config.showXScroll === OrgChart.scroll.visible || this.config.mouseScrool === OrgChart.action.scroll || this.config.mouseScrool === OrgChart.action.xScroll) {
        var e = this;
        this.bar && this.bar.parentNode.removeChild(this.bar), this.bar = document.createElement("div"), this.config.showXScroll !== OrgChart.scroll.visible && (this.bar.style.visibility = "hidden"), this.innerBar = document.createElement("div");
        this.requestParams();
        this.innerBar.innerHTML = "&nbsp", Object.assign(this.bar.style, {
            position: "absolute",
            left: 0,
            bottom: 0,
            width: t + "px",
            "overflow-x": "scroll",
            height: "20px"
        }), this.element.appendChild(this.bar), this.bar.appendChild(this.innerBar), this.bar.addEventListener("scroll", (function() {
            if (this.ignore) this.ignore = !1;
            else {
                var t = e.requestParams(),
                    r = (parseFloat(e.innerBar.clientWidth) - parseFloat(e.bar.clientWidth)) / 100,
                    i = this.scrollLeft / r,
                    a = (t.boundary.right - t.boundary.left) / 100;
                t.viewBox[0] = i * a + t.boundary.left, e.onSetViewBoxCallback(t.viewBox), clearTimeout(this._timeout), this._timeout = setTimeout((function() {
                    e.onDrawCallback()
                }), 500)
            }
        }))
    }
}, OrgChart.xScrollUI.prototype.setPosition = function() {
    if (this.bar) {
        var t = this.requestParams(),
            e = Math.abs(t.boundary.maxX - t.boundary.minX) * t.scale;
        switch (this.config.orientation) {
            case OrgChart.orientation.bottom:
            case OrgChart.orientation.bottom_left:
                innerHeight = Math.abs(t.boundary.minY * t.scale);
                break;
            case OrgChart.orientation.right:
            case OrgChart.orientation.right_top:
                e = Math.abs(t.boundary.minX * t.scale)
        }
        this.innerBar.style.width = e + "px";
        var r = (t.boundary.right - t.boundary.left) / 100,
            i = (t.viewBox[0] - t.boundary.left) / r;
        i < 0 ? i = 0 : i > 100 && (i = 100);
        var a = (parseFloat(this.innerBar.clientWidth) - parseFloat(this.bar.clientWidth)) / 100,
            n = i * a;
        this.bar.ignore = !0, this.bar.scrollLeft = n, this.pos = this.bar.scrollLeft, this.bar.style.visibility = a <= 0 ? "hidden" : ""
    }
}, OrgChart.yScrollUI = function(t, e, r, i, a) {
    this.element = t, this.requestParams = r, this.config = e, this.onSetViewBoxCallback = i, this.onDrawCallback = a, this.pos = 0
}, OrgChart.yScrollUI.prototype.addListener = function(t) {
    var e = this;
    if (this.config.mouseScrool == OrgChart.action.yScroll || this.config.mouseScrool == OrgChart.action.scroll) {
        var r = OrgChart._getScrollSensitivity();
        ! function(t, r, i) {
            var a = !1;

            function n() {
                a = !0;
                var t = (e.pos - e.bar.scrollTop) / i;
                if (t > 0) t++;
                else {
                    if (0 == t) return void(a = !1);
                    t--
                }
                Math.ceil(e.bar.scrollTop) == Math.ceil(e.pos) ? a = !1 : (e.bar.scrollTop += t, o(n))
            }
            t.addEventListener("wheel", (function(t) {
                var i = 0;
                if (e.config.mouseScrool == OrgChart.action.yScroll)(i = t.deltaY || t.wheelDeltaY) || (i = t.deltaX || t.wheelDeltaX);
                else if (e.config.mouseScrool == OrgChart.action.scroll && !(i = t.shiftKey ? t.deltaX || t.wheelDeltaX : t.deltaY || t.wheelDeltaY)) return;
                i = -i, i = Math.max(-1, Math.min(1, i)), e.pos += -i * r;
                var o = parseFloat(e.innerBar.clientHeight) - parseFloat(e.bar.clientHeight);
                e.pos < 0 && (e.pos = 0);
                e.pos > o && (e.pos = o);
                a || n()
            }), {
                passive: !0
            });
            var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                setTimeout(t, 20)
            }
        }(t, r.speed, r.smooth)
    }
}, OrgChart.yScrollUI.prototype.create = function(t) {
    if (this.config.showYScroll === OrgChart.scroll.visible || this.config.mouseScrool === OrgChart.action.scroll || this.config.mouseScrool === OrgChart.action.yScroll) {
        var e = this;
        this.bar && this.bar.parentNode.removeChild(this.bar), this.bar = document.createElement("div"), this.config.showYScroll !== OrgChart.scroll.visible && (this.bar.style.visibility = "hidden"), this.innerBar = document.createElement("div"), this.innerBar.innerHTML = "&nbsp", Object.assign(this.bar.style, {
            position: "absolute",
            right: 0,
            bottom: 0,
            height: t + "px",
            "overflow-y": "scroll",
            width: "20px"
        }), this.element.appendChild(this.bar), this.bar.appendChild(this.innerBar), this.bar.addEventListener("scroll", (function() {
            if (this.ignore) this.ignore = !1;
            else {
                var t = e.requestParams(),
                    r = (parseFloat(e.innerBar.clientHeight) - parseFloat(e.bar.clientHeight)) / 100,
                    i = this.scrollTop / r,
                    a = (t.boundary.bottom - t.boundary.top) / 100;
                t.viewBox[1] = i * a + t.boundary.top, e.onSetViewBoxCallback(t.viewBox), clearTimeout(this._timeout), this._timeout = setTimeout((function() {
                    e.onDrawCallback()
                }), 500)
            }
        }))
    }
}, OrgChart.yScrollUI.prototype.setPosition = function() {
    if (this.bar) {
        var t = this.requestParams(),
            e = t.boundary.maxY * t.scale;
        switch (this.config.orientation) {
            case OrgChart.orientation.bottom:
            case OrgChart.orientation.bottom_left:
                e = Math.abs(t.boundary.minY * t.scale);
                break;
            case OrgChart.orientation.right:
            case OrgChart.orientation.right_top:
                innerWidth = Math.abs(t.boundary.minX * t.scale)
        }
        this.innerBar.style.height = e + "px";
        var r = (t.boundary.bottom - t.boundary.top) / 100,
            i = (t.viewBox[1] - t.boundary.top) / Math.abs(r);
        i < 0 ? i = 0 : i > 100 && (i = 100);
        var a = (parseFloat(this.innerBar.clientHeight) - parseFloat(this.bar.clientHeight)) / 100,
            n = i * a;
        this.bar.ignore = !0, this.bar.scrollTop = n, this.pos = this.bar.scrollTop, this.bar.style.visibility = a <= 0 ? "hidden" : ""
    }
}, OrgChart.prototype.zoom = function(t, e, r, i) {
    var a = this.getViewBox().slice(0),
        n = a,
        o = a[2],
        l = a[3];
    !0 === t ? (a[2] = a[2] / OrgChart.SCALE_FACTOR, a[3] = a[3] / OrgChart.SCALE_FACTOR) : !1 === t ? (a[2] = a[2] * OrgChart.SCALE_FACTOR, a[3] = a[3] * OrgChart.SCALE_FACTOR) : (a[2] = a[2] / t, a[3] = a[3] / t), e || (e = [50, 50]), a[0] = n[0] - (a[2] - o) / (100 / e[0]), a[1] = n[1] - (a[3] - l) / (100 / e[1]);
    var s = this.getScale(a);
    if (a[2] = this.width() / s, a[3] = this.height() / s, !0 === t && s < this.config.scaleMax || !1 === t && s > this.config.scaleMin || 0 != t && 1 != t && s < this.config.scaleMax && s > this.config.scaleMin) {
        this._hideBeforeAnimation();
        var h = this;
        r ? (clearTimeout(h._timeout), OrgChart.anim(this.getSvg(), {
            viewbox: this.getViewBox()
        }, {
            viewbox: a
        }, this.config.anim.duration, this.config.anim.func, (function() {
            clearTimeout(h._timeout), h._timeout = setTimeout((function() {
                h._draw(!0, OrgChart.action.zoom, null, i)
            }), 500)
        }))) : (this.setViewBox(a), clearTimeout(h._timeout), h._timeout = setTimeout((function() {
            h._draw(!0, OrgChart.action.zoom, null, i)
        }), 500))
    }
}, OrgChart.loading = {}, OrgChart.loading.show = function(t) {
    var e = document.createElement("div");
    e.id = "bg-loading", e.innerHTML = '<style>@-webkit-keyframes dot-keyframes {0% { opacity: .4; -webkit-transform: scale(1, 1);transform: scale(1, 1);}50% {opacity: 1;-webkit-transform: scale(1.2, 1.2);transform: scale(1.2, 1.2);}100% {opacity: .4;-webkit-transform: scale(1, 1);transform: scale(1, 1);}}@keyframes dot-keyframes {0% {opacity: .4;-webkit-transform: scale(1, 1);transform: scale(1, 1);}50% {opacity: 1;-webkit-transform: scale(1.2, 1.2);transform: scale(1.2, 1.2);}100% {opacity: .4;-webkit-transform: scale(1, 1);transform: scale(1, 1);}}.bg-loading-dots div {margin: 10px;}      .bg-dot-1 {background-color: #039BE5;}.bg-dot-2 {background-color: #F57C00;}.bg-dot-3 {background-color: #FFCA28;}      .bg-loading-dots {text-align: center;width: 100%; position: absolute; top: 0;}.bg-loading-dots--dot {-webkit-animation: dot-keyframes 1.5s infinite ease-in-out;animation: dot-keyframes 1.5s infinite ease-in-out;        border-radius: 10px;display: inline-block;height: 10px;width: 10px;}.bg-loading-dots--dot:nth-child(2) {-webkit-animation-delay: .5s;animation-delay: .5s;}.bg-loading-dots--dot:nth-child(3) {-webkit-animation-delay: 1s;animation-delay: 1s;}</style><div class="bg-loading-dots"><div class="bg-loading-dots--dot bg-dot-1"></div><div class="bg-loading-dots--dot bg-dot-2"></div><div class="bg-loading-dots--dot bg-dot-3"></div></div>', t.element.appendChild(e)
}, OrgChart.loading.hide = function(t) {
    var e = t.element.querySelector("#bg-loading");
    e && e.parentNode.removeChild(e)
}, OrgChart.pdfPrevUI = {}, OrgChart.loc || (OrgChart.loc = {}), OrgChart.loc.ppdfCmdTitle = "PDF Preview", OrgChart.loc.ppdfSave = "Save", OrgChart.loc.ppdfCancel = "Cancel", OrgChart.loc.ppdfFormat = "Format", OrgChart.loc.ppdfFitToDrwaing = "Fit", OrgChart.loc.ppdfA4 = "A4", OrgChart.loc.ppdfA3 = "A3", OrgChart.loc.ppdfA2 = "A2", OrgChart.loc.ppdfA1 = "A1", OrgChart.loc.ppdfLetter = "Letter", OrgChart.loc.ppdfLegal = "Legal", OrgChart.loc.ppdfLayout = "Layout", OrgChart.loc.ppdfPortrait = "Portrait", OrgChart.loc.ppdfLandscape = "Landscape", OrgChart.loc.ppdfFittopagewidth = "Fit to page width", OrgChart.loc.ppdfMargin = "Margin", OrgChart.loc.ppdfHeader = "Header", OrgChart.loc.ppdfFooter = "Footer", OrgChart.loc.ppdfScale = "Scale", OrgChart.pdfPrevUI.show = function(t, e) {
    e = t._defaultExportOptions(e, "pdf");
    var r = document.createElement("div");
    r.classList.add(t.config.mode), r.id = "bg-ppdf-btns", Object.assign(r.style, {
        position: "absolute",
        top: 0,
        left: 0,
        "background-color": "#fff",
        "z-index": 5,
        margin: "0 0 0 -265px",
        "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        width: "265px",
        height: "100%",
        "font-family": "Roboto,Helvetica",
        color: "#757575",
        "text-align": "right",
        padding: "10px"
    }), t.element.appendChild(r), r.innerHTML = "<h1>" + OrgChart.loc.ppdfCmdTitle + '</h1><div><button type="button" id="bg-prev-save" style="font-size: 14px; width: 90px;">' + OrgChart.loc.ppdfSave + '</button>&nbsp;<button type="button" id="bg-prev-cancel" style="width: 90px;font-size: 14px;">' + OrgChart.loc.ppdfCancel + '</button></div><div style="margin-top:30px; height:10px;border-bottom:1px solid #eeeeee;"></div><div style="padding-top:30px;"><label for="bg-size">' + OrgChart.loc.ppdfFormat + ': </label><select id="bg-ppdf-size" style="color: #757575; width: 150px; font-size: 14px;" id="bg-size"><option value="fit">' + OrgChart.loc.ppdfFitToDrwaing + '</option><option value="A4">' + OrgChart.loc.ppdfA4 + '</option><option value="A3">' + OrgChart.loc.ppdfA3 + '</option><option value="A2">' + OrgChart.loc.ppdfA2 + '</option><option value="A1">' + OrgChart.loc.ppdfA1 + '</option><option value="Letter">' + OrgChart.loc.ppdfLetter + '</option><option value="Legal">' + OrgChart.loc.ppdfLegal + '</option></select></div><div style="padding-top:10px;"><label for="bg-ppdf-layout">' + OrgChart.loc.ppdfLayout + ': </label><select id="bg-ppdf-layout" style="color: #757575; width: 150px;font-size: 14px;" ><option value="false">' + OrgChart.loc.ppdfPortrait + '</option><option value="true">' + OrgChart.loc.ppdfLandscape + '</option></select></div><div style="padding-top:10px;"><label for="bg-scale">' + OrgChart.loc.ppdfScale + ': </label><select id="bg-ppdf-scale" style="color: #757575; width: 150px;font-size: 14px;" id="bg-scale"><option value="fit">' + OrgChart.loc.ppdfFittopagewidth + '</option><option value="10">10%</option><option value="20">20%</option><option value="30">30%</option><option value="40">40%</option><option value="50">50%</option><option value="60">60%</option><option value="70">70%</option><option value="80">80%</option><option value="90">90%</option><option value="100">100%</option><option value="110">110%</option><option value="120">120%</option><option value="130">130%</option><option value="140">140%</option><option value="150">150%</option><option value="160">160%</option><option value="170">170%</option><option value="180">180%</option><option value="190">190%</option><option value="200">200%</option></select></div><div style="margin-top:10px;margin-bottom:10px; height:10px;border-bottom:1px solid #eeeeee;"></div><div style="padding-top:10px;"><label for="bg-ppdf-header">' + OrgChart.loc.ppdfHeader + ': </label><input id="bg-ppdf-header" type="text" style="color: #757575; width: 100px;font-size: 14px;" ></div><div style="padding-top:10px;"><label for="bg-ppdf-footer">' + OrgChart.loc.ppdfFooter + ': </label><input id="bg-ppdf-footer" type="text" style="color: #757575; width: 100px;font-size: 14px;" ></div><div style="padding-top:10px;"><label for="bg-ppdf-margin">' + OrgChart.loc.ppdfMargin + ': </label><input id="bg-ppdf-margin" type="text" style="color: #757575; width: 100px;font-size: 14px;" ></div>';
    var i = document.createElement("div");
    i.id = "bg-ppdf-wrapper", Object.assign(i.style, {
        "overflow-y": "scroll",
        "z-index": 11,
        position: "absolute",
        top: 0,
        left: "285px",
        "background-color": "#eee",
        width: t.width() - 270 + "px",
        height: "100%"
    }), t.element.appendChild(i), i.innerHTML = '<div id="bg-ppdf-content" style="width: 100%;margin-top:10px;margin-bottom:10px;opacity:0;"></div>';
    var a, n, o, l = t.element.querySelector("#bg-ppdf-size"),
        s = t.element.querySelector("#bg-ppdf-layout"),
        h = t.element.querySelector("#bg-ppdf-scale"),
        d = t.element.querySelector("#bg-ppdf-margin"),
        c = t.element.querySelector("#bg-ppdf-header"),
        g = t.element.querySelector("#bg-ppdf-footer");
    l.value = e.format, s.value = e.landscape, h.value = e.scale, d.value = e.margin, c.value = e.header, g.value = e.footer, OrgChart.anim(t.element.querySelector("#bg-ppdf-btns"), {
        margin: [0, 0, 0, -250]
    }, {
        margin: [0, 0, 0, 0]
    }, 300, OrgChart.anim.outSin, (function() {
        t.exportPDF(e, OrgChart.pdfPrevUI._handler)
    })), t.element.querySelector("#bg-prev-cancel").addEventListener("click", (function() {
        OrgChart.pdfPrevUI.hide(t)
    })), t.element.querySelector("#bg-prev-save").addEventListener("click", (function() {
        t.exportPDF(e), OrgChart.pdfPrevUI.hide(t)
    })), OrgChart.pdfPrevUI._showHide(l, s, h), l.addEventListener("change", (function() {
        OrgChart.anim(t.element.querySelector("#bg-ppdf-content"), {
            opacity: 1
        }, {
            opacity: 0
        }, 300, OrgChart.anim.inSin, (function() {
            t.element.querySelector("#bg-ppdf-content").innerHTML = "", e.format = l.value, t.exportPDF(e, OrgChart.pdfPrevUI._handler), OrgChart.pdfPrevUI._showHide(l, s, h)
        }))
    })), s.addEventListener("change", (function() {
        OrgChart.anim(t.element.querySelector("#bg-ppdf-content"), {
            opacity: 1
        }, {
            opacity: 0
        }, 300, OrgChart.anim.inSin, (function() {
            t.element.querySelector("#bg-ppdf-content").innerHTML = "", e.landscape = "true" == s.value, t.exportPDF(e, OrgChart.pdfPrevUI._handler), OrgChart.pdfPrevUI._showHide(l, s, h)
        }))
    })), h.addEventListener("change", (function() {
        OrgChart.anim(t.element.querySelector("#bg-ppdf-content"), {
            opacity: 1
        }, {
            opacity: 0
        }, 300, OrgChart.anim.inSin, (function() {
            t.element.querySelector("#bg-ppdf-content").innerHTML = "", e.scale = h.value, t.exportPDF(e, OrgChart.pdfPrevUI._handler), OrgChart.pdfPrevUI._showHide(l, s, h)
        }))
    })), d.addEventListener("keyup", (function() {
        clearTimeout(a), a = setTimeout((function() {
            OrgChart.anim(t.element.querySelector("#bg-ppdf-content"), {
                opacity: 1
            }, {
                opacity: 0
            }, 300, OrgChart.anim.inSin, (function() {
                t.element.querySelector("#bg-ppdf-content").innerHTML = "";
                var r = d.value.split(",");
                if (4 == r.length) {
                    for (var i = 0; i < r.length; i++) r[i] = parseInt(r[i]);
                    e.margin = r, t.exportPDF(e, OrgChart.pdfPrevUI._handler)
                }
            }))
        }), 1e3)
    })), c.addEventListener("keyup", (function() {
        clearTimeout(n), n = setTimeout((function() {
            OrgChart.anim(t.element.querySelector("#bg-ppdf-content"), {
                opacity: 1
            }, {
                opacity: 0
            }, 300, OrgChart.anim.inSin, (function() {
                t.element.querySelector("#bg-ppdf-content").innerHTML = "", e.header = c.value, t.exportPDF(e, OrgChart.pdfPrevUI._handler)
            }))
        }), 1e3)
    })), g.addEventListener("keyup", (function() {
        clearTimeout(o), o = setTimeout((function() {
            OrgChart.anim(t.element.querySelector("#bg-ppdf-content"), {
                opacity: 1
            }, {
                opacity: 0
            }, 300, OrgChart.anim.inSin, (function() {
                t.element.querySelector("#bg-ppdf-content").innerHTML = "", e.footer = g.value, t.exportPDF(e, OrgChart.pdfPrevUI._handler)
            }))
        }), 1e3)
    }))
}, OrgChart.pdfPrevUI._showHide = function(t, e, r) {
    "A4" == t.value || "A3" == t.value || "A2" == t.value || "A1" == t.value || "Letter" == t.value || "Legal" == t.value ? (e.parentNode.style.display = "block", r.parentNode.style.display = "block") : (e.parentNode.style.display = "none", r.parentNode.style.display = "none")
}, OrgChart.pdfPrevUI._handler = function(t, e, r) {
    var i = e.options,
        a = e.pages,
        n = i.margin[0],
        o = i.margin[2],
        l = document.createElement("div");
    l.classList.add(t.config.mode), l.innerHTML = r.outerHTML, OrgChart._browser().msie && (l.innerHTML = (new XMLSerializer).serializeToString(r));
    for (var s = l.querySelector("svg"), h = t.element.querySelector("#bg-ppdf-content"), d = 0; d < a.length; d++) {
        var c = document.createElement("iframe");
        Object.assign(c.style, {
            display: "block",
            margin: "10px auto",
            border: "1px solid #eeeeee",
            "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }), h.appendChild(c), s && s.style.backgroundColor ? c.style.backgroundColor = s.style.backgroundColor : c.style.backgroundColor = "#fff";
        var g = c.contentWindow.document;
        g.open(), c.style.width = a[d].size.w + "px", c.style.height = a[d].size.h + "px", c.style.margin = "10 auto", a[d].backgroundColor && (c.style.backgroundColor = a[d].backgroundColor);
        var p = i.header;
        a[d].header && (p = a[d].header), p && (p = p.replace("{current-page}", d + 1).replace("{total-pages}", a.length));
        var u = i.footer;
        a[d].footer && (u = a[d].footer), u && (u = u.replace("{current-page}", d + 1).replace("{total-pages}", a.length)), a[d].html ? g.write(OrgChart._exportHtml(a[d].html, e.styles, i, a[d].innerSize.w, a[d].innerSize.h, p, u, t.config.mode)) : (s.setAttribute("viewBox", a[d].vb), g.write(OrgChart._exportHtml(l.innerHTML, e.styles, i, a[d].innerSize.w, a[d].innerSize.h, p, u, t.config.mode)));
        var f = g.getElementById("bg-header"),
            m = g.getElementById("bg-footer");
        if (f) {
            var C = n - f.offsetHeight - 7;
            f.style.top = C + "px"
        }
        if (m) {
            var O = o - m.offsetHeight - 7;
            m.style.bottom = O + "px"
        }
        g.close()
    }
    var v = t.element.querySelector("#bg-ppdf-content");
    OrgChart.anim(v, {
        opacity: 0
    }, {
        opacity: 1
    }, 300, OrgChart.anim.outSin)
}, OrgChart.pdfPrevUI._getViewBox = function(t) {
    var e = null;
    return t ? (e = (e = "[" + (e = t.getAttribute("viewBox")) + "]").replace(/\ /g, ","), e = JSON.parse(e)) : null
}, OrgChart._exportHtml = function(t, e, r, i, a, n, o, l) {
    for (var s = "", h = 0; h < r.margin.length; h++) s += r.margin[h] + "px ";
    var d = '<!DOCTYPE html><html style="margin:0;padding:0;"><head></head>' + e + '<body class="' + l + '" style="margin:0; padding:0;"><div style="margin: ' + s + ";overflow:hidden;width:" + i + "px;height:" + a + 'px">';
    return n && (d += '<div id="bg-header" style="width:' + i + "px;color:#757575;position:absolute;left:" + r.margin[3] + 'px;top:0;">' + n + "</div>"), d += t, o && (d += '<div id="bg-footer" style="width:' + i + "px;color:#757575;position:absolute;left:" + r.margin[3] + 'px;bottom:0;">' + o + "</div>"), d += "</div>", d += "</body></html>"
}, OrgChart.pdfPrevUI.hide = function(t) {
    var e = t.element.querySelector("#bg-ppdf-wrapper");
    e && OrgChart.anim(e, {
        opacity: 1
    }, {
        opacity: 0
    }, 300, OrgChart.anim.inSin, (function() {
        e.parentNode.removeChild(e);
        var r = t.element.querySelector("#bg-ppdf-btns");
        OrgChart.anim(r, {
            margin: [0, 0, 0, 0]
        }, {
            margin: [0, 0, 0, -280]
        }, 300, OrgChart.anim.inSin, (function() {
            r.parentNode.removeChild(r)
        }))
    }))
}, void 0 === OrgChart && (OrgChart = {}), OrgChart.events.on("renderdefs", (function(t, e) {
    for (var r = 0; r < t.config.clinks.length; r++) {
        var i = t.config.clinks[r].template;
        i || (i = "orange");
        var a = OrgChart.clinkTemplates[i];
        e.defs += a.defs
    }
})), OrgChart.events.on("render", (function(t, e) {
    t._clink(t, e)
})), OrgChart.prototype._clink = function(t, e) {
    for (var r, i, a, n, o, l = "", s = 0; s < this.config.clinks.length; s++) {
        var h = this.config.clinks[s],
            d = t.getNode(h.from),
            c = t.getNode(h.to);
        if (d && -1 != e.res.visibleNodeIds.indexOf(d.id) && (c && -1 != e.res.visibleNodeIds.indexOf(c.id))) {
            var g = d.x,
                p = d.y,
                u = c.x,
                f = c.y,
                m = {},
                C = {},
                O = g + d.w / 2,
                v = u + c.w / 2,
                b = p + d.h / 2,
                x = f + c.h / 2,
                y = 1;
            switch (this.config.orientation) {
                case OrgChart.orientation.top:
                case OrgChart.orientation.top_left:
                    O <= v ? (y = 1, m.x = O + d.w / 10, C.x = v - c.w / 10) : (y = -1, m.x = O - d.w / 10, C.x = v + c.w / 10), p == f ? (y = 1, m.y = p, C.y = f) : p > f ? (m.y = p, C.y = f + c.h) : (m.y = p + d.h, C.y = f);
                    break;
                case OrgChart.orientation.bottom:
                case OrgChart.orientation.bottom_left:
                    O <= v ? (y = -1, m.x = O + d.w / 10, C.x = v + c.w / 10) : (y = 1, m.x = O - d.w / 10, C.x = v + c.w / 10), p == f ? (y = -1, m.y = p + d.h, C.y = f + c.h) : p > f ? (m.y = p, C.y = f + c.h) : (m.y = p + d.h, C.y = f);
                    break;
                case OrgChart.orientation.left:
                case OrgChart.orientation.left_top:
                    b <= x ? (y = -1, m.y = b + d.h / 5, C.y = x + c.h / 5) : (y = 1, m.y = b - d.h / 5, C.y = x + c.h / 5), g == u ? (y = -1, m.x = g, C.x = u) : g > u ? (m.x = g, C.x = u + c.w) : (m.x = g + d.w, C.x = u);
                    break;
                case OrgChart.orientation.right:
                case OrgChart.orientation.right_top:
                    b <= x ? (y = 1, m.y = b + d.h / 5, C.y = x + c.h / 5) : (y = -1, m.y = b - d.h / 5, C.y = x + c.h / 5), g == u ? (y = 1, m.x = g + d.w, C.x = u + c.w) : g > u ? (m.x = g, C.x = u + c.w) : (m.x = g + d.w, C.x = u)
            }
            var w = A(m, C, y),
                _ = h.template;
            _ || (_ = "orange");
            var k = OrgChart.clinkTemplates[_],
                S = (r = m, a = w, n = void 0, o = void 0, n = ((i = C).x - r.x) / 2 + r.x, o = (i.y - r.y) / 2 + r.y, {
                    x: (n - a.x) / 2 + a.x,
                    y: (o - a.y) / 2 + a.y
                });
            h.label && (l += k.label.replace("{x}", S.x).replace("{y}", S.y).replace("{val}", h.label));
            var I = "M" + m.x + "," + m.y + "C" + m.x + "," + m.y + " " + w.x + "," + w.y + " " + C.x + "," + C.y;
            l += ("<g " + OrgChart.attr.c_link_from + '="{from}" ' + OrgChart.attr.c_link_to + '="{to}">').replace("{from}", d.id).replace("{to}", c.id) + k.link.replaceAll("{d}", I) + '<path stroke="transparent" stroke-width="15" fill="none" d="' + I + '" />', l += OrgChart.grCloseTag
        }

        function A(t, e, r) {
            null == r && (r = 1);
            var i = e.x - t.x,
                a = e.y - t.y,
                n = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) / 3;
            return n = n / (Math.sqrt(i * i + a * a) * r) * OrgChart.CLINK_CURVE, {
                x: t.x + i / 2 - a * n,
                y: t.y + a / 2 + i * n
            }
        }
    }
    e.content += l
}, OrgChart.prototype.addClink = function(t, e, r, i) {
    return this.removeClink(t, e), this.config.clinks.push({
        from: t,
        to: e,
        label: r,
        template: i
    }), this
}, OrgChart.prototype.removeClink = function(t, e) {
    for (var r = this.config.clinks.length - 1; r >= 0; r--) {
        var i = this.config.clinks[r];
        i.from == t && i.to == e && this.config.clinks.splice(r, 1)
    }
    return this
}, OrgChart.clinkTemplates = {}, OrgChart.clinkTemplates.orange = {
    defs: '<marker id="arrowOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#F57C00" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#F57C00" /></marker>',
    link: '<path marker-start="url(#dotOrange)" marker-end="url(#arrowOrange)" stroke="#F57C00" stroke-width="2" fill="none" d="{d}" />',
    label: '<text fill="#F57C00" text-anchor="middle" x="{x}" y="{y}">{val}</text>'
}, OrgChart.clinkTemplates.blue = {
    defs: '<marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#039BE5" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#039BE5" /></marker>',
    link: '<path marker-start="url(#dotBlue)" marker-end="url(#arrowBlue)" stroke="#039BE5" stroke-width="2" fill="none" d="{d}" />',
    label: '<text fill="#039BE5"  text-anchor="middle" x="{x}" y="{y}">{val}</text>'
}, OrgChart.clinkTemplates.yellow = {
    defs: '<marker id="arrowYellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#FFCA28" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotYellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#FFCA28" /></marker>',
    link: '<path marker-start="url(#dotYellow)" marker-end="url(#arrowYellow)" stroke="#FFCA28" stroke-width="2" fill="none" d="{d}" />',
    label: '<text fill="#FFCA28"  text-anchor="middle" x="{x}" y="{y}">{val}</text>'
}, void 0 === OrgChart && (OrgChart = {}), OrgChart.events.on("renderdefs", (function(t, e) {
    for (var r = 0; r < t.config.slinks.length; r++) {
        var i = t.config.slinks[r].template;
        i || (i = "orange");
        var a = OrgChart.slinkTemplates[i];
        e.defs += a.defs
    }
})), OrgChart.events.on("render", (function(t, e) {
    t._slinks(t, e)
})), OrgChart.prototype._slinks = function(t, e) {
    var r = "",
        i = this.getScale(),
        a = e.res.boundary;

    function n(e, n, o) {
        var s = [],
            h = null,
            d = "left",
            c = e.lcn ? e.lcn : "base",
            g = t._layoutConfigs[c];
        switch (g.orientation) {
            case OrgChart.orientation.top:
            case OrgChart.orientation.top_left:
            case OrgChart.orientation.bottom:
            case OrgChart.orientation.bottom_left:
                n.x > e.x && (d = "right");
                break;
            case OrgChart.orientation.left:
            case OrgChart.orientation.left_top:
            case OrgChart.orientation.right:
            case OrgChart.orientation.right_top:
                d = "top", n.y > e.y && (d = "bottom")
        }
        var p = OrgChart.t(e.templateName, e.min, i),
            u = g.levelSeparation;
        (e.parent && e.parent.layout == OrgChart.mixed || e.parent && e.parent.layout == OrgChart.tree) && (u = g.mixedHierarchyNodesSeparation);
        var f = {
            p: e.x + e.w / 2 + p.expandCollapseSize,
            q: e.y,
            r: e.x + e.w / 2 + p.expandCollapseSize,
            s: a.minY + u
        };
        if (e.level == n.level) switch (h = n, g.orientation) {
            case OrgChart.orientation.top:
            case OrgChart.orientation.top_left:
                s.push([f.p, f.q]), s.push([f.p, f.q - u / 3]), p = OrgChart.t(h.templateName, h.min, i), s.push([h.x + h.w / 2 + p.expandCollapseSize, s[s.length - 1][1]]), s.push([s[s.length - 1][0], h.y]);
                break;
            case OrgChart.orientation.bottom:
            case OrgChart.orientation.bottom_left:
                f.q = e.y + e.h, f.s = a.maxY - u, s.push([f.p, f.q]), s.push([f.r, e.y + e.h + u / 3]), p = OrgChart.t(h.templateName, h.min, i), s.push([h.x + h.w / 2 + p.expandCollapseSize, s[s.length - 1][1]]), s.push([s[s.length - 1][0], h.y + h.h]);
                break;
            case OrgChart.orientation.left:
            case OrgChart.orientation.left_top:
                f.p = e.x, f.q = e.y + e.h / 2 + p.expandCollapseSize, f.r = a.minX - u, f.s = e.y + e.h / 2 + p.expandCollapseSize, s.push([f.p, f.q]), s.push([e.x - u / 3, f.q]), p = OrgChart.t(h.templateName, h.min, i), s.push([s[s.length - 1][0], h.y + h.h / 2 + p.expandCollapseSize]), s.push([h.x, s[s.length - 1][1]]);
                break;
            case OrgChart.orientation.right:
            case OrgChart.orientation.right_top:
                f.p = e.x + e.w, f.q = e.y + e.h / 2 + p.expandCollapseSize, f.r = a.maxX + u, f.s = e.y + e.h / 2 + p.expandCollapseSize, s.push([f.p, f.q]), s.push([e.x + e.w + u / 3, f.q]), p = OrgChart.t(h.templateName, h.min, i), s.push([s[s.length - 1][0], h.y + h.h / 2 + p.expandCollapseSize]), s.push([h.x + h.w, s[s.length - 1][1]])
        } else {
            switch (g.orientation) {
                case OrgChart.orientation.top:
                case OrgChart.orientation.top_left:
                    s.push([f.p, f.q]), s.push([f.r, e.y - u / 3]);
                    break;
                case OrgChart.orientation.bottom:
                case OrgChart.orientation.bottom_left:
                    f.q = e.y + e.h, f.s = a.maxY - u, s.push([f.p, f.q]), s.push([f.r, e.y + e.h + u / 3]);
                    break;
                case OrgChart.orientation.left:
                case OrgChart.orientation.left_top:
                    f.p = e.x, f.q = e.y + e.h / 2 + p.expandCollapseSize, f.r = a.minX - u, f.s = e.y + e.h / 2 + p.expandCollapseSize, s.push([f.p, f.q]), s.push([e.x - u / 3, f.q]);
                    break;
                case OrgChart.orientation.right:
                case OrgChart.orientation.right_top:
                    f.p = e.x + e.w, f.q = e.y + e.h / 2 + p.expandCollapseSize, f.r = a.maxX + u, f.s = e.y + e.h / 2 + p.expandCollapseSize, s.push([f.p, f.q]), s.push([e.x + e.w + u / 3, f.q])
            }
            for (var m = e; null == h;) {
                var C = !1,
                    O = m.parent,
                    v = O.leftNeighbor,
                    b = O.rightNeighbor;
                if (O.id == n.id ? h = O : OrgChart._intersects(O, f, t.config) && (f = OrgChart._addPoint(O, s, t.config, f, d), C = !0), O.id != n.id) {
                    for (; v;) {
                        if (v.id == n.id) {
                            h = v;
                            break
                        }
                        OrgChart._intersects(v, f, t.config) && (f = OrgChart._addPoint(v, s, t.config, f, d), C = !0), v = v.leftNeighbor
                    }
                    for (; b;) {
                        if (b.id == n.id) {
                            h = b;
                            break
                        }
                        OrgChart._intersects(b, f, t.config) && (f = OrgChart._addPoint(b, s, t.config, f, d), C = !0), b = b.rightNeighbor
                    }
                }
                if (!C) {
                    var x = s[s.length - 1][0],
                        y = 0;
                    if (O.parent) switch (u = g.levelSeparation, O.parent.layout != OrgChart.mixed && O.parent.layout != OrgChart.tree || (u = g.mixedHierarchyNodesSeparation), g.orientation) {
                        case OrgChart.orientation.top:
                        case OrgChart.orientation.top_left:
                            y = O.parent.y + O.parent.h + u * (2 / 3);
                            break;
                        case OrgChart.orientation.bottom:
                        case OrgChart.orientation.bottom_left:
                            y = O.parent.y - u * (2 / 3);
                            break;
                        case OrgChart.orientation.left:
                        case OrgChart.orientation.left_top:
                            x = O.parent.x + O.parent.w + u * (2 / 3), y = s[s.length - 1][1];
                            break;
                        case OrgChart.orientation.right:
                        case OrgChart.orientation.right_top:
                            x = O.parent.x - u * (2 / 3), y = s[s.length - 1][1]
                    }
                    s.push([x, y])
                }
                m = O
            }
            switch (p = OrgChart.t(h.templateName, h.min, i), s.splice(s.length - 1, 1), g.orientation) {
                case OrgChart.orientation.top:
                case OrgChart.orientation.top_left:
                    s.push([h.x + h.w / 2 + p.expandCollapseSize, s[s.length - 1][1]]), s.push([s[s.length - 1][0], h.y + h.h]);
                    break;
                case OrgChart.orientation.bottom:
                case OrgChart.orientation.bottom_left:
                    s.push([h.x + h.w / 2 + p.expandCollapseSize, s[s.length - 1][1]]), s.push([s[s.length - 1][0], h.y]);
                    break;
                case OrgChart.orientation.left:
                case OrgChart.orientation.left_top:
                    s.push([s[s.length - 1][0], h.y + h.h / 2 + p.expandCollapseSize]), s.push([h.x + h.w, s[s.length - 1][1]]);
                    break;
                case OrgChart.orientation.right:
                case OrgChart.orientation.right_top:
                    s.push([s[s.length - 1][0], h.y + h.h / 2 + p.expandCollapseSize]), s.push([h.x, s[s.length - 1][1]])
            }
        }
        var w = l.template;
        w || (w = "orange");
        var _, k, S = null;
        switch ((p = OrgChart.slinkTemplates[w]).labelPosition) {
            case "start":
                S = {
                    x: s[1][0],
                    y: s[1][1]
                };
                break;
            case "middle":
                var I = Math.ceil(s.length / 2);
                _ = s[I], k = s[I - 1], S = {
                    x: (_[0] + k[0]) / 2,
                    y: (_[1] + k[1]) / 2
                };
                break;
            case "end":
                S = {
                    x: s[s.length - 2][0],
                    y: s[s.length - 2][1]
                }
        }
        o && (s = s.reverse()), s[0] = "M" + s[0].join(",");
        for (var A = 1; A < s.length; A++) s[A] = "L" + s[A].join(",");
        var L = s.join(" ");
        if (l.label) {
            var N = p.label.replace("{x}", S.x).replace("{y}", S.y).replace("{val}", l.label),
                M = OrgChart._getLabelSize(N),
                E = -M.height / 2;
            switch (g.orientation) {
                case OrgChart.orientation.bottom:
                case OrgChart.orientation.bottom_left:
                    E = M.height
            }
            r += p.label.replace("{x}", S.x).replace("{y}", S.y + E).replace("{val}", l.label)
        }
        r += ("<g " + OrgChart.attr.s_link_from + '="{from}" ' + OrgChart.attr.s_link_to + '="{to}">').replace("{from}", e.id).replace("{to}", n.id) + p.link.replaceAll("{d}", L) + '<path stroke="transparent" stroke-width="15" fill="none" d="' + L + '" />', r += OrgChart.grCloseTag
    }
    for (var o = 0; o < this.config.slinks.length; o++) {
        var l = this.config.slinks[o],
            s = t.getNode(l.from),
            h = t.getNode(l.to);
        s && h && -1 != e.res.visibleNodeIds.indexOf(h.id) && -1 != e.res.visibleNodeIds.indexOf(s.id) && (s.level >= h.level ? n(s, h, !1) : n(h, s, !0))
    }
    e.content += r
}, OrgChart.prototype.addSlink = function(t, e, r, i) {
    return this.removeClink(t, e), this.config.slinks.push({
        from: t,
        to: e,
        label: r,
        template: i
    }), this
}, OrgChart.prototype.removeSlink = function(t, e) {
    for (var r = this.config.slinks.length - 1; r >= 0; r--) {
        var i = this.config.slinks[r];
        i.from == t && i.to == e && this.config.slinks.splice(r, 1)
    }
    return this
}, OrgChart.slinkTemplates = {}, OrgChart.slinkTemplates.orange = {
    defs: '<marker id="arrowSlinkOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#F57C00" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotSlinkOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#F57C00" /></marker>',
    link: '<path stroke-dasharray="4, 2" marker-start="url(#dotSlinkOrange)" marker-end="url(#arrowSlinkOrange)" stroke-linejoin="round" stroke="#F57C00" stroke-width="2" fill="none" d="{d}" />',
    label: '<text dominant-baseline="middle" fill="#F57C00" alignment-baseline="middle" text-anchor="middle" x="{x}" y="{y}">{val}</text>',
    labelPosition: "middle"
}, OrgChart.slinkTemplates.blue = {
    defs: '<marker id="arrowSlinkBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#039BE5" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotSlinkBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#039BE5" /></marker>',
    link: '<path stroke-dasharray="4, 2" marker-start="url(#dotSlinkBlue)" marker-end="url(#arrowSlinkBlue)" stroke-linejoin="round" stroke="#039BE5" stroke-width="2" fill="none" d="{d}" />',
    label: '<text fill="#039BE5" text-anchor="middle" x="{x}" y="{y}">{val}</text>',
    labelPosition: "middle"
}, OrgChart.slinkTemplates.yellow = {
    defs: '<marker id="arrowSlinkYellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#FFCA28" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotSlinkYellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#FFCA28" /></marker>',
    link: '<path stroke-dasharray="4, 2" marker-start="url(#dotSlinkYellow)" marker-end="url(#arrowSlinkYellow)" stroke-linejoin="round" stroke="#FFCA28" stroke-width="2" fill="none" d="{d}" />',
    label: '<text  fill="#FFCA28" text-anchor="middle" x="{x}" y="{y}">{val}</text>',
    labelPosition: "middle"
}, OrgChart.events.on("redraw", (function(t, e) {
    if (t.config.miniMap) {
        var r = OrgChart.miniMap._getCanvas(t),
            i = r.getContext("2d");
        r.width = r.width, r.height = r.height;
        var a = t.response.boundary.maxX - t.response.boundary.minX,
            n = t.response.boundary.maxY - t.response.boundary.minY,
            o = Math.min(r.width / a, r.height / n),
            l = (r.width - a * o) / 2,
            s = (r.height - n * o) / 2;
        i.clearRect(0, 0, r.width, r.height), i.translate(-t.response.boundary.minX * o + l, -t.response.boundary.minY * o + s), i.scale(o, o);
        var h = 0,
            d = [];
        ! function t(e, r) {
            if (Array.isArray(r))
                for (var a = 0; a < r.length; a++) t(e, r[a]);
            else {
                i.fillStyle = OrgChart.miniMap.colors[3], i.beginPath(), i.lineWidth = "0.5", i.fillRect(r.x, r.y, r.w, r.h), i.strokeRect(r.x, r.y, r.w, r.h);
                for (a = 0; a < r.stChildrenIds.length; a++) h++, d.includes(r.id) || (1 == h ? i.fillStyle = OrgChart.miniMap.colors[0] : 2 == h ? i.fillStyle = OrgChart.miniMap.colors[1] : 3 == h && (i.fillStyle = OrgChart.miniMap.colors[2]), i.beginPath(), i.fillRect(r.x, r.y, r.w, r.h), i.strokeRect(r.x, r.y, r.w, r.h), d.push(r.id)), t(e, e.getNode(r.stChildrenIds[a])), h--;
                for (a = 0; a < r.childrenIds.length; a++) t(e, e.getNode(r.childrenIds[a]))
            }
        }(t, t.roots);
        var c = t.getViewBox()[0],
            g = t.getViewBox()[1],
            p = t.getViewBox()[2],
            u = t.getViewBox()[3];
        i.lineWidth = .5 / o, i.strokeStyle = "#f57c00", i.strokeRect(c, g, p, u), i.globalAlpha = .4, i.fillStyle = OrgChart.miniMap.selectorBackgroundColor, i.fillRect(c, g, p, u)
    }
})), OrgChart.miniMap = {}, OrgChart.miniMap._getCanvas = function(t) {
    if (!(e = t.element.querySelector("[" + OrgChart.attr.id + '="mini-map"]'))) {
        var e;
        (e = document.createElement("canvas")).width = 250, e.height = 140, e.setAttribute(OrgChart.attr.id, "mini-map"), e.style.display = "inline-block", e.style.backgroundColor = OrgChart.miniMap.backgroundColor;
        var r = document.createElement("div");
        r.classList.add("mini-map"), r.style.position = "absolute", r.style.bottom = "10px", r.style.left = "10px", r.style.border = "1px solid #aeaeae", r.style.padding = "5px", r.style.margin = t.config.padding + "px", r.style.backgroundColor = OrgChart.miniMap.backgroundColor, r.appendChild(e), t.element.appendChild(r)
    }
    return e
}, OrgChart.miniMap.colors = ["#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575"], OrgChart.miniMap.selectorBackgroundColor = "white", OrgChart.miniMap.backgroundColor = "white", OrgChart._search = {}, OrgChart._search.search = function(t, e, r, i, a, n) {
    var o = [],
        l = e.toLowerCase().split(" ");
    l = l.filter((function(t, e, r) {
        return r.indexOf(t) === e
    }));
    for (var s = {}, h = 0; h < t.length; h++)
        for (var d = t[h], c = 0; c < r.length; c++) {
            var g = r[c];
            if (!OrgChart.isNEU(d[g])) {
                var p = d[g];
                if (null != (e = OrgChart._search.searchAndComputeScore(l, p, g, n))) {
                    var u = d.id;
                    if (s[u]) {
                        if (s[u] && s[u] < e.__score) {
                            s[u] = e.__score;
                            for (var f = o.length - 1; f >= 0; f--) o[f].id == u && o.splice(f, 1);
                            OrgChart._search.addNodeToResult(o, i, d, e, g, a)
                        }
                    } else s[u] = e.__score, OrgChart._search.addNodeToResult(o, i, d, e, g, a)
                }
            }
        }
    return o.sort((function(t, e) {
        return t.__score < e.__score ? 1 : t.__score > e.__score ? -1 : 0
    })), o
}, OrgChart._search.addNodeToResult = function(t, e, r, i, a, n) {
    var o = {};
    o.id = r.id, OrgChart.isNEU(r[n]) || (o[n] = r[n]);
    for (var l = 0; l < e.length; l++) {
        var s = e[l];
        OrgChart.isNEU(r[s]) || OrgChart.isNEU(o[s]) && (o[s] = r[s])
    }
    null != i && (OrgChart.isNEU(o.__score) && (o.__score = i.__score), OrgChart.isNEU(o.__searchField) && (o.__searchField = a), OrgChart.isNEU(o.__searchMarks) && (o.__searchMarks = i.__searchMarks)), t.push(o)
}, OrgChart._search.searchAndComputeScore = function(t, e, r, i) {
    if (OrgChart.isNEU(e)) return null;
    if (OrgChart.isNEU(t)) return null;
    if (!t.length) return null;
    "string" != typeof e && (e = e.toString());
    var a = e.toLowerCase(),
        n = OrgChart._search.searchIndexesOf(a, t);
    if (!n.length) return null;
    var o = a.length / 100,
        l = 0,
        s = 0,
        h = l > 0 ? 100 : 0;
    if (n.length) {
        s = n[0].start;
        for (var d = 0; d < n.length; d++)
            if (l += n[d].length, n[d].start < s && (s = n[d].start), d >= 1 && n[d - 1].start > n[d].start) {
                h = 0;
                break
            }
    }
    var c = 0;
    0 != l && (c = l / o);
    var g = l > 0 ? 100 : 0;
    0 != s && (g = 100 - s / o);
    var p = 0;
    i && i[r] && (p = i[r]), c > 0 && (c = c / 100 * 20), g > 0 && (g = g / 100 * 20), h > 0 && (h = h / 100 * 20), p > 0 && (p = p / 100 * 40);
    var u = parseInt(c + g + h + p);
    u > 100 && (u = 100), n.sort((function(t, e) {
        return t.start < e.start ? -1 : t.start > e.start ? 1 : 0
    }));
    var f = e;
    for (d = n.length - 1; d >= 0; d--) f = (f = f.insert(n[d].start + n[d].length, "</mark>")).insert(n[d].start, "<mark>");
    return {
        __searchMarks: f,
        __score: u
    }
}, OrgChart._search.searchIndexesOf = function(t, e) {
    var r = [];
    if (!OrgChart.isNEU(t))
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            if (!OrgChart.isNEU(a))
                for (var n = 0;
                    (n = t.indexOf(a, n)) > -1;) r.push({
                    length: a.length,
                    start: n
                }), n += a.length
        }
    return r.sort((function(t, e) {
        return t.length < e.length ? 1 : t.length > e.length || t.start < e.start ? -1 : t.start > e.start ? 1 : 0
    })), r = r.filter((function(t) {
        for (var e = !1, i = 0; i < r.length; i++) {
            var a = r[i].start,
                n = r[i].start + r[i].length - 1,
                o = t.start,
                l = t.start + t.length - 1;
            if (a == o && n == l) {
                e = !1;
                break
            }
            if (a >= o && n <= l) {
                e = !0;
                break
            }
            if (a <= o && n >= l) {
                e = !0;
                break
            }
        }
        return !e
    }))
}, OrgChart.events.on("redraw", (function(t, e) {
    if (t.config.state) {
        var r = [],
            i = [];
        ! function t(e) {
            if (Array.isArray(e))
                for (var a = 0; a < e.length; a++) t(e[a]);
            else {
                ("string" != typeof e.id || "string" == typeof e.id && -1 == e.id.indexOf("split") && -1 == e.id.indexOf("mirror")) && (r.push(e.id), 1 == e.min && i.push(e.id));
                for (a = 0; a < e.stChildren.length; a++) t(e.stChildren[a]);
                for (a = 0; a < e.children.length; a++) t(e.children[a])
            }
        }(t.roots), OrgChart.state._put(t.width(), t.height(), t.response.viewBox, r, i, t.response.adjustify, t.config.state)
    }
})), OrgChart.state = {}, OrgChart.state._buildStateNames = function(t) {
    return {
        paramScale: t + "-scale",
        paramX: t + "-x",
        paramY: t + "-y",
        paramExp: t + "-exp",
        paramMin: t + "-min",
        paramAdjustify: t + "-adjustify"
    }
}, OrgChart.state._put = function(t, e, r, i, a, n, o) {
    if (o) {
        var l = OrgChart.state._buildStateNames(o.name),
            s = {
                scale: Math.min(t / r[2], e / r[3]),
                x: r[0],
                y: r[1],
                exp: i,
                min: a,
                adjustify: n
            };
        if (o.writeToUrlParams) {
            var h = new URLSearchParams(window.location.search);
            h.has(l.paramScale) ? h.set(l.paramScale, s.scale) : h.append(l.paramScale, s.scale), h.has(l.paramX) ? h.set(l.paramX, s.x) : h.append(l.paramX, s.x), h.has(l.paramY) ? h.set(l.paramY, s.y) : h.append(l.paramY, s.y), h.has(l.paramExp) ? h.set(l.paramExp, s.exp.join("*")) : h.append(l.paramExp, s.exp.join("*")), h.has(l.paramMin) ? h.set(l.paramMin, s.min.join("*")) : h.append(l.paramMin, s.min.join("*")), h.has(l.paramAdjustify) ? h.set(l.paramAdjustify, s.adjustify.x + "*" + s.adjustify.y) : h.append(l.paramAdjustify, s.adjustify.x + "*" + s.adjustify.y), window.history.replaceState(null, null, "?" + h)
        }
        o.writeToIndexedDB && (s.id = o.name, OrgChart.idb.put(s, (function(t) {
            0 == t && console.error("Cannot write row - " + o.name)
        }))), o.writeToLocalStorage && OrgChart.localStorage.setItem(o.name, JSON.stringify(s))
    }
}, OrgChart.state._get = function(t, e, r, i) {
    if (t) {
        var a = OrgChart.state._buildStateNames(t.name);
        if (t.readFromUrlParams) {
            var n = new URLSearchParams(window.location.search);
            if (n.has(a.paramScale) && n.has(a.paramX) && n.has(a.paramY) && n.has(a.paramExp) && n.has(a.paramMin) && n.has(a.paramAdjustify)) {
                var o = {},
                    l = parseFloat(n.get(a.paramScale)),
                    s = parseFloat(n.get(a.paramX)),
                    h = parseFloat(n.get(a.paramY));
                (c = [])[0] = s, c[1] = h, c[2] = e / l, c[3] = r / l, o.vb = c, o.scale = l, o.x = s, o.y = h, o.exp = n.get(a.paramExp).split("*"), o.min = n.get(a.paramMin).split("*");
                var d = n.get(a.paramAdjustify).split("*");
                return o.adjustify = {
                    x: parseFloat(d[0]),
                    y: parseFloat(d[1])
                }, void i(o)
            }
            if (!t.readFromIndexedDB && !t.readFromLocalStorage) return void i(null)
        }
        if (t.readFromLocalStorage) {
            var c;
            if (null != (o = OrgChart.localStorage.getItem(t.name))) return o = JSON.parse(o), (c = [])[0] = o.x, c[1] = o.y, c[2] = e / o.scale, c[3] = r / o.scale, o.vb = c, void i(o);
            if (!t.readFromIndexedDB) return void i(null)
        }
        t.readFromIndexedDB && OrgChart.idb.read(t.name, (function(a, n) {
            if (0 == a) console.error("Cannot read from - " + t.name), i(null);
            else if (null == a) i(null);
            else {
                var o = [];
                o[0] = n.x, o[1] = n.y, o[2] = e / n.scale, o[3] = r / n.scale, n.vb = o, i(n)
            }
        }))
    } else i(null)
}, OrgChart.state.clear = function(t) {
    if (!t) return !1;
    var e = OrgChart.state._buildStateNames(t),
        r = new URLSearchParams(window.location.search);
    r.has(e.paramScale) && r.delete(e.paramScale), r.has(e.paramX) && r.delete(e.paramX), r.has(e.paramY) && r.delete(e.paramY), r.has(e.paramExp) && r.delete(e.paramExp), r.has(e.paramMin) && r.delete(e.paramMin), r.has(e.paramAdjustify) && r.delete(e.paramAdjustify), window.history.replaceState(null, null, "?" + r), OrgChart.idb.delete(t, (function(e) {
        0 == e && console.error("Cannot delete row - " + t)
    }))
}, OrgChart._magnify = {}, OrgChart.prototype.magnify = function(t, e, r, i, a) {
    i || (i = this.config.anim);
    var n = this.getNode(t),
        o = this.getNodeElement(t);
    if (n || o) {
        var l = OrgChart._magnify[t];
        if (l && (null != l.timer && clearInterval(l.timer), null != l.timerBack && clearInterval(l.timerBack), o.setAttribute("transform", "matrix(" + l.transformStart.toString() + ")"), OrgChart._magnify[t]), r) o = o.cloneNode(!0), this.getSvg().appendChild(o);
        var s = OrgChart._getTransform(o),
            h = JSON.parse(JSON.stringify(s));
        h[0] = e, h[3] = e;
        var d = n.w + n.w * (e - 1),
            c = n.h + n.h * (e - 1);
        h[4] += (n.w - d) / 2, h[5] += (n.h - c) / 2;
        var g = OrgChart.anim(o, {
            transform: s
        }, {
            transform: h
        }, i.duration, i.func);
        OrgChart._magnify[t] = {
            timer: g,
            transformStart: s,
            nodeElement: o,
            front: r
        }, a && a(o)
    }
}, OrgChart.prototype.magnifyBack = function(t, e, r) {
    e || (e = this.config.anim);
    var i = OrgChart._magnify[t];
    if (i) {
        null != i.timer && clearInterval(i.timer), null != i.timerBack && clearInterval(i.timerBack);
        var a = OrgChart._getTransform(i.nodeElement);
        i.timerBack = OrgChart.anim(i.nodeElement, {
            transform: a
        }, {
            transform: i.transformStart
        }, e.duration, e.func, (function(t) {
            var e = t[0].getAttribute(OrgChart.attr.node_id);
            OrgChart._magnify[e] && OrgChart._magnify[e].front && (t[0].parentNode.removeChild(t[0]), OrgChart._magnify[e] = null), r && r(t[0])
        }))
    }
}, void 0 === OrgChart && (OrgChart = {}), OrgChart.events.on("init", (function(t, e) {
    t.config.enableKeyNavigation && (t._addEvent(window, "keydown", t._windowKeyDownHandler), OrgChart.isNEU(t._keyNavigationActiveNodeId) && t.roots && t.roots.length && (t._keyNavigationActiveNodeId = t.roots[0].id, t.center(t._keyNavigationActiveNodeId)))
})), OrgChart.prototype._windowKeyDownHandler = function(t, e) {
    for (var r = e.target, i = null; r && r != this.element;) {
        if (r.hasAttribute && r.hasAttribute(OrgChart.attr.node_id)) {
            i = r.getAttribute(OrgChart.attr.node_id);
            break
        }
        r = r.parentNode
    }
    if (r) {
        var a = i ? this.getNode(i) : null,
            n = {
                node: a,
                data: i ? this.get(i) : null,
                event: e
            };
        if (!1 !== OrgChart.events.publish("key-down", [this, n]) && a)
            if ("KeyF" == e.code) this.searchUI.find("");
            else if ("ArrowRight" == e.code || a.isAssistant && "ArrowDown" == e.code || a.isPartner && "ArrowDown" == e.code) {
            if (s = this.getNode(a.pid)) {
                var o = s.childrenIds.indexOf(a.id);
                if (++o < s.childrenIds.length) {
                    var l = s.childrenIds[o];
                    this._keyNavigationActiveNodeId = l, this.center(l)
                }
            }
        } else if ("ArrowLeft" == e.code) {
            if (s = this.getNode(a.pid)) {
                o = s.childrenIds.indexOf(a.id);
                if (--o >= 0) {
                    l = s.childrenIds[o];
                    this._keyNavigationActiveNodeId = l, this.center(l)
                }
            }
        } else if ("ArrowUp" == e.code) {
            var s;
            if (s = this.getNode(a.pid)) {
                l = s.id;
                if (a.isAssistant || s.hasAssistants || a.isPartner || s.hasPartners) {
                    o = s.childrenIds.indexOf(a.id);
                    --o >= 0 && (l = s.childrenIds[o])
                }
                this._keyNavigationActiveNodeId = l, this.center(l)
            }
        } else if ("ArrowDown" == e.code) a.childrenIds.length && (this._keyNavigationActiveNodeId = a.childrenIds[0], this.center(a.childrenIds[0]));
        else if ("Space" == e.code) {
            var h = r.getAttribute(OrgChart.attr.node_id);
            return void this.toggleExpandCollapse(h, e)
        }
    }
}, OrgChart.events.on("redraw", (function(t, e) {
    t.config.enableKeyNavigation && OrgChart._keyNavigation(t)
})), OrgChart.events.on("click", (function(t, e) {
    t.config && t.config.enableKeyNavigation && (t._keyNavigationActiveNodeId = e.node.id, t.center(e.node.id))
})), OrgChart._keyNavigation = function(t) {
    var e = t.element.querySelector(":focus");
    if (e && e.parentElement && e.parentElement.hasAttribute(OrgChart.attr.node_id)) {
        var r = e.parentElement;
        (a = (i = e).querySelector("title")) && a.parentNode.removeChild(a), i.removeAttribute("tabindex")
    }
    if (!OrgChart.isNEU(t._keyNavigationActiveNodeId) && ((r = t.getNodeElement(t._keyNavigationActiveNodeId)) && r.children.length)) {
        var i;
        (i = r.children[0]).setAttribute("tabindex", 2);
        var a, n = {
            text: "",
            id: t._keyNavigationActiveNodeId
        };
        if (OrgChart.events.publish("screen-reader-text", [t, n]), !OrgChart.isNEU(n.text))(a = document.createElementNS("http://www.w3.org/2000/svg", "title")).innerHTML = n.text, i.appendChild(a);
        t.searchUI.hide(), i.focus()
    }
}, OrgChart.elements = {}, OrgChart.elements.textbox = function(t, e, r, i) {
    var a = OrgChart.elements._vidrf(t, e, i);
    if (a.doNotRender) return {
        html: ""
    };
    var n = "";
    return e.btn && (n = `<a href="#" ba-input-btn="" class="ba-link ba-link-ba-button">${e.btn}</a>`), {
        html: `<div class="ba-form-field" style="min-width: ${r};">\n                    <div class="ba-input" data-ba-input="" ${a.disabledAttribute} ${a.vlidators}>\n                        <label for="${a.id}">${a.label}</label>\n                        <input ${a.readOnlyAttribute} data-binding="${a.binding}" maxlength="256" id="${a.id}" name="${a.id}" type="text" value="${a.value}" autocomplete="off">\n                        ${n}\n                    </div>\n                </div>`,
        id: a.id,
        value: a.value
    }
}, OrgChart.elements.checkbox = function(t, e, r, i) {
    var a = OrgChart.elements._vidrf(t, e, i);
    if (a.doNotRender) return {
        html: ""
    };
    var n = a.value ? "checked" : "",
        o = i ? 'onclick="return false;"' : "";
    return {
        html: `<div class="ba-form-field"  style="min-width: ${r};" >\n                        <label class="ba-checkbox" data-ba-input="" ${a.disabledAttribute}>\n                            <input ${n} ${o} data-binding="${a.binding}" type="checkbox"><span class="ba-checkbox-checkmark" type="checkbox"></span>${a.label}\n                        </label>\n                    </div>`,
        id: a.id,
        value: n
    }
}, OrgChart.elements.select = function(t, e, r, i) {
    if (i) return OrgChart.elements.textbox(t, e, r, i);
    var a = OrgChart.elements._vidrf(t, e, i);
    return a.doNotRender ? {
        html: ""
    } : {
        html: `<div class="ba-form-field" style="min-width: ${r};">\n                    <div class="ba-input" data-ba-input="" ${a.disabledAttribute} ${a.vlidators}>\n                        <label for="${a.id}">${a.label}</label>\n                        <select data-binding="${a.binding}" ${a.readOnlyAttribute} id="${a.id}" name="${a.id}">\n                            ${function(){for(var t="",e=0;e<a.options.length;e++){var r=a.options[e];t+=`<option ${r.value==a.value?"selected":""} value="${r.value}">${r.text}</option>`}return t}()}                           \n                        </select>\n                    </div>\n                </div>`,
        id: a.id,
        value: a.value
    }
}, OrgChart.elements.date = function(t, e, r, i) {
    var a = OrgChart.elements._vidrf(t, e, i);
    return a.doNotRender ? {
        html: ""
    } : {
        html: `<div class="ba-form-field" style="min-width: ${r};">\n                    <div class="ba-input" data-ba-input="" ${a.disabledAttribute} ${a.vlidators}>\n                        <label for="${a.id}" class="hasval">${a.label}</label>\n                        <input data-binding="${a.binding}" ${a.readOnlyAttribute} maxlength="256" id="${a.id}" name="${a.id}" type="date" value="${a.value}" autocomplete="off">\n                    </div>\n                </div>`,
        id: a.id,
        value: a.value
    }
}, OrgChart.elements._vidrf = function(t, e, r) {
    var i = {};
    if (e.binding || (e.binding = ""), e.label || (e.label = ""), "select" != e.type || Array.isArray(e.options) ? i.options = e.options : i.options = [], i.value = t && !OrgChart.isNEU(t[e.binding]) ? t[e.binding] : "", r && i.options)
        for (var a = 0; a < i.options.length; a++)
            if (i.options[a].value == i.value) {
                i.value = i.options[a].text;
                break
            } if (i.id = OrgChart.elements.generateId(), i.disabledAttribute = r ? "data-ba-input-disabled" : "", i.readOnlyAttribute = r ? "readonly" : "", i.id = i.id, r && OrgChart.isNEU(i.value) && (i.doNotRender = !0), r && "photo" == e.binding && (i.id = null, i.doNotRender = !0), i.binding = e.binding, i.label = e.label, i.vlidators = "", e.vlidators)
        for (var n in e.vlidators) i.vlidators += `data-v-${n}="${e.vlidators[n]}" `;
    return i
}, OrgChart.elements.ids = [], OrgChart.elements.generateId = function() {
    for (;;) {
        var t = "_" + ("0000" + (Math.random() * Math.pow(36, 4) | 0).toString(36)).slice(-4);
        if (!OrgChart.elements.ids.has(t)) return OrgChart.elements.ids.push(t), t
    }
}, OrgChart.input = {}, OrgChart.input._timeout = null, OrgChart.input.initWithTimeout = function() {
    OrgChart.input._timeout && (clearTimeout(OrgChart.input._timeout), OrgChart.input._timeout = null), OrgChart.input._timeout = setTimeout(OrgChart.input.init, 200)
}, OrgChart.input.init = function(t) {
    var e;
    e = t ? t.querySelectorAll("[data-ba-input]") : document.querySelectorAll("[data-ba-input]");
    for (var r = 0; r < e.length; r++) {
        var i = e[r],
            a = null;
        i.type && "hidden" == i.type.toLowerCase() && (a = i), a || (a = i.querySelector("input")), a || (a = i.querySelector("select"));
        var n = i.querySelector("label");
        n && (a.value || "select-one" == a.type && a.selectedOptions && a.selectedOptions.length && "" == a.selectedOptions[0].value && a.selectedOptions[0].innerHTML) && n.classList.add("hasval"), "checkbox" != a.type.toLowerCase() && a.addEventListener("focus", (function() {
            this.classList.remove("validation-error");
            var t = this.parentNode.querySelector("label");
            t.classList.add("focused");
            var e = t.querySelector(".validation-error-message");
            e && e.parentNode.removeChild(e)
        })), "checkbox" != a.type.toLowerCase() && a.addEventListener("blur", (function() {
            var t = this.parentNode.querySelector("label");
            t.classList.remove("focused"), this.value || "date" == this.type ? t.classList.add("hasval") : t.classList.remove("hasval")
        }))
    }
}, OrgChart.input.validate = function(t) {
    var e = null;
    t.type && "hidden" == t.type.toLowerCase() && (e = t), e || (e = t.querySelector("input")), e || (e = t.querySelector("select"));
    var r = t.querySelector("label");
    if (e.classList.remove("validation-error"), r) {
        var i = r.querySelector(".validation-error-message");
        i && i.parentNode.removeChild(i)
    }
    e.value && (e.value = e.value.trim());
    var a = t.getAttribute("data-v-required"),
        n = t.getAttribute("data-v-password"),
        o = t.getAttribute("data-v-email"),
        l = t.getAttribute("data-v-emails");
    return a && "" == e.value ? (r.innerHTML += '<span class="validation-error-message">&nbsp;' + a + "</span>", e.classList.add("validation-error"), !1) : n && !OrgChart.input.validatePassword(e.value) ? (r.innerHTML += '<span class="validation-error-message">&nbsp;' + n + "</span>", e.classList.add("validation-error"), !1) : o && !OrgChart.input.isValidEmail(e.value) ? (r.innerHTML += '<span class="validation-error-message">&nbsp;' + o + "</span>", e.classList.add("validation-error"), !1) : !(l && !OrgChart.input.isValidEmails(e.value)) || (r.innerHTML += '<span class="validation-error-message">&nbsp;' + l + "</span>", e.classList.add("validation-error"), !1)
}, OrgChart.input.validateAndGetData = function(t) {
    for (var e = t.querySelectorAll("[data-ba-input]"), r = !0, i = 0; i < e.length; i++) {
        var a = e[i];
        OrgChart.input.validate(a) || (r = !1)
    }
    if (!r) return !1;
    var n = t.querySelectorAll("[data-binding]"),
        o = {};
    for (i = 0; i < n.length; i++) {
        var l = n[i],
            s = l.getAttribute("data-binding");
        "checkbox" == l.type.toLowerCase() ? o[s] = l.checked : o[s] = l.value
    }
    return o
}, OrgChart.input.validatePassword = function(t) {
    return t && (t = t.trim()), !(t.length < 5) && (!(t.length > 18) && -1 == t.indexOf(" "))
}, OrgChart.input.isValidEmails = function(t) {
    if (t)
        for (var e = t.split(","), r = 0; r < e.length; r++) {
            var i = e[r].trim();
            if (!OrgChart.input.isValidEmail(i)) return !1
        }
    return !0
}, OrgChart.input.isValidEmail = function(t) {
    t && (t = t.trim());
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())
}, OrgChart.ui.css = function() {
    return '<style data-ba-styles>.ba-button{background-color:#039be5;cursor:pointer;width:calc(100%);height:50px;color:#fff;padding-top:5px;padding-left:7px;padding-right:7px;text-align:center;text-transform:uppercase;border:1px solid #3fc0ff;display:inline-block;border-radius:5px}.ba-button.orange{background-color:#f57c00;border:1px solid #ffa03e}.ba-button.yellow{background-color:#ffca28;border:1px solid #ffdf7c}.ba-button.lower{text-transform:unset}.ba-button.transparent{background-color:transparent}.ba-button:hover{background-color:#35afea}.ba-button.orange:hover{background-color:#f79632}.ba-button.yellow:hover{background-color:#ffd452}.ba-button:active{transform:matrix(.98,0,0,.98,0,0)}.ba-button-icon{text-align:initial;cursor:pointer;margin-bottom:15px;color:#039be5}.dark .ba-button-icon:hover{background-color:#2d2d2d}.light .ba-button-icon:hover{background-color:#ececec}.ba-button-icon>img{height:24px;width:24px;vertical-align:middle;padding:7px}.ba-button:focus{outline:0}.ba-button-icon>img{filter:invert(46%) sepia(66%) saturate(2530%) hue-rotate(171deg) brightness(95%) contrast(98%)}.light .ba-button.transparent{color:#039be5}.light .ba-button.transparent:hover{color:#fff}.ba-button-loading{background-color:transparent;cursor:pointer;width:calc(100% - 2px);height:50px;color:#fff;text-align:center;text-transform:uppercase;border:1px solid #027cb7;display:inline-block;display:flex;justify-content:center;align-items:center;display:none}.ba-button-loading .ba-loading-dots div{margin:0 10px}.ba-link-ba-button{position:absolute;right:10px;top:-1px}[data-ba-input-disabled] .ba-link-ba-button{display:none}[dir=rtl] .ba-link-ba-button{left:10px;right:unset}.ba-img-button{width:48px;height:48px;cursor:pointer;border-radius:50%;background-color:#039be5;background-repeat:no-repeat;background-size:24px 24px;background-position:center center;margin:3px;display:inline-block}.ba-img-button:hover{background-color:#f57c00}.ba-checkbox{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.ba-checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.ba-checkbox-checkmark{position:absolute;top:0;left:0;height:25px;width:25px;border-radius:5px}.dark [data-ba-input-disabled] .ba-checkbox-checkmark,.dark [data-ba-input-disabled].ba-checkbox input:checked~.ba-checkbox-checkmark,.light [data-ba-input-disabled] .ba-checkbox-checkmark,.light [data-ba-input-disabled].ba-checkbox input:checked~.ba-checkbox-checkmark{background-color:#aeaeae!important}[data-ba-input-disabled].ba-checkbox{cursor:default}[dir=rtl] .ba-checkbox-checkmark{right:0}[dir=rtl] .ba-checkbox{padding-left:unset;padding-right:35px}.dark .ba-checkbox-checkmark{background-color:#333;border:1px solid #5b5b5b}.light .ba-checkbox-checkmark{background-color:#fff;border:1px solid #c7c7c7}.dark .ba-checkbox:hover input~.ba-checkbox-checkmark{background-color:#3c3c3c}.light .ba-checkbox:hover input~.ba-checkbox-checkmark{background-color:#f8f9f9}.dark .ba-checkbox input:checked~.ba-checkbox-checkmark{background-color:#039be5}.light .ba-checkbox input:checked~.ba-checkbox-checkmark{background-color:#039be5}.ba-checkbox-checkmark:after{content:"";position:absolute;display:none}.ba-checkbox input:checked~.ba-checkbox-checkmark:after{display:block}.ba-checkbox .ba-checkbox-checkmark:after{left:9px;top:5px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.ba-form-perspective{transform-style:preserve-3d;perspective:500px;position:absolute;top:32px}.ba-form{box-shadow:rgba(0,0,0,.2) 0 6px 6px 0,rgba(0,0,0,.19) 0 13px 20px 0;padding:14px;transform-origin:top center;user-select:none;display:none;position:relative;max-height:calc(100vh - 100px);overflow-y:auto;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.ba-form-bottom{border-bottom-left-radius:unset;border-bottom-right-radius:unset;border-top-left-radius:5px;border-top-right-radius:5px}.ba-form .separator{margin:0 10px}@media screen and (max-width:1000px){.ba-form-perspective{min-width:100%;max-height:calc(100% - 32px);left:unset!important;right:unset!important;transform:none!important}.ba-form .set{max-height:calc(100vh - 74px)}.ba-form-fieldset{max-width:unset!important}}.light .ba-form .separator{border-bottom:1px solid #c7c7c7}.dark .ba-form .separator{border-bottom:1px solid #5b5b5b}.light .ba-form{background-color:#fff}.dark .ba-form{background-color:#252526}.item{padding:6px 12px 6px 12px;display:flex;flex-direction:row}.light .ba-form .item.selected,.light .ba-form .item:hover{background-color:#0074e8;color:#fff}.dark .ba-form .item.selected,.dark .ba-form .item:hover{background-color:#094771;color:#fff}.item.selected img,.item:hover img{filter:invert(100%)}.item.selected img{visibility:visible!important}.ba-form-fieldset{display:flex;flex-wrap:wrap;margin:0!important}.ba-form-field{flex:1 0 21%;margin:3px;min-width:200px}.ba-form-field-100{flex:1 0 96%;margin:3px;min-width:200px}.ba-input{position:relative}.ba-input>input,.ba-input>select{height:50px;padding:18px 10px 2px 9px;width:100%;box-sizing:border-box;border-style:solid;border-width:1px}.ba-input select{height:50px;padding:20px 5px 4px 5px}[data-ba-input-disabled].ba-input>input,[data-ba-input-disabled].ba-input>select{border-color:transparent!important}.light [data-ba-input-disabled]>input,.light [data-ba-input-disabled]>select{background-color:#fff!important}.dark [data-ba-input-disabled]>input,.dark [data-ba-input-disabled]>select{background-color:#252526!important}[data-ba-input-disabled]>select{appearance:none;padding-left:8px}.ba-input>label{display:inline-block;position:absolute;padding-left:10px;padding-right:10px;color:#acacac;cursor:text;-webkit-transition:all .1s ease-out;-moz-transition:all .1s ease-out;-ms-transition:all .1s ease-out;-o-transition:all .1s ease-out;transition:all .1 ease-out;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:initial;text-align:initial;white-space:nowrap}.ba-input>label{top:12px;overflow:hidden;text-overflow:ellipsis;max-width:calc(100% - 14px)}.ba-input>label.focused,.ba-input>label.hasval{top:-1px}.ba-input>input,.ba-input>select{outline:0;border-radius:5px}.dark .ba-input>label.focused,.light .ba-input>label.focused{color:#039be5}.dark .ba-input>input,.dark .ba-input>select{color:#ccc;background-color:#333;border-color:#5b5b5b}.light .ba-input>input,.light .ba-input>select{color:#757575;background-color:#fff;border-color:#c7c7c7}.light .ba-input>input:focus,.light .ba-input>select:focus{border-color:#039be5;background-color:#f8f9f9}.dark .ba-input>input:focus,.dark .ba-input>select:focus{border-color:#039be5;background-color:#3c3c3c}.dark .ba-input>input.validation-error,.dark .ba-input>select.validation-error,.light .ba-input>input.validation-error,.light .ba-input>select.validation-error{border-color:#ca2a2a}.dark .validation-error-message,.light .validation-error-message{color:#ca2a2a}.ba-link{color:#039be5;cursor:pointer;text-decoration:underline}.ba-link:hover{color:#f57c00}::-webkit-scrollbar{width:15px}.dark ::-webkit-scrollbar-track{background:#1e1e1e;border-left:1px solid #333}.dark ::-webkit-scrollbar-thumb{background:#424242}.dark ::-webkit-scrollbar-thumb:hover{background:#4f4f4f}.dark ::-webkit-scrollbar-thumb:active{background:#5e5e5e}.light ::-webkit-scrollbar-track{background:#fff;border-left:1px solid #ddd}.light ::-webkit-scrollbar-thumb{background:#c1c1c1}.light ::-webkit-scrollbar-thumb:hover{background:#929292}.light ::-webkit-scrollbar-thumb:active{background:#666}.edit-form{position:fixed;top:0;right:0;height:100%;width:100%;box-shadow:rgba(0,0,0,.2) 0 6px 6px 0,rgba(0,0,0,.19) 0 13px 20px 0;display:flex;flex-direction:column;height:100%;width:400px}@media screen and (max-width:1000px){.edit-form{width:100%}}.dark .edit-form{background-color:#252526}.light .edit-form{background-color:#fff}.edit-form-header{height:200px;text-align:center;border-radius:10px}.export-service .edit-form-header{border-radius:unset}.edit-form-title{color:#fff;margin:0;padding:14px 17px 7px 17px}.edit-form-avatar{border-radius:50%;width:150px;height:150px;position:absolute;top:75px;border:5px solid #fff;left:50%;transform:translateX(-50%);background-color:#cacaca;box-shadow:rgba(0,0,0,.2) 0 6px 6px 0,rgba(0,0,0,.19) 0 13px 20px 0}.edit-form-close{position:absolute;right:14px;top:14px;width:34px;height:34px;cursor:pointer}.edit-form-fields{flex-grow:1;overflow-y:auto;overflow-x:hidden}.edit-form-fields-inner{margin:0 7px 20px 7px}.chart-menu{opacity:0;display:inline-block;position:absolute;text-align:left;user-select:none;min-width:270px;box-shadow:rgba(0,0,0,.2) 0 4px 8px 0,rgba(0,0,0,.19) 0 6px 20px 0;font:13px/28px Helvetica,"Segoe UI",Arial,sans-serif;border-radius:10px}.chart-menu>div:hover img{filter:invert(100%)}.chart-menu [data-item]{text-align:start;padding:7px 10px}.dark .chart-menu [data-item]{background-color:#252526;color:#acacac;border-bottom:1px solid #333}.dark .chart-menu [data-item]:hover{background-color:#094771!important;color:#fff!important}.dark .chart-menu [data-item]:hover svg{filter:brightness(0) invert(1)}.light .chart-menu [data-item]{background-color:#fff;color:#333;border-bottom:1px solid #c7c7c7}.light .chart-menu [data-item]:hover{background-color:#0074e8!important;color:#fff!important}.light .chart-menu [data-item]:hover svg{filter:brightness(0) invert(1)}.chart-menu [data-item] svg{vertical-align:middle}.chart-menu [data-item]:first-child{border-top-left-radius:7px;border-top-right-radius:7px}.chart-menu [data-item]:last-child{border-bottom-width:0;border-bottom-style:none;border-bottom-left-radius:7px;border-bottom-right-radius:7px}.search{position:absolute}@media screen and (max-width:1000px){.search{width:calc(100% - 30px)}}.search .ba-input{margin-bottom:0}.search-input{color:#7a7a7a;width:100%;border:none;outline:0;padding-top:10px;padding-right:47px}.search label{padding-right:47px}.search-image-td{width:43px}.search-text-td{padding-inline-end:7px;line-height:15px;text-align:start}.search table{box-shadow:rgba(0,0,0,.2) 0 4px 8px 0,rgba(0,0,0,.19) 0 6px 20px 0;margin:0 3.5px 0 3.5px;width:calc(100% - 7px);border-radius:7px}.search table tr:first-child td:first-child{border-top-left-radius:7px}.search table tr:first-child td:last-child{border-top-right-radius:7px}[dir=rtl] .search table tr:first-child td:first-child{border-top-left-radius:unset;border-top-right-radius:7px}[dir=rtl] .search table tr:first-child td:last-child{border-top-right-radius:unset;border-top-left-radius:7px}.search table tr:last-child td:first-child{border-bottom-left-radius:7px}.search table tr:last-child td:last-child{border-bottom-right-radius:7px}[dir=rtl] .search table tr:last-child td:first-child{border-bottom-left-radius:unset;border-bottom-right-radius:7px}[dir=rtl] .search table tr:last-child td:last-child{border-bottom-right-radius:unset;border-bottom-left-radius:7px}.dark .search table{background-color:#252526;color:#acacac}.search [data-search-item-id]{cursor:pointer}.search-photo{margin:7px 7px 0 7px;width:32px;height:32px;background-size:cover;background-position:top center;border-radius:50%;display:inline-block;border:1px solid #8c8c8c}.dark .search [data-search-item-id] td{border-top:1px solid #333}.dark .search [data-search-item-id]:hover,.dark .search [data-selected=yes]{background-color:#094771;color:#fff}.light .search table{background-color:#fff;color:#333}.light .search [data-search-item-id] td{border-top:1px solid #c7c7c7}.light .search [data-search-item-id]:hover,.light .search [data-selected=yes]{background-color:#0074e8;color:#fff}.search [data-search-item-id]:first-child td{border-top:unset}.bg-ripple-container{position:absolute;top:0;right:0;bottom:0;left:0}.drag-over rect{opacity:.5}.bg-ripple-container span{transform:scale(0);border-radius:100%;position:absolute;opacity:.75;background-color:#fff;animation:bg-ripple 1s}@-moz-keyframes bg-ripple{to{opacity:0;transform:scale(2)}}@-webkit-keyframes bg-ripple{to{opacity:0;transform:scale(2)}}@-o-keyframes bg-ripple{to{opacity:0;transform:scale(2)}}@keyframes bg-ripple{to{opacity:0;transform:scale(2)}}.bg-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.bg-slider:before{position:absolute;content:"";height:16px;width:16px;left:4px;bottom:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s}.bg-slider.round{border-radius:24px}.bg-slider.round:before{border-radius:50%}svg text:hover{cursor:default}svg.cursor-grab,svg.cursor-grab text:hover{cursor:grab}svg.cursor-nodrop,svg.cursor-nodrop text:hover{cursor:no-drop}svg.cursor-copy,svg.cursor-copy text:hover{cursor:copy}svg.cursor-move,svg.cursor-move text:hover{cursor:move}#close-btn:focus,#close-btn:hover{color:#000;text-decoration:none;cursor:pointer}#id-select:focus,#pid-select:focus{outline:.5px solid #aeaeae}#sampleDialog #title:hover{cursor:default;background:gray}.light{background-color:#fff;font:13px/28px Helvetica,"Segoe UI",Arial,sans-serif}.dark{background-color:#1e1e1e;font:13px/28px Helvetica,"Segoe UI",Arial,sans-serif}.light .ba-fill{fill:#fff}.dark .ba-fill{fill:#1e1e1e}.dark input,.dark select,.light input,.light select{font:16px Helvetica,"Segoe UI",Arial,sans-serif}.dark h1,.light h1{font-size:30px;line-height:1}.edit-form{position:absolute;border-radius:10px}.export-service .edit-form{border-radius:unset}.dark .edit-form{color:#acacac}.light .edit-form{color:#333}.edit-form .ba-img-button:hover{background-color:#f57c00!important}.dark ::-webkit-calendar-picker-indicator{filter:invert(70%)}.light ::-webkit-calendar-picker-indicator{filter:invert(50%)}.edit-form-instruments{margin:42px 10px 0 10px;text-align:center;min-height:70px}.ba-img-button svg{position:relative;top:12px}.light .bg-toolbar-container svg circle,.light .bg-toolbar-container svg line,.light .bg-toolbar-container svg path{stroke:#8c8c8c!important}.dark .bg-toolbar-container svg circle,.dark .bg-toolbar-container svg line,.dark .bg-toolbar-container svg path{stroke:#8c8c8c!important}.dark .bg-toolbar-container svg rect{fill:#252526!important}.dark .bg-toolbar-container [data-tlbr=minus] svg{border-left:1px solid #5b5b5b!important;border-right:1px solid #5b5b5b!important;border-bottom:1px solid #5b5b5b!important}.dark .bg-toolbar-container [data-tlbr=plus] svg{border-left:1px solid #5b5b5b!important;border-right:1px solid #5b5b5b!important;border-top:1px solid #5b5b5b!important}.dark .bg-toolbar-container [data-tlbr]>svg{border:1px solid #5b5b5b!important;background-color:#252526!important}</style>'
}, void 0 === OrgChart && (OrgChart = {}), void 0 === OrgChart.remote && (OrgChart.remote = {}), OrgChart.LIMIT_NODES = !0, OrgChart.remote._fromResDTO = function(t, e, r, i, a) {
    var n = e[t.id];
    t.x = n.p[0], t.y = n.p[1], t.w = n.p[2], t.h = n.p[3], null != n.ln && (t.leftNeighbor = a[n.ln]), null != n.rn && (t.rightNeighbor = a[n.rn]);
    for (var o = 0; o < t.stChildren.length; o++) OrgChart.remote._fromResDTO(t.stChildren[o], e, r, i, a);
    for (o = 0; o < t.children.length; o++) OrgChart.remote._fromResDTO(t.children[o], e, r, i, a)
}, OrgChart.remote._toReqDTO = function(t, e) {
    var r = {
        p: [t.id, null != t.parent ? t.parent.id : null, null != t.stParent ? t.stParent.id : null, t.w, t.h]
    };
    t.children.length > 0 && (r.c = OrgChart.remote._convertToIdArray(t.children)), t.stChildren.length > 0 && (r.v = OrgChart.remote._convertToIdArray(t.stChildren)), null != t.layout && 0 != t.layout && (r.l = t.layout), t.isAssistant && (r.a = 1), t.isSplit && (r.s = t.isSplit), t.padding && (r.q = t.padding), t.lcn && (r.k = t.lcn), t.stContainerNodes && (r.b = OrgChart.remote._convertToIdArray(t.stContainerNodes)), t._m && (r.m = t._m.id), t.isPartner && (r.i = t.isPartner), t.hasPartners && (r.g = t.hasPartners), t.partnerSeparation && (r.e = t.partnerSeparation), e.push(r);
    for (var i = 0; i < t.stChildren.length; i++) OrgChart.remote._toReqDTO(t.stChildren[i], e);
    for (i = 0; i < t.children.length; i++) OrgChart.remote._toReqDTO(t.children[i], e)
}, OrgChart.remote._toReqLayoutConfigsDTO = function(t) {
    var e = {};
    for (var r in t) {
        var i = t[r];
        e[r] || (e[r] = []), e[r][0] = i.orientation, e[r][1] = i.levelSeparation, e[r][2] = i.mixedHierarchyNodesSeparation, e[r][3] = i.subtreeSeparation, e[r][4] = i.siblingSeparation, e[r][5] = i.layout, e[r][6] = i.columns, e[r][7] = i.collapse, e[r][8] = i.assistantSeparation, e[r][9] = i.partnerNodeSeparation
    }
    return e
}, OrgChart.remote._convertToIdArray = function(t) {
    for (var e = [], r = 0; r < t.length; r++) e.push(t[r].id);
    return e
}, OrgChart.remote._setPositions = function(t, e, r, i) {
    for (var a = [], n = [], o = OrgChart.remote._toReqLayoutConfigsDTO(e), l = 0; l < t.length; l++) n.push(t[l].id), OrgChart.remote._toReqDTO(t[l], a);
    var s = {
        n: a,
        c: o,
        r: n,
        v: "7.13.15"
    };
    if (OrgChart.LIMIT_NODES || (s.l = !0), null != OrgChart.remote._fromReqDTO) OrgChart.remote._fromReqDTO(s.n, s.r, s.c, (function(e) {
        for (var a = 0; a < t.length; a++) OrgChart.remote._fromResDTO(t[a], e, 0, t, i);
        r()
    }));
    else {
        s = JSON.stringify(s);
        var h = OrgChart.localStorage.getItem(s);
        h ? OrgChart.remote._proceed(t, JSON.parse(h), i, r) : OrgChart.remote._findRegion((function(e) {
            OrgChart._ajax(e, "post", s, "json", (function(e) {
                e.error ? r(2) : (OrgChart.remote._proceed(t, e, i, r), OrgChart.localStorage.setItem(s, JSON.stringify(e)))
            }))
        }))
    }
}, OrgChart.remote._proceed = function(t, e, r, i) {
    if ("string" == typeof e && (e = JSON.parse(e)), e.limit && 1 == e.limit) i(e.limit);
    else {
        for (var a = 0; a < t.length; a++) OrgChart.remote._fromResDTO(t[a], e, 0, t, r);
        i()
    }
}, OrgChart.remote._findRegion = function(t) {
    var e = OrgChart.localStorage.getItem("funcUrl");
    if (e) t(e);
    else {
        for (var r = ["au-e", "au-se", "brs", "ca", "ca-e", "easia", "eus-2", "eus", "fr", "ind", "jp-e", "jp-w", "kr", "n-eu", "se-asia", "s-ind", "uk-s", "uk-w", "us", "us-n-c", "us-s-c", "w-c-us", "w-eu", "w-ind", "w-us-2", "wus"], i = [], a = 0; a < r.length; a++) i.push(new XMLHttpRequest);
        for (a = 0; a < r.length; a++) ! function() {
            var e = "https://" + r[a] + "-balkangraph.azurewebsites.net/api/OrgChartJS",
                n = i[a];
            n.onreadystatechange = function() {
                if (4 == this.readyState && 200 == this.status) {
                    OrgChart.localStorage.setItem("funcUrl", e), t(e);
                    for (var r = 0; r < i.length; r++) i[r].abort()
                }
            }, n.open("GET", e, !0), n.send()
        }()
    }
};
