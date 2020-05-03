'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">countach-dashboard documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-38624b875b0121544805559e68c0f3ab"' : 'data-target="#xs-components-links-module-AppModule-38624b875b0121544805559e68c0f3ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-38624b875b0121544805559e68c0f3ab"' :
                                            'id="xs-components-links-module-AppModule-38624b875b0121544805559e68c0f3ab"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MoviesModule.html" data-type="entity-link">MoviesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MoviesModule-b971602d16f8f9ccdaf565f90a036f4c"' : 'data-target="#xs-components-links-module-MoviesModule-b971602d16f8f9ccdaf565f90a036f4c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MoviesModule-b971602d16f8f9ccdaf565f90a036f4c"' :
                                            'id="xs-components-links-module-MoviesModule-b971602d16f8f9ccdaf565f90a036f4c"' }>
                                            <li class="link">
                                                <a href="components/ActionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComedyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComedyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieSearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MovieSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MoviesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MoviesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectedSearchMovieComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectedSearchMovieComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MoviesRoutingModule.html" data-type="entity-link">MoviesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MyProfileModule.html" data-type="entity-link">MyProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyProfileModule-24828daa95588e0304661e75b502bf4d"' : 'data-target="#xs-components-links-module-MyProfileModule-24828daa95588e0304661e75b502bf4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyProfileModule-24828daa95588e0304661e75b502bf4d"' :
                                            'id="xs-components-links-module-MyProfileModule-24828daa95588e0304661e75b502bf4d"' }>
                                            <li class="link">
                                                <a href="components/MyProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PersonalinformationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PersonalinformationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyProfileRoutingModule.html" data-type="entity-link">MyProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RatingsModule.html" data-type="entity-link">RatingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RatingsModule-b9d78b5e5363478b413c616c30200bab"' : 'data-target="#xs-components-links-module-RatingsModule-b9d78b5e5363478b413c616c30200bab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RatingsModule-b9d78b5e5363478b413c616c30200bab"' :
                                            'id="xs-components-links-module-RatingsModule-b9d78b5e5363478b413c616c30200bab"' }>
                                            <li class="link">
                                                <a href="components/AllRatingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AllRatingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RatingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RatingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecentRatingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecentRatingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RatingsRoutingModule.html" data-type="entity-link">RatingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-f2933f6d632ce6d0a19acf3a391a6e78"' : 'data-target="#xs-components-links-module-SharedModule-f2933f6d632ce6d0a19acf3a391a6e78"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-f2933f6d632ce6d0a19acf3a391a6e78"' :
                                            'id="xs-components-links-module-SharedModule-f2933f6d632ce6d0a19acf3a391a6e78"' }>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StarRatingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StarRatingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YoutubePlayerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">YoutubePlayerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WishlistModule.html" data-type="entity-link">WishlistModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WishlistModule-ca1dfa31286ef26bc3aed86e4d1fdaa7"' : 'data-target="#xs-components-links-module-WishlistModule-ca1dfa31286ef26bc3aed86e4d1fdaa7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WishlistModule-ca1dfa31286ef26bc3aed86e4d1fdaa7"' :
                                            'id="xs-components-links-module-WishlistModule-ca1dfa31286ef26bc3aed86e4d1fdaa7"' }>
                                            <li class="link">
                                                <a href="components/SeenWishlistComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SeenWishlistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectedMovieComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectedMovieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WantedWishlistComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WantedWishlistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WishlistComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WishlistComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WishlistRoutingModule.html" data-type="entity-link">WishlistRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Genre.html" data-type="entity-link">Genre</a>
                            </li>
                            <li class="link">
                                <a href="classes/Movie.html" data-type="entity-link">Movie</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rating.html" data-type="entity-link">Rating</a>
                            </li>
                            <li class="link">
                                <a href="classes/Results.html" data-type="entity-link">Results</a>
                            </li>
                            <li class="link">
                                <a href="classes/SearchResult.html" data-type="entity-link">SearchResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/Trailer.html" data-type="entity-link">Trailer</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/WishList.html" data-type="entity-link">WishList</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MovieService.html" data-type="entity-link">MovieService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RatingService.html" data-type="entity-link">RatingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WishlistService.html" data-type="entity-link">WishlistService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});