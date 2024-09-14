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
                    <a href="index.html" data-type="index-link">travel-planner documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-8e1112403d6c86e32aa87d1fec429825db91017b64bb47a78786d99d75210cb214442b88edfe266ebab745c54608331424576eb33aa5ad76b25ebf5a9ecaafa7"' : 'data-bs-target="#xs-controllers-links-module-AppModule-8e1112403d6c86e32aa87d1fec429825db91017b64bb47a78786d99d75210cb214442b88edfe266ebab745c54608331424576eb33aa5ad76b25ebf5a9ecaafa7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-8e1112403d6c86e32aa87d1fec429825db91017b64bb47a78786d99d75210cb214442b88edfe266ebab745c54608331424576eb33aa5ad76b25ebf5a9ecaafa7"' :
                                            'id="xs-controllers-links-module-AppModule-8e1112403d6c86e32aa87d1fec429825db91017b64bb47a78786d99d75210cb214442b88edfe266ebab745c54608331424576eb33aa5ad76b25ebf5a9ecaafa7"' }>
                                            <li class="link">
                                                <a href="controllers/TravelController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TravelController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-8e1112403d6c86e32aa87d1fec429825db91017b64bb47a78786d99d75210cb214442b88edfe266ebab745c54608331424576eb33aa5ad76b25ebf5a9ecaafa7"' : 'data-bs-target="#xs-injectables-links-module-AppModule-8e1112403d6c86e32aa87d1fec429825db91017b64bb47a78786d99d75210cb214442b88edfe266ebab745c54608331424576eb33aa5ad76b25ebf5a9ecaafa7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8e1112403d6c86e32aa87d1fec429825db91017b64bb47a78786d99d75210cb214442b88edfe266ebab745c54608331424576eb33aa5ad76b25ebf5a9ecaafa7"' :
                                        'id="xs-injectables-links-module-AppModule-8e1112403d6c86e32aa87d1fec429825db91017b64bb47a78786d99d75210cb214442b88edfe266ebab745c54608331424576eb33aa5ad76b25ebf5a9ecaafa7"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaServices.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaServices</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TravelService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TravelService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/TravelController.html" data-type="entity-link" >TravelController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/createTravelBody.html" data-type="entity-link" >createTravelBody</a>
                            </li>
                            <li class="link">
                                <a href="classes/createUserbody.html" data-type="entity-link" >createUserbody</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrismaUserRepositorie.html" data-type="entity-link" >PrismaUserRepositorie</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PrismaServices.html" data-type="entity-link" >PrismaServices</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TravelService.html" data-type="entity-link" >TravelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PutUsersInTravelResponse.html" data-type="entity-link" >PutUsersInTravelResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserRepositorie.html" data-type="entity-link" >UserRepositorie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserServicesReturns.html" data-type="entity-link" >UserServicesReturns</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});