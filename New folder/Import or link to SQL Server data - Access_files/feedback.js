var g_nSubmitAnimationId=null,g_nTimedOutAnimationId=null,g_fAllowSubmitAnimation=false;function GetJQueryObject(a){if(a)if(a.jquery)return a;else return $("#"+a);return $([])}function PerformSubmit(a,b){var c=$("#"+a+" > a.idFeedbackSubmit").data("state");c!="disabled"&&b.call()}function FixTextareaWidth(a){if(typeof a==="undefined"||a==null)return;a=GetJQueryObject(a);a.find(".cdFeedbackTextarea").each(function(){var c=$(this),e=c.siblings(".cdFeedbackCharRemaining"),b=a.width(),d=b,m=c.css("padding-left"),k=c.css("padding-right"),h=parseInt(m),f=parseInt(k);if(!isNaN(h)&&!isNaN(f))b=b-h-f;var n=c.css("border-left-width"),l=c.css("border-right-width"),i=parseInt(n),g=parseInt(l);if(!isNaN(i)&&!isNaN(g))b=b-i-g;if(b<0)b=0;c.width(b);e.width(b);var j=a.width();if(j>d){b=b-(j-d);if(b<0)b=0;c.width(b);e.width(b)}})}function AddToFollowUpQuestion(a,b){var c="undefined";if(typeof a===c||a==null||typeof b===c||b==null)return;!Array.contains(a,b)&&Array.add(a,b)}this.AddToFollowUpQuestion=AddToFollowUpQuestion;function MergeFeedbackValues(c){var a="",b=true;c.each(function(){if(!b)a=a+",";a=a+$(this).data("feedbackValue");b=false});return a}function SelectStars(b,g,e,f,d){var c="selected";if($("#"+b).attr("state")!=c){$("#"+b).attr("state",c);for(var a=0;a<f;a++)a<e&&$("#"+g+"-"+a).attr("src",d)}}function InitGlobalFeedbackVariables(){var a="undefined";if(typeof g_feedbackControlStore===a||!g_feedbackControlStore)g_feedbackControlStore=new FeedbackControlStore;if(typeof g_feedbackInitQuestionCache===a||!g_feedbackInitQuestionCache)g_feedbackInitQuestionCache=new FeedbackInitQuestionCache}FeedbackState=function(){};FeedbackState.prototype={StarNotClicked:0,StarClicked:1,FeedbackSubmitted:2};FeedbackState.registerEnum("FeedbackState",false);SubmitAnimationState=function(){};SubmitAnimationState.prototype={NoAnimation:0,AnimationStarted:1,DataLoadedQuick:2,AnimationCanStop:3,DataLoadedSlow:4,AnimationTimedOut:5};SubmitAnimationState.registerEnum("SubmitAnimationState",false);function FeedbackInitQuestionCache(){var b=this,a=[];function d(c,b){a[c]=b}b.AddEntry=d;function e(b){return a[b]}b.GetEntry=e;function c(b){delete a[b]}b.DeleteEntry=c;function f(){Array.clear(a)}b.Clear=f}function FeedbackControlStore(){var b=this,a=[];function d(c,b){a[c]=b}b.AddEntry=d;function e(b){return a[b]}b.GetEntry=e;function c(b){delete a[b]}b.DeleteEntry=c;function f(){Array.clear(a)}b.Clear=f}function FeedbackControl(Bb,ub,pb,gb,qb){var u="cdBtnDisabled",C="disabled",i="state",B="a.idFeedbackSubmit",H="ThankYou",G=".cdFeedbackDropDown:visible",t=".cdFeedbackCompressedStar",s="function",j=".cdFeedbackCharRemaining",q=".cdFeedbackTextarea",b="undefined",p=false,a=null,f="",c=this,h=c,w=Bb,n=ub,lb=pb,fb=gb,mb=qb,Gb=OOUtil.GenerateGuid(),y=f,d=$([]),F=a,o=$([]),g=a,P=0,T=0,O=p,xb=Y(),ob=bb(),e=a,A=FeedbackState.StarNotClicked,k=a,D=a;$(window).resize(X);var r=a,l=a,m=a,v=a,S=a;function zb(a){A=a}c.UpdateState=zb;function Eb(){return A}c.GetState=Eb;function Db(){return e}c.GetHover=Db;function ab(){return k!=a&&k.GetSubmitAnimState()!=SubmitAnimationState.NoAnimation}c.IsSubmitAnimating=ab;function rb(){return n}c.GetFeedbackKey=rb;function Ab(c){if(typeof c!==b&&c!=a)xb=c}c.SetQueryId=Ab;function X(){d.find(q).width(0);d.find(j).width(0);FixTextareaWidth(d);z();e!=a&&!ab()&&e.hide()}c.WindowResizeHandler=X;function bb(){var c=OOUtil.GetQueryStringArray();if(typeof c["qu"]===b||c["qu"]==a)return f;return c["qu"]}c.GetFeedbackQuery=bb;function Y(){if(typeof StrGetArgumentValue!==b){var c=StrGetArgumentValue("CTT");if(c!=a&&c==OOC.CTT.Search)return GetCookie("quid",f)}return f}c.GetFeedbackQueryId=Y;function N(){if(typeof StrGetArgumentValue!==b)return StrGetArgumentValue("origin");return f}c.GetOriginAssetId=N;function hb(){A=FeedbackState.StarNotClicked;e&&e.dispose();e=a;g_fAllowSubmitAnimation=p;g_nSubmitAnimationId&&window.clearTimeout(g_nSubmitAnimationId);g_nTimedOutAnimationId&&window.clearTimeout(g_nTimedOutAnimationId);var c=a;if(typeof g_feedbackInitQuestionCache!==b&&g_feedbackInitQuestionCache!=a)c=g_feedbackInitQuestionCache.GetEntry(n);if(typeof c!==b&&c!=a)if(g!=a)return;else I(c);else typeof GlobalSvc!==b&&typeof GlobalSvc.GetFeedbackInitialQuestion===s&&GlobalSvc.GetFeedbackInitialQuestion(n,w,g!=a?U:I)}c.LoadInitialQuestionGroup=hb;function yb(a){F=GetJQueryObject(a)}c.SetToggleDiv=yb;function z(){var c="dvRefresh";if(typeof F!==b&&F!=a)F.toggleClass(c);else{d.toggleClass(c);o.toggleClass(c)}}c.ToggleRefreshClass=z;function nb(c){if(typeof c!==b&&c!=a&&(g==a||g.length==0))g=GetJQueryObject(c)}function R(e,c){var f=GetJQueryObject(e);d=f;d.addClass("cdFeedbackContainer");if(typeof c!==b&&c!=a)g=GetJQueryObject(c)}c.SetFullParent=R;function tb(a,c){var b=GetJQueryObject(a);o=b;nb(c)}c.SetStarsParent=tb;function sb(){return o}c.GetStarsParent=sb;function vb(){return g}c.GetStarsLabel=vb;function db(b){if(b!=a){if(b.Version!=a)y=b.Version;else y=f;if(b.RenderedHtml!=a){o.html(b.RenderedHtml);z()}}}c.DisplayStars=db;function wb(a,b,c){P=b;T=c;O=a}c.SetStarsValue=wb;function Cb(){if(O){var a=new ReadOnlyStarsControl(P,T,h);a.Render(o);z()}else typeof GlobalSvc!==b&&typeof GlobalSvc.GetFeedbackStars===s&&GlobalSvc.GetFeedbackStars(n,w,O,P,T,db)}c.LoadStars=Cb;function U(c){if(c!=a){typeof g_feedbackInitQuestionCache!==b&&g_feedbackInitQuestionCache!=a&&g_feedbackInitQuestionCache.AddEntry(n,c);if(c.Version!=a)y=c.Version;else y=f}}function I(c){if(c!=a)U(c);else if(typeof g_feedbackInitQuestionCache!==b&&g_feedbackInitQuestionCache!=a)c=g_feedbackInitQuestionCache.GetEntry(n);if(e){e.show();return}if(c!=a){if(g!=a){var j=$(t,o);e=new OOC.FeedbackHover({ref:j},a,a,h);e.display();R(e.dvWrapper)}for(var i=p,f=0;f<c.FeedbackQuestions.length;f++){if(c.FeedbackQuestions[f].QuestionType!=3&&c.FeedbackQuestions[f].QuestionType!=5&&c.FeedbackQuestions[f].QuestionType!=6)i=true;Q(c.FeedbackQuestions[f])}i&&M()}W();$(G).oodropdown();K();FixTextareaWidth(d);OOC.Chrome.AddBtnFocusEvents();J();z()}c.DisplayInitialQuestionGroup=I;function W(){if(g==a||e==a)return;e.updatePosition()}function eb(){A=FeedbackState.FeedbackSubmitted;$(t,o).find("a").removeAttr("href");e.dispose();e=a}function L(){typeof GlobalSvc!==b&&typeof GlobalSvc.GetFeedbackQuestion!==b&&GlobalSvc.GetFeedbackQuestions(n,[H],w,E)}c.LoadThankYouQuestion=L;function E(c,n){if(k&&g!=a){var j=k.GetSubmitAnimState();if(j==SubmitAnimationState.AnimationStarted){k.SetSubmitAnimState(SubmitAnimationState.DataLoadedQuick);D=c;return}if(j==SubmitAnimationState.AnimationCanStop){k.SetSubmitAnimState(SubmitAnimationState.DataLoadedSlow);D=c;k.StopAnimation();return}if(j==SubmitAnimationState.AnimationTimedOut)return;if(j==SubmitAnimationState.DataLoadedQuick||j==SubmitAnimationState.DataLoadedSlow){c=D;D=a}}if(c!=a){if(c.Version!=a)y=c.Version;else y=f;var m=p;if(g!=a)if(A==FeedbackState.FeedbackSubmitted){var q=2e3;e.dvWrapper.height(e.dvWrapper.height());e.dvWrapper.css("line-height",e.dvWrapper.height().toString()+"px");e.dvWrapper.empty();window.setTimeout(eb,q)}else{var r=430;e.dispose();var s=$(t,o);e=new OOC.FeedbackHover({ref:s},a,r,h,n);e.display();W();R(e.dvWrapper)}for(var i=0;i<c.FeedbackQuestions.length;i++){if(c.FeedbackQuestions[i].QuestionType!=3&&c.FeedbackQuestions[i].QuestionType!=5&&c.FeedbackQuestions[i].QuestionType!=6)m=true;Q(c.FeedbackQuestions[i])}m&&M();(typeof g_strQRCUrl===b||g_strQRCUrl===f)&&$(".cdQRCLink").hide()}$(G).oodropdown();K();FixTextareaWidth(d);J();OOC.Chrome.AddBtnFocusEvents();z();var l=d.find("a, input, textarea").get(0);if(l){l.focus();$("html,body").animate({scrollTop:$(this).scrollTop()+($(l).offset().top-$(this).scrollTop())+$(l).height()},500)}}c.DisplayQuestionGroup=E;function M(){var b="<input type='button'/>",a=$("<div/>").addClass("cdFeedbackSubmitButton");d.append(a);$(b).attr({value:g_strFeedbackSubmit}).addClass("idFeedbackSubmit").click(cb).appendTo(a).oobutton();if(g){$("<span class='cdFeedbackButtonSpace'/>").appendTo(a);$(b).attr({value:OOUI.L_Feedback_Skip}).click(eb).appendTo(a).oobutton()}}c.RenderSubmitButton=M;function cb(){var j="feedbackValue",c="followUpQuestion",f="feedbackQuestion",e="questionId",b="{0}{1};";r=a;l=a;m=a;v=a;S=a;if(d.find(B).data(i)!=C){var k=[];A=FeedbackState.FeedbackSubmitted;$(t,o).find("a").removeAttr("href");d.find(".cdFeedbackDropDown > option:selected").each(function(){var a=this;r=String.format(b,r,$(a).data(e));l=String.format(b,l,$(a).data(f));m=String.format(b,m,$(a).data("value"));AddToFollowUpQuestion(k,$(a).data(c))});d.find(".cdFeedbackCheckboxDiv").each(function(){var a=$(this).find("input:checkbox:checked");a.each(function(){var a=this;r=String.format(b,r,$(a).data(e));l=String.format(b,l,$(a).data(f));m=String.format(b,m,$(a).data(j));AddToFollowUpQuestion(k,$(a).data(c))})});d.find("input:radio:checked").each(function(){var a=this;r=String.format(b,r,$(a).data(e));l=String.format(b,l,$(a).data(f));m=String.format(b,m,$(a).data(j));AddToFollowUpQuestion(k,$(a).data(c))});d.find(q).each(function(){if($(this).val().length==0)v=String.format(b,v,"None");else v=String.format(b,v,$(this).val());AddToFollowUpQuestion(k,$(this).data(c))});g==a&&d.empty();h.LogFeedbackToWebTrends();h.LoadQuestionGroups(k)}else return p}c.SubmitFeedback=cb;function V(){if(typeof dcsOO!==b){var e=lb=="Site"?"1":f,d=w;if(d==a||d.length==0)d=N();var c=GetCookie("quid");if(!c){c=StrGetQueryParamValue(window.location.href,"queryid");if(c==a)c=f;else c=decodeURI(c)}dcsOO("WT.dl",2,"DCSext.oo_assetid",d,"WT.oss",ob,"DCSext.WT.z_searchid",c,"DCSext.WT.z_ratingsTrig","1","DCSext.WT.z_FBSite",e,"DCSext.WT.z_FBRating",S,"DCSext.WT.z_FBQuestionText",l,"DCSext.WT.z_FBAnswer",m,"DCSext.WT.z_FBComment",v)}}c.LogFeedbackToWebTrends=V;function jb(f,e,g,c){if(typeof c===b||c==a)c=g_feedbackNullValue;r=f;l=e;m=g;v=a;S=c.toString();V();var d=w;if(d==a||d.length==0)d=N();LogToAzure(d,"Rated",c)}c.LogRatingToWebTrends=jb;function Q(a){switch(a.QuestionType){case 0:(new FeedbackTextareaControl(a,h)).Render(d);break;case 1:(new FeedbackRadioControl(a,h)).Render(d);break;case 2:(new FeedbackCheckboxControl(a,h)).Render(d);break;case 3:(new FeedbackButtonControl(a,h)).Render(d);break;case 4:(new FeedbackDropdownControl(a,h)).Render(d);break;case 5:k=new FeedbackStarsControl(a,h);k.Render(d);break;case 6:(new FeedbackLabelControl(a,h)).Render(d)}}c.RenderQuestion=Q;function K(){var b=d.find(".cdFeedbackDropDown > option:selected[value=null]").length==0,a=d.find(B);if(b){a.data(i,"enabled");a.removeClass(u)}else{a.data(i,C);a.addClass(u)}}c.UpdateFeedbackDropDown=K;function J(){var a=d.find(".cdFeedbackTextareaDiv");a.each(function(){var a=this,b=$(a).children(q);b.bind("keyup",a,x);b.bind("change",a,x);b.bind("paste",a,x);x({data:a})})}c.ValidateAllFeedbackTextarea=J;function x(f){var e="cdFeedbackError";if(f.data==a)return;if(f.type=="paste"){OOUtil.Timer(x,100,{data:f.data});return}var b=$(f.data),l=b.children(q),c=d.find(B),k=l.val(),g=500,h=g-k.length;if(h<0){b.find(j).addClass(e);c.data(i,C);c.addClass(u);b.find(j).html(String.format(g_strCharOver,k.length,g))}else{b.find(j).removeClass(e);c.data(i,"enabled");c.removeClass(u);b.find(j).html(String.format(g_strCharRemaining,h))}}c.ValidateFeedbackTextarea=x;function kb(a){Z([a])}c.LoadQuestionGroup=kb;function Z(a){if(fb&&Array.contains(a,"ProductivityQuestion")||mb)a=[H];typeof GlobalSvc!==b&&typeof GlobalSvc.GetFeedbackQuestions===s&&GlobalSvc.GetFeedbackQuestions(n,a,w,E,L)}c.LoadQuestionGroups=Z;function ib(c){var a=[];c.each(function(){a.push($(this).attr("followUpQuestionGroupId"))});typeof GlobalSvc!==b&&typeof GlobalSvc.GetFeedbackQuestions===s&&GlobalSvc.GetFeedbackQuestions(n,a,w,E,L)}c.LoadMultiQuestionGroups=ib;function Fb(){e!=a&&e.dvHover.hide();d.empty()}c.Clear=Fb}function FeedbackRadioControl(c,b){var a=c,e=b;function d(k){var c="<div/>",b=null;if(typeof a==="undefined"||a==b)return;var e=GetJQueryObject(k);if(e.length==0)return;a.Title!=b&&a.Title.length>0&&e.append($(c).addClass("cdFeedbackTitle").html(a.Title));a.Text!=b&&a.Text.length>0&&e.append($(c).addClass("cdFeedbackText").html(a.Text));var l=OOUtil.GenerateGuid();if(a.QuestionAnswer!=b&&a.QuestionAnswer.Values!=b){for(var h=$(c).addClass("cdFeedbackRadioDiv"),g=0;g<a.QuestionAnswer.Values.length;g++){var j=OOUtil.GenerateGuid(),d=a.QuestionAnswer.Values[g],f=$(c),i=$("<input />").addClass("cdFeedbackRadio").attr("id",j).attr("name",l).attr("type","radio").data("questionId",a.Id).data("answerId",d.Id).data("feedbackQuestion",GetQuestionTitle(a)).data("feedbackValue",d.Value).data("feedbackNumericValue",d.NumericValue).data("followUpQuestion",d.FollowUpQuestion);d.Default&&i.attr("checked","checked");f.append(i);f.append($("<label />").addClass("cdFeedbackInputLabel").attr("for",j).append(d.Text));h.append(f)}e.append(h)}}this.Render=d}function FeedbackCheckboxControl(c,b){var a=c,e=b;function d(i){var c="<div/>",b=null;if(typeof a==="undefined"||a==b)return;var e=GetJQueryObject(i);if(e.length==0)return;a.Title!=b&&a.Title.length>0&&e.append($(c).addClass("cdFeedbackTitle").html(a.Title));a.Text!=b&&a.Text.length>0&&e.append($(c).addClass("cdFeedbackText").html(a.Text));var j=OOUtil.GenerateGuid();if(a.QuestionAnswer!=b&&a.QuestionAnswer.Values!=b){for(var g=$(c).addClass("cdFeedbackCheckboxDiv"),f=0;f<a.QuestionAnswer.Values.length;f++){var h=OOUtil.GenerateGuid(),d=a.QuestionAnswer.Values[f];g.append($(c).append($("<input />").addClass("cdFeedbackCheckbox").attr("id",h).attr("name",j).attr("type","checkbox").data("questionId",a.Id).data("answerId",d.Id).data("feedbackQuestion",GetQuestionTitle(a)).data("feedbackValue",d.Value).data("feedbackNumericValue",d.NumericValue).data("followUpQuestion",d.FollowUpQuestion)).append($("<label />").addClass("cdFeedbackInputLabel").attr("for",h).append(d.Text)))}e.append(g)}}this.Render=d}function FeedbackButtonControl(j,h){var g="followUpQuestion",f="feedbackNumericValue",e="feedbackValue",d="questionId",c="undefined",a=j,b=h;function k(n){var h="<div/>",b=null;if(typeof a===c||a==b)return;var j=GetJQueryObject(n);if(j.length==0)return;a.Title!=b&&a.Title.length>0&&j.append($(h).addClass("cdFeedbackTitle").html(a.Title));a.Text!=b&&a.Text.length>0&&j.append($(h).addClass("cdFeedbackText").html(a.Text));var l=$(h).addClass("cdFeedbackButtonGroup");j.append(l);if(a.QuestionAnswer!=b&&a.QuestionAnswer.Values!=b)for(var k=0;k<a.QuestionAnswer.Values.length;k++){var i=a.QuestionAnswer.Values[k],m=$("<span class='cdFeedbackButton'/>");m.appendTo(l);$("<input type='button'/>").attr({value:i.Text}).click(this.ButtonClick).data(d,a.Id).data("answerId",i.Id).data(e,i.Value).data(f,i.NumericValue).data(g,i.FollowUpQuestion).appendTo(m).oobutton()}}this.Render=k;function i(){var h=this;if(typeof b!==c){b.LogRatingToWebTrends($(h).data(d),GetQuestionTitle(a),$(h).data(e),$(h).data(f));var i=$(h).data(g);b.Clear();b.LoadQuestionGroup(i)}}this.ButtonClick=i}function FeedbackTextareaControl(c,b){var a=c,e=b;function d(h){var c="<div/>",b=null,e="undefined";if(typeof a===e||a==b)return;var f=GetJQueryObject(h);if(f.length==0)return;a.Title!=b&&a.Title.length>0&&f.append($(c).addClass("cdFeedbackTitle").html(a.Title));var d=$(c).addClass("cdFeedbackTextareaDiv"),g=$("<textarea />").addClass("cdFeedbackTextarea").data("questionId",a.Id).css("width","0px").data("feedbackQuestion",GetQuestionTitle(a)).data("followUpQuestion",a.QuestionAnswer.FollowUpQuestion);a.QuestionAnswer!=b&&a.QuestionAnswer.Title!=b&&g.attr("title",a.QuestionAnswer.Title);a.QuestionAnswer!=b&&a.QuestionAnswer.DefaultText!=b&&g.attr("text",a.QuestionAnswer.DefaultText);d.append(g);d.append($(c).addClass("cdFeedbackCharRemaining"));typeof g_strFeedbackLegal!==e&&g_strFeedbackLegal!=b&&d.append($(c).addClass("cdFeedbackLegal").html(g_strFeedbackLegal));f.append(d);a.Text!=b&&a.Text.length>0&&f.append($(c).addClass("cdFeedbackText").html(a.Text))}this.Render=d}function FeedbackLabelControl(c,b){var a=c,e=b;function d(b){if(typeof a==="undefined"||a==null||a.QuestionAnswer==null)return;b.append(a.QuestionAnswer.Output)}this.Render=d}function FeedbackDropdownControl(d,c){var a=d,b=c;function e(i){var e="<div/>",c=null;if(typeof a==="undefined"||a==c)return;var f=GetJQueryObject(i);if(f.length==0)return;a.Title!=c&&a.Title.length>0&&f.append($(e).addClass("cdFeedbackTitle").html(a.Title));a.Text!=c&&a.Text.length>0&&f.append($(e).addClass("cdFeedbackText").html(a.Text));var h=$("<select>").addClass("cdFeedbackDropDown").change(b.UpdateFeedbackDropDown);if(a.QuestionAnswer!=c&&a.QuestionAnswer.Values!=c)for(var g=0;g<a.QuestionAnswer.Values.length;g++){var d=a.QuestionAnswer.Values[g];$("<option/>").attr("value",d.Value).attr("title",d.Text).prop("selected",d.Default).data("questionId",a.Id).data("answerId",d.Id).data("value",d.Value).data("feedbackQuestion",GetQuestionTitle(a)).data("followUpQuestion",d.FollowUpQuestion).text(d.Text).appendTo(h)}f.append($(e).addClass("cdFeedbackDropDownDiv").append(h))}this.Render=e}OOC.FeedbackHover=function(c,f,g,e,d){var b=null,a=this;OOC.FeedbackHover.initializeBase(a,[c,g,b,f,a.MouseLeave]);a._Title=b;a.feedbackControl=e;a.initialize(c);a.dvWrapper=b;a.dvAccent=b;a.jqBorders=b;a.initialQuestionAnswer=d;a.animWidth=0;a.animHeight=0;a.fHiding=false;var h=b};OOC.FeedbackHover.prototype={initialize:function(b){var a=this;_self=a;if(typeof b==="object"){OOC.FeedbackHover.callBaseMethod(a,"initialize",[b]);a._Position={left:0,top:0};OOC.FeedbackHover.callBaseMethod(a,"createcontainer")}},MouseLeave:function(){},display:function(){var a=this;a.dvWrapper=$("<div/>").addClass("cdFeedbackWrapper").appendTo(a.dvHoverContent);OOC.FeedbackHover.callBaseMethod(a,"display");a.cacheBackground()},removeBackground:function(){this.jqBorders.css("background-image","none")},restoreBackground:function(){this.jqBorders.each(function(){$(this).css("background-image",$(this).data("originalBackground"))})},show:function(){var b=true,a=this;if(!a.dvHover.is(":visible"))if(a.feedbackControl.GetState()==FeedbackState.StarClicked){a.dvWrapper.stop(b,b);a.dvWrapper.show();a.dvHover.stop(b,b);a.dvHover.hide();a.dvHover.width(_self.animWidth);a.dvHover.height(_self.animHeight);a.dvHover.css("marginLeft",0);if(a.dvAccent!=null){a.dvAccent.stop(b,b);a.dvAccent.remove();a.dvAccent=null}a.fHiding=false;a.removeBackground();a.dvWrapper.hide();var c=a;a.dvHover.stop(b,b).fadeIn(400,function(){c.dvWrapper.show();c.restoreBackground();c.updatePosition()})}else{a.dvHover.show();a.updatePosition()}},updatePosition:function(){var a=this,f=a.feedbackControl.GetStarsParent(),n=a.feedbackControl.GetStarsLabel(),m=a.feedbackControl.GetState(),l=f;if(m==FeedbackState.StarClicked&&n)l=n;var h=f.offset().top,o=a.dvWrapper.css("paddingTop"),j=parseInt(o);if(isNaN(j))j=0;var p=a.dvHover.css("borderTopWidth"),k=parseInt(p);if(isNaN(k))k=0;if(m==FeedbackState.StarClicked)h=f.offset().top+f.height();else{h-=j+k;h+=1}var c=l.offset().left,i=a.dvWrapper.css("marginLeft"),e=parseInt(i);if(isNaN(e))e=0;i=a.dvHover.css("borderLeftWidth");var g=parseInt(i);if(isNaN(g))g=0;if(OOUtil.FIsRtl())c-=a.dvWrapper.width()+g-l.width()+e;else c-=e+g;var b=$("#cdCntPane");if(b.width()>=a.dvHover.outerWidth()&&a.feedbackControl.GetFeedbackKey()!=="Video"){var d=parseInt(b.css("paddingLeft"));if(c<b.offset().left+d)c=b.offset().left+d;if(c>b.offset().left+d+b.width()-a.dvHover.outerWidth())c=b.offset().left+d+b.width()-a.dvHover.outerWidth()}a._Position={top:h,left:c};a.CalculatePos()},animateClose:function(){_self.dvHover.hide();_self.dvHover.width(_self.animWidth);_self.dvHover.height(_self.animHeight);_self.dvHover.css("marginLeft",0);_self.dvWrapper.show();_self.dvAccent=$("<div/>").addClass("cdFeedbackAccent").appendTo(_self.feedbackControl.GetStarsParent());var i=_self.feedbackControl.GetStarsParent().offset().top,g=_self.dvAccent.css("paddingTop"),c=parseInt(g);if(isNaN(c))c=0;_self.dvAccent.css("top",i-1-c);var h=$(".cdFeedbackCompressedStar",_self.feedbackControl.GetStarsParent()).offset().left,f=_self.dvAccent.css("paddingLeft"),b=parseInt(f);if(isNaN(b))b=0;_self.dvAccent.css("left",h-1-b);var d=0;if(typeof _self.initialQuestionAnswer!=="undefined"&&_self.initialQuestionAnswer!=null)d=parseFloat(_self.initialQuestionAnswer);var e=new ReadOnlyStarsControl(d,-1,_self.feedbackControl);e.Render(_self.dvAccent);_self.dvAccent.hide();var a=_self.dvAccent;a.fadeIn(300,function(){a.fadeOut(700,function(){a.remove();a=null;_self.fHiding=false})})},animateMinimize:function(){_self.animWidth=_self.dvHover.width();_self.animHeight=_self.dvHover.height();var a=$(".cdFeedbackCompressedStar",_self.feedbackControl.GetStarsParent()),d=_self.feedbackControl.GetStarsLabel(),c=a.width()+20,b=0;b=a.offset().left-_self.dvHover.offset().left-10;_self.dvHover.animate({width:c,height:0,marginLeft:b},400,null,_self.animateClose)},hide:function(){var a=this;if(a.dvHover.is(":visible")&&!a.fHiding)if(a.feedbackControl.GetState()==FeedbackState.StarClicked){a.fHiding=true;a.dvHover.stop(true,true);a.dvWrapper.show();a.dvHoverContent.height(a.dvHoverContent.height());a.dvWrapper.fadeOut(300,a.animateMinimize)}else a.dvHover.hide()},cacheBackground:function(){var a=this;a.jqBorders=$(".dvHBR",a.dvHover).add(".dvHBC",a.dvHover).add(".dvHBT",a.dvHover).add(".dvHBB",a.dvHover);a.jqBorders.each(function(){$(this).data("originalBackground",$(this).css("background-image"))})}};OOC.FeedbackHover.registerClass("OOC.FeedbackHover",OOC.HoverBase);function FeedbackStarsControl(K,E){var i=".cdFeedbackCompressedStar",h="selected",e="src",n="followUpQuestion",g="feedbackNumericValue",m="feedbackValue",l="questionId",f="index",q="cdFeedbackCompressedStar",k="undefined",a=null,p="rating",j=this,d=K,b=E,o=$([]),r=OOUtil.FIsRtl()?"_rtl":"",u=OOUtil.GetCodeImage(p,String.format("orange_star_empty{0}.png",r)),A=OOUtil.GetCodeImage(p,String.format("orange_star_filled{0}.png",r)),y=OOUtil.GetCodeImage(p,String.format("blue_star_empty{0}.png",r)),N=OOUtil.GetCodeImage(p,String.format("blue_star_filled{0}.png",r)),s="active",x=a,z=a,v=0,t=a,c=SubmitAnimationState.NoAnimation;function B(){return c}j.GetSubmitAnimState=B;function C(a){c=a}j.SetSubmitAnimState=C;function M(A){var j="answerId",c="<div/>",r=this,p=GetJQueryObject(A);if(p.length==0)return;if(typeof d===k||d==a)return;var x=5,z=13,B=x*z;b.GetStarsLabel()==a&&d.Title!=a&&d.Title.length>0&&p.append($(c).addClass("cdFeedbackTitle").addClass("cdFeedbackStarPadding").html(d.Title));var w=$(c).addClass(q);o=$(c).css("width",B+"px").css("overflow","hidden").mouseleave(r.EmptyStars);for(var i=0,h=0;h<x;h++){var s="ThankYou",v="",t=a;if(typeof d.QuestionAnswer.Values[h]!==k){s=d.QuestionAnswer.Values[h].FollowUpQuestion;v=d.QuestionAnswer.Values[h].Value;t=d.QuestionAnswer.Values[h].Id}o.append($("<a />").attr("href","javascript:void(0);").data(f,i).data(l,d.Id).data(j,t).data(m,v).data(g,h*25).data(n,s).click(r.ClickStar).append($("<img>").attr("id","FeedbackSelectableStar-"+i).attr(e,b.GetStarsLabel()==a?y:u).attr("alt",String.format(g_strFeedbackROStarsTooltip,i+1)).attr("title",String.format(g_strFeedbackROStarsTooltip,i+1)).data(f,i).data(l,d.Id).data(j,t).data(m,v).data(g,h*25).data(n,s).mouseover(r.HoverStars).click(r.ClickStar)));i=i+1}o.appendTo(w);w.appendTo(p);b.GetStarsLabel()!=a&&p.append($(c).addClass("cdFeedbackSubtitle").html(OOUI.L_Feedback_Click_To_Rate))}j.Render=M;function I(){if(s!=h){var a=$(this).data(f);o.find("img").each(function(){var b=$(this).data(f);if(b<=a)$(this).attr(e,A);else $(this).attr(e,u)})}}j.HoverStars=I;function J(){var a=this;if(s!=h){s=h;if(typeof b!==k){b.LogRatingToWebTrends($(a).data(l),GetQuestionTitle(d),$(a).data(m),$(a).data(g));var c=$(a).data(n);G(c,$(a).data(g))}}}j.ClickStar=J;function H(){s!=h&&o.find("img").attr(e,b.GetStarsLabel()==a?y:u)}j.EmptyStars=H;function L(){for(var c=3,a="",b=0;b<=v;b++)a+=".";z.html(a);v++;v%=c}function w(){if(!g_fAllowSubmitAnimation)return;if(c==SubmitAnimationState.AnimationStarted)c=SubmitAnimationState.AnimationCanStop;else if(c==SubmitAnimationState.DataLoadedQuick||c==SubmitAnimationState.DataLoadedSlow||c==SubmitAnimationState.AnimationTimedOut){window.clearInterval(x);g_nSubmitAnimationId=a;g_nTimedOutAnimationId&&window.clearTimeout(g_nTimedOutAnimationId);g_nTimedOutAnimationId=a;var d=b.GetStarsParent();if(!d)return;$(i,d).fadeOut("slow",function(){$(this).remove();var e=parseFloat(t),f=new ReadOnlyStarsControl(e,-1,b);f.Render(d);if(c==SubmitAnimationState.AnimationTimedOut)$(i,d).find("a").removeAttr("href");else{b.DisplayQuestionGroup(a,t);c=SubmitAnimationState.NoAnimation}b.ToggleRefreshClass()})}}j.StopAnimation=w;function D(){if(c==SubmitAnimationState.AnimationStarted||c==SubmitAnimationState.AnimationCanStop){c=SubmitAnimationState.AnimationTimedOut;w()}}function F(){if(!g_fAllowSubmitAnimation)return;var f=400,d=1600,e=2e4,a=b.GetStarsParent();if(!a)return;a.height(a.height());var c=$("<span/>").addClass(q).html(OOUI.L_Feedback_Submitting);z=$("<span/>").addClass("cdFeedbackStarsDiv").appendTo(c);c.hide();a.prepend(c);c.fadeIn("slow");x=window.setInterval(L,f);g_nSubmitAnimationId=window.setTimeout(w,d);g_nTimedOutAnimationId=window.setTimeout(D,e)}function G(e,f){if(b.GetStarsLabel()==a){b.Clear();b.LoadQuestionGroup(e);return}t=f;b.UpdateState(FeedbackState.StarClicked);var d=b.GetStarsParent();if(!d)return;d.height(d.height());$(i,d).remove();c=SubmitAnimationState.AnimationStarted;g_fAllowSubmitAnimation=true;b.GetHover().removeBackground();b.GetHover().dvHover.fadeOut(300,function(){b.Clear();b.LoadQuestionGroup(e);F()})}}function ReadOnlyStarsControl(i,k,h){var e=i,b=k,a=h,c=false;function g(b){if(b&&b.relatedTarget&&b.relatedTarget!==document&&!b.relatedTarget.parentNode)return false;c=false;a.GetHover()!=null&&!a.IsSubmitAnimating()&&a.GetHover().hide()}function j(){if(arguments.length)arguments[0].keyCode==Sys.UI.Key.esc&&g()}function l(z){var i="src",h="title",c="alt",a="<img>",o="overflow",l="<span/>",s=GetJQueryObject(z);if(s.length==0)return;var v=OOUtil.FIsRtl()?"_rtl":"",y=13,A=5*y,t=13+.01*e*13*4;if(b==0)t=0;s.mouseleave(g).keydown(j);var r=$(l).addClass("cdFeedbackCompressedStar");r.bind("mouseenter",d);var u=$("<a />").attr("href","javascript:void(0);").focus(d).appendTo(r),q=$(l).addClass("cdFeedbackStarsDiv"),w=b>0||b==-1?f(e):0,k=String.format(g_strFeedbackStarsTooltip,w),n=OOUtil.GetCodeImage("rating",String.format(b==-1?"orange_star_empty{0}.png":"blue_star_empty{0}.png",v)),m=OOUtil.GetCodeImage("rating",String.format(b==-1?"orange_star_filled{0}.png":"blue_star_filled{0}.png",v)),x=$(l).css(o,"hidden").addClass("cdReadOnlyStarsDiv").append($(a).attr(c,k).attr(h,k).attr(i,n)).append($(a).attr(c,k).attr(h,k).attr(i,n)).append($(a).attr(c,k).attr(h,k).attr(i,n)).append($(a).attr(c,k).attr(h,k).attr(i,n)).append($(a).attr(c,k).attr(h,k).attr(i,n)),p=$(l).css(o,"hidden").css("position","absolute").css("width",t+"px").append($(a).attr(c,k).attr(h,k).attr(i,m)).append($(a).attr(c,k).attr(h,k).attr(i,m)).append($(a).attr(c,k).attr(h,k).attr(i,m)).append($(a).attr(c,k).attr(h,k).attr(i,m)).append($(a).attr(c,k).attr(h,k).attr(i,m));if(OOUtil.FIsRtl())p.css("right","0");else p.css("left","0");q.append(x);q.append(p);q.appendTo(u);b!=-1&&$(l).addClass("cdFeedbackStarsText").html("("+b+")").appendTo(u);r.appendTo(s)}this.Render=l;function d(){c=true;if(a.GetState()==FeedbackState.FeedbackSubmitted)return;if(a.GetState()==FeedbackState.StarClicked)!a.IsSubmitAnimating()&&window.setTimeout(function(){c&&a.GetHover().show()},400);else a.DisplayInitialQuestionGroup()}function f(c){var a="?",b=c*8;if(b<=50)a="1";else if(b<=150)a="1.5";else if(b<=250)a="2";else if(b<=350)a="2.5";else if(b<=450)a="3";else if(b<=550)a="3.5";else if(b<=650)a="4";else if(b<=750)a="4.5";else if(b<=800)a="5";a=a.replace(".",g_feedbackDecimalSeparator);return a}this.GetStarsCount=f}function GetQuestionTitle(a){var b="undefined";if(typeof a!==b&&a!=null)if(typeof a.EnglishTitle!==b&&a.EnglishTitle!=null)return a.EnglishTitle;else if(typeof a.Title!==b&&a.Title!=null)return a.Title;return ""}