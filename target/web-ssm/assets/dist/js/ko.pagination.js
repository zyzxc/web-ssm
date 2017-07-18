(function (ko, $) {
    (function (koComponent) {
        ko.components.register("ko-pagination", koComponent.component);
        ko.components.koPagination = {
            defaultSetting: koComponent.defaultSetting,
            vmRender: koComponent.vmRender,
            uiRender: koComponent.uiRender
        }
    }(function () {
        var window = this || (0, eval)["this"], vmRender = {
            defaults: function (opts, uiModel, evtModel) {
                var optsMap = ko.toJS(opts), templateHtml = "";
                var renderTotalInfo = function (totalInfo, page) {
                    return $.type(totalInfo) === "string" ? totalInfo.replace(/(PAGE_NO|PAGE_SIZE|TOTAL_PAGE_COUNT|TOTAL_RECORD_COUNT)/gi, function (matchName) {
                        switch (matchName) {
                            case"PAGE_NO":
                                return page.pageNo + 1;
                            case"PAGE_SIZE":
                                return page.pageSize;
                            case"TOTAL_PAGE_COUNT":
                                return page.totalPageCount;
                            case"TOTAL_RECORD_COUNT":
                                return page.totalRecordCount
                        }
                    }) : ""
                };
                this.template = ko.computed(function () {
                    var page = {
                        pageNo: ko.unwrap(opts.pageNo),
                        pageSize: ko.unwrap(opts.pageSize),
                        totalPageCount: ko.unwrap(opts.totalPageCount),
                        totalRecordCount: ko.unwrap(opts.totalRecordCount)
                    };
                    var itemHtmlNodes = [], ceilLeftCount = Math.ceil((optsMap.showPageCount - 1) / 2), ceilRightCount = optsMap.showPageCount - 1 - ceilLeftCount, beginIndex = 0, endIndex = 0, $wrapperTemplate = $("<div></div>"), $pageItem = null;
                    evtModel.unbindEvents($(templateHtml), optsMap);
                    if (!page.totalPageCount) {
                        templateHtml = ""
                    } else {
                        if (!optsMap.visibility.showIfSinglePage && page.totalPageCount == 0) {
                            templateHtml = ""
                        } else {
                            if (optsMap.visibility.showFirstBtn) {
                                if (page.pageNo == 0 && optsMap.visibility.hideFirstBtnIfDisabled) {
                                } else {
                                    itemHtmlNodes.push(uiModel.getFirstItem(optsMap.text.firstBtnText, page.pageNo == 0))
                                }
                            }
                            if (optsMap.visibility.showPrevBtn) {
                                if (page.pageNo == 0 && optsMap.visibility.hidePrevBtnIfDisabled) {
                                } else {
                                    itemHtmlNodes.push(uiModel.getPrevItem(optsMap.text.prevBtnText, page.pageNo == 0))
                                }
                            }
                            if (page.totalPageCount <= page.pageNo + ceilRightCount) {
                                endIndex = page.totalPageCount;
                                beginIndex = Math.max(endIndex - optsMap.showPageCount, 0)
                            } else {
                                if (ceilLeftCount > page.pageNo) {
                                    beginIndex = 0;
                                    endIndex = Math.min(optsMap.showPageCount, page.totalPageCount)
                                } else {
                                    beginIndex = Math.max(0, page.pageNo - ceilLeftCount);
                                    endIndex = Math.min(page.totalPageCount, beginIndex + optsMap.showPageCount)
                                }
                            }
                            var needToFold = false;
                            if (optsMap.visibility.showFoldBtn) {
                                if (page.totalPageCount <= optsMap.showPageCount) {
                                } else {
                                    needToFold = true
                                }
                            }
                            if (needToFold && beginIndex > 0) {
                                $pageItem = $(uiModel.getPageItem(1, page.pageNo == 0));
                                $pageItem.attr("ko.pagination.number", 0);
                                itemHtmlNodes.push($wrapperTemplate.empty().append($pageItem).html());
                                $pageItem = $(uiModel.getFoldItem(optsMap.text.foldBtnText));
                                itemHtmlNodes.push($wrapperTemplate.empty().append($pageItem).html());
                                beginIndex++
                            }
                            if (needToFold && endIndex < page.totalPageCount) {
                                endIndex--
                            }
                            for (var index = beginIndex; index < endIndex; index++) {
                                $pageItem = $(uiModel.getPageItem(index + 1, page.pageNo == index));
                                $pageItem.attr("ko.pagination.number", index);
                                itemHtmlNodes.push($wrapperTemplate.empty().append($pageItem).html())
                            }
                            if (needToFold && endIndex < page.totalPageCount) {
                                $pageItem = $(uiModel.getFoldItem(optsMap.text.foldBtnText));
                                itemHtmlNodes.push($wrapperTemplate.empty().append($pageItem).html());
                                $pageItem = $(uiModel.getPageItem(page.totalPageCount, page.pageNo == page.totalPageCount - 1));
                                $pageItem.attr("ko.pagination.number", page.totalPageCount - 1);
                                itemHtmlNodes.push($wrapperTemplate.empty().append($pageItem).html())
                            }
                            var totalPageCount = page.totalPageCount - 1;
                            if (optsMap.visibility.showNextBtn) {
                                if (page.pageNo == totalPageCount && optsMap.visibility.hideNextBtnIfDisabled) {
                                } else {
                                    itemHtmlNodes.push(uiModel.getNextItem(optsMap.text.nextBtnText, page.pageNo == totalPageCount))
                                }
                            }
                            if (optsMap.visibility.showLastBtn) {
                                if (page.pageNo == totalPageCount && optsMap.visibility.hideLastBtnIfDisabled) {
                                } else {
                                    itemHtmlNodes.push(uiModel.getLastItem(optsMap.text.lastBtnText, page.pageNo == totalPageCount))
                                }
                            }
                            var $pageItemWrapper = $(uiModel.getWrapper());
                            $pageItemWrapper.html(itemHtmlNodes.join(""));
                            var $template = $("<div></div>").append(optsMap.visibility.showTotalInfo ? renderTotalInfo(opts.visibility.totalInfo || uiModel.getTotalInfo(), page) : "").append($pageItemWrapper);
                            evtModel.bindEvents($template, optsMap, page);
                            templateHtml = $template.html()
                        }
                    }
                    return templateHtml
                })
            }
        }, uiRender = {
            defaults: (function () {
                var getPageItem = function (btnText, isCurrentPage, className) {
                    className = className || "";
                    return isCurrentPage ? '<span class="ko-pagination-item disabled ' + className + '">' + btnText + "</span>" : '<a href="javascript:void(0)" class="ko-pagination-item ' + className + '">' + btnText + "</a>"
                };
                return {
                    getWrapper: function () {
                        return '<div class="ko-pagination-wrapper defaults"></div>'
                    }, getFirstItem: function (firstBtnText, isCurrentPage) {
                        return getPageItem(firstBtnText, isCurrentPage, "first")
                    }, getPrevItem: function (prevBtnText, isCurrentPage) {
                        return getPageItem(prevBtnText, isCurrentPage, "prev")
                    }, getPageItem: function (pageBtnText, isCurrentPage) {
                        return isCurrentPage ? '<span class="ko-pagination-item number current">' + pageBtnText + "</span>" : '<a href="javascript:void(0)" class="ko-pagination-item number">' + pageBtnText + "</a>"
                    }, getFoldItem: function (foldBtnText) {
                        return '<span class="ko-pagination-item fold">' + foldBtnText + "</span>"
                    }, getNextItem: function (nextBtnText, isCurrentPage) {
                        return getPageItem(nextBtnText, isCurrentPage, "next")
                    }, getLastItem: function (lastBtnText, isCurrentPage) {
                        return getPageItem(lastBtnText, isCurrentPage, "last")
                    }, getTotalInfo: function () {
                        return '<div class="ko-pagination-info defaults">第 PAGE_NO / TOTAL_PAGE_COUNT 页，共 TOTAL_RECORD_COUNT 条</div>'
                    }
                }
            }())
        }, evtRender = {
            defaults: {
                bindEvents: function ($template, optsMap, page) {
                    var $wrapper = $template.find(".ko-pagination-wrapper"), clickCallback = $.isFunction(optsMap.callback.click) ? function (number) {
                        optsMap.callback.click(number)
                    } : $.noop, wrapperId = $wrapper.attr("id");
                    if (!wrapperId) {
                        wrapperId = "ko-pagination-wrapper-" + (new Date()).getTime();
                        $wrapper.attr("id", wrapperId)
                    }
                    (function (wrapperId, page) {
                        setTimeout(function () {
                            var $wrapper = $("#" + wrapperId);
                            $wrapper.delegate(".ko-pagination-item.number:not(.current)", "click.defaults", function () {
                                var $pageItem = $(this), number = +$pageItem.attr("ko.pagination.number") || 0;
                                clickCallback(number)
                            });
                            $wrapper.find(".ko-pagination-item.first").on("click.defaults", function () {
                                if (page.pageNo !== 0) {
                                    clickCallback(0)
                                }
                            });
                            $wrapper.find(".ko-pagination-item.prev").on("click.defaults", function () {
                                if (page.pageNo > 0) {
                                    clickCallback(page.pageNo - 1)
                                }
                            });
                            $wrapper.find(".ko-pagination-item.next").on("click.defaults", function () {
                                if (page.pageNo < page.totalPageCount - 1) {
                                    clickCallback(page.pageNo + 1)
                                }
                            });
                            $wrapper.find(".ko-pagination-item.last").on("click.defaults", function () {
                                if (page.pageNo !== page.totalPageCount - 1) {
                                    clickCallback(page.totalPageCount - 1)
                                }
                            })
                        }, 50)
                    }(wrapperId, page))
                }, unbindEvents: function ($template) {
                    if ($template && $template.length) {
                        var $wrapper = $template.find(".ko-pagination-wrapper");
                        $wrapper.undelegate();
                        $wrapper.find(".ko-pagination-item").off("click.defaults")
                    }
                }
            }
        }, setting = {
            pageNo: 0,
            pageSize: 10,
            totalPageCount: 0,
            totalRecordCount: 0,
            vmRender: "defaults",
            uiRender: "defaults",
            evtRender: "defaults",
            paginationClass: "",
            showPageCount: 7,
            sidePageCountIfFold: 1,
            visibility: {
                showIfSinglePage: true,
                showFirstBtn: true,
                showLastBtn: true,
                showPrevBtn: true,
                showNextBtn: true,
                hideFirstBtnIfDisabled: true,
                hidePrevBtnIfDisabled: false,
                hideNextBtnIfDisabled: false,
                hideLastBtnIfDisabled: true,
                showFoldBtn: true,
                showTotalInfo: true
            },
            text: {
                foldBtnText: "...",
                firstBtnText: "首页",
                prevBtnText: "上一页",
                nextBtnText: "下一页",
                lastBtnText: "尾页",
                totalInfo: ""
            },
            callback: {
                click: function () {
                    return true
                }
            }
        };
        var koPagination = {
            viewModel: {
                createViewModel: function (paramMap, compontInfo) {
                    var opts = $.extend(true, {}, setting, paramMap);
                    if (!vmRender[opts.vmRender]) {
                        opts.vmRender = "defaults"
                    }
                    if (!uiRender[opts.uiRender]) {
                        opts.uiRender = "defaults"
                    }
                    if (!evtRender[opts.evtRender]) {
                        opts.evtRender = "defaults"
                    }
                    var viewModel = vmRender[opts.vmRender], uiModel = uiRender[opts.uiRender], evtModel = evtRender[opts.evtRender];
                    return new viewModel(opts, uiModel, evtModel)
                }
            }, template: '<div data-bind="html: template"></div>'
        };
        return {component: koPagination, defaultSetting: setting, vmRender: vmRender, uiRender: uiRender}
    }()))
}(ko, jQuery));