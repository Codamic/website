(ns lxhome.views.home
  (:require [re-frame.core :as re-frame]))

(goog-define version "0.1.0")

(defn menu-items
  []
  [:section {:class "row menu"}
;;   [:div {:class :menu}]
   [:span {:class :col-xs-4}
    [:a {:class "default button" :href "http://blog.lxsameer.com/"}
     [:i {:class :icon-rss}]
     "Blog"]]

   [:span {:class :col-xs-4}
    [:a {:class "default button" :href "https://slides.com/lxsameer"}
     [:i {:class :icon-chat}]
     "Talks"]]

   [:span {:class :col-xs-4}
    [:a {:class "default button" :href "#"}
     [:i {:class :icon-mic}]
     "Podcasts"]]

   [:span {:class :col-xs-4}
    [:a {:class "default button" :href "#"}
     [:i {:class :icon-key}]
     "GPG Key"]]

   [:span {:class :col-xs-4}
    [:a {:class "default button" :href "#"}
     [:i {:class :icon-phone}]
     "Contact"]]

   [:span {:class :col-xs-4}
    [:a {:class "default button" :href "#"}
     [:i {:class :icon-vcard}]
     "About Me"]]

   [:span {:class :col-xs-4}
    [:a {:class "default button" :href "#"}
     [:i {:class :icon-rss}]
     "Archive"]]
   [:span {:class :col-xs-4}
    [:a {:class "button default"
         :href "https://www.linkedin.com/in/lxsameer/"}
     [:i {:class :icon-linkedin}]
     "Linkedin"]]
   [:span {:class :col-xs-4}
    [:a {:class "button default"
         :href "https://medium.com/@lxsameer"}
     [:i {:class :icon-medium}]
     "Medium"]]
   [:span {:class :col-xs-4}
    [:a {:class "button default"
         :href "https://www.instagram.com/lxsameeer/"}
     [:i {:class :icon-instagram}]
     "Instagram"]]])


(defn name-and-title
  [menu]
  [:section {:class "title-header"}
   [:img {:src "images/logo.png" :class :avatar :alt "Codamic"}]
   [:span {:class :no-wrap}

    [:span {:class "title"}
     [:span {:class "codamic"} "Codamic"]
     "Technologies"]]
   [:h2 {:class "subtitle"} "We are rising..."]

   [:div {:class "row social"}
    [:ul
     [:li {:class :col-xs-4}
      [:a {:class "button circle success large"
           :href "https://twitter.com/CodamicTech"}
       [:i {:class :icon-twitter}]]]

     [:li {:class :col-xs-4}
      [:a {:class "button circle success large"
           :href "https://github.com/Codamic"}
       [:i {:class :icon-github}]]]

     [:li {:class :col-xs-4}
      [:a {:class "button circle success large"
           :href "https://blog.codamic.tech/"}
       [:i {:class :icon-medium}]]]]]


   [:span {:class :copyright} (str "© 2016-2017 Codamic Technologies - " version)]])


(defn home-panel []
  (let [menu (re-frame/subscribe [:menu-state])]
    (fn []
      [:div {:class :container-fluid}
       [:section {:class "row middle-row middle-xs"}
        [:div {:class "col-xs-12 col-md-offset-2 col-md-8 col-lg-offset-4 col-lg-4"}
         [name-and-title @menu]]]])))
