const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/src-BWH_r-JT.js","assets/timer-DX9TZYdu.js","assets/src-CNIkmjdN.js","assets/rolldown-runtime-p-a1D-qf.js","assets/src-CylyMPYk.js"])))=>i.map(i=>d[i]);
import{t as e}from"./assets/rolldown-runtime-p-a1D-qf.js";var t=new class{constructor(){this.initialized=!1,this.measurementId=null}init(){if(this.isLocalhost()){console.log(`[Analytics] Localhost detected, tracking disabled`);return}if(!this.isAvailable()){console.warn(`[Analytics] gtag.js not loaded, tracking disabled`);return}if(this.measurementId=this.detectMeasurementId(),!this.measurementId){console.warn(`[Analytics] Could not detect GA4 measurement ID`);return}this.initialized=!0,console.log(`[Analytics] Initialized with measurement ID:`,this.measurementId)}isLocalhost(){let e=window.location.hostname;return e===`localhost`||e===`127.0.0.1`||e===`::1`}isAvailable(){return typeof window<`u`&&typeof window.gtag==`function`}trackPageView(e){!this.initialized||!this.isAvailable()||(window.gtag(`event`,`page_view`,{page_path:e,page_title:document.title}),console.log(`[Analytics] Page view:`,e))}trackEvent(e,t={}){!this.initialized||!this.isAvailable()||(window.gtag(`event`,e,t),console.log(`[Analytics] Event:`,e,t))}startTimedEvent(e,t={}){let n=performance.now();return r=>{let i=Math.round(performance.now()-n);this.trackEvent(e,{...t,...r,durationMs:i})}}setUserId(e){!this.initialized||!this.isAvailable()||!this.measurementId||(window.gtag(`config`,this.measurementId,{user_id:e}),console.log(`[Analytics] User ID set:`,e.substring(0,8)+`...`))}detectMeasurementId(){if(window.dataLayer&&window.dataLayer.length>0){for(let e of window.dataLayer)if(Array.isArray(e)&&e[0]===`config`&&typeof e[1]==`string`&&e[1].startsWith(`G-`))return e[1]}return null}},n=class{constructor(){this.routes=[],this.basePath=``,this.basePath=this.detectBasePath()}register(e,t){let{regex:n,paramNames:r}=this.patternToRegex(e);this.routes.push({pattern:e,regex:n,paramNames:r,handler:t})}detectBasePath(){let e=document.querySelector(`base`);if(!e||!e.href)return``;let t=new URL(e.href).pathname;return t.endsWith(`/`)&&t.length>1&&(t=t.slice(0,-1)),t===`/`?``:t}stripBasePath(e){return!this.basePath||!e.startsWith(this.basePath)?e:e.slice(this.basePath.length)||`/`}patternToRegex(e){let t=[],n=e.replace(/[.+?^${}()|[\]\\]/g,`\\$&`).replace(/:(\w+)/g,(e,n)=>(t.push(n),`([^/]+)`));return n=`^${n}/?$`,{regex:new RegExp(n),paramNames:t}}matchRoute(e,t){let n=t.match(e.regex);if(!n)return null;let r={};return e.paramNames.forEach((e,t)=>{r[e]=n[t+1]}),r}async navigate(e){let t=this.basePath&&!e.startsWith(this.basePath)?this.basePath+e:e;history.pushState(null,``,t),await this.route()}async route(){let e=new URL(window.location.href),n=e.pathname,i=this.stripBasePath(n),a={};e.searchParams.forEach((e,t)=>{a[t]=e});for(let e of this.routes){let n=this.matchRoute(e,i);if(n!==null){let r={...n,...a};await e.handler(r),t.trackPageView(i),this.updateActiveNav(i);return}}r(`pages/404.html`)}updateActiveNav(e){let t=document.getElementById(`main-nav`);if(!t)return;let n=/^\/(learn|compute|explore)\//.test(e)?`/rule-sets`:e;t.querySelectorAll(`a`).forEach(e=>{let t=this.stripBasePath(new URL(e.href).pathname),r=n===`/`?t===`/`:t!==`/`&&n.startsWith(t);e.classList.toggle(`active`,r),r?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)})}init(){window.addEventListener(`popstate`,()=>this.route()),document.addEventListener(`click`,e=>{let t=e.target.closest(`a`);if(t&&t.href&&t.origin===location.origin&&!t.href.startsWith(`blob:`)&&t.target!==`_blank`){let n=new URL(t.href);if(n.pathname===window.location.pathname&&n.hash)return;e.preventDefault(),document.getElementById(`main-nav`)?.classList.remove(`open`);let r=this.stripBasePath(n.pathname)+n.search;this.navigate(r)}}),this.route()}};async function r(e){let t=document.getElementById(`content`);if(t)try{let n=await fetch(e);if(n.ok)t.innerHTML=await n.text();else{let e=await fetch(`pages/404.html`);e.ok?t.innerHTML=await e.text():t.innerHTML=`<p>Page not found</p>`}}catch(e){console.error(`Failed to load page:`,e),t.innerHTML=`<p>Error loading page</p>`}}var i=`ఛందం`,a=`ఛందం - Telugu Poetry Meter Analysis`,o=` : `;function s(...e){if(e.length===0){document.title=a;return}document.title=[...e,i].join(o)}var c=`modulepreload`,l=function(e){return`/`+e},u={},d=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=l(t,n),t in u)return;u[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:c,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},f=[{id:`chandam`,name:`చంధోరత్నావళి`,description:`దిలీపు మిరియాల సంకలనం: అనేక ఛందస్సు వనరులు మరియూ ముఖ్యంగా కోవెల సంపత్కుమారాచార్య రచనలు`,rulesFile:`data/chandam.min.json.gz`,examplesFile:`data/chandam-examples.min.json.gz`,ruleCount:379,exampleCount:554},{id:`topella`,name:`అనంతచ్ఛందస్సౌరభము`,description:`శ్రీ తోపెల్ల బాలసుబ్రహ్మణ్య శర్మగారి సంకలనం: అనేక ఛందస్సు వనరులు మరియూ స్వయంగా సృజించినవి.`,rulesFile:`data/topella.min.json.gz`,examplesFile:`data/topella-examples.min.json.gz`,ruleCount:2337,exampleCount:712},{id:`sanskrit`,name:`సంస్కృత ఛందస్సులు`,description:`సంస్కృత నియమావళి`,rulesFile:`data/sanskrit.min.json.gz`,examplesFile:`data/sanskrit-examples.min.json.gz`,ruleCount:1165,exampleCount:0},{id:`jkmr`,name:`జెజ్జాల కృష్ణ మోహన రావు సేకరణ`,description:`racchabanda/chandassu Google Groups సందేశముల నుండి సేకరించిన ఛందస్సు నియమావళి`,rulesFile:`data/jkmr.min.json.gz`,examplesFile:`data/jkmr-examples.min.json.gz`,ruleCount:128,exampleCount:113}];function p(e){return f.find(t=>t.id===e)}async function m(e){let t=p(e);if(t)return t;let{customRulesService:n}=await d(async()=>{let{customRulesService:e}=await Promise.resolve().then(()=>M);return{customRulesService:e}},void 0),r=await n.getCustomRuleset(e);if(r){let e=r.rules.reduce((e,t)=>e+(t.Examples?.length??0),0);return{id:r.id,name:r.name,rulesFile:``,examplesFile:``,description:r.description,ruleCount:r.rules.length,exampleCount:e}}}var h=e({makeUrl:()=>v,makeUrlWithParams:()=>y}),g=null;function _(){let e=document.querySelector(`base`);if(!e||!e.href)return``;let t=new URL(e.href).pathname;return t.endsWith(`/`)&&t.length>1&&(t=t.slice(0,-1)),t===`/`?``:t}function v(e){return g===null&&(g=_()),e.startsWith(`/`)||(e=`/`+e),g+e}function y(e,t){let n=v(e),r=Object.entries(t).map(([e,t])=>`${encodeURIComponent(e)}=${encodeURIComponent(t)}`).join(`&`);return r?`${n}?${r}`:n}var ee=`https://github.com/miriyald/chandam`,b=1e4,x=`ChandamDB`,S={UI_LANGUAGE:`chandam-ui-lang`,USER_ID:`chandam:userId`,STORAGE_VERSION:`chandam:storage:version`,POEMS:`poems:default`,FAVORITES:`favorites`,FAV_RULESET:`custom-rulesets:custom-fav`,CUSTOM_RULESETS:`custom-rulesets`,CUSTOM_RULES_ID:`custom-rules`,KB_SCHEME:`chandam:kb-scheme`},te={en:{nav_home:`Home`,nav_rule_sets:`Rule Sets`,nav_resources:`Resources`,nav_about:`About`,nav_credits:`Credits`,nav_contact:`Contact`,loading:`Loading...`,home_title:`ఛందం - Telugu Poetry Meter Analysis`,home_subtitle:`Select a rule set to begin analyzing or learning about Telugu poetry meters`,home_btn_analyze:`✏️ Analyze`,home_btn_learn:`📖 Learn`,editor_placeholder:`పద్యం ఇక్కడ టైప్ చేయండి...`,editor_btn_random:`Random`,editor_btn_clear:`Clear`,editor_btn_analyze:`Analyze Poem`,editor_auto_detect:`Auto-detect`,editor_yati:`Yati`,editor_prasa:`Prasa`,editor_auto_detect_context:`Auto-detecting best match...`,editor_matching_with:`Matching with:`,editor_select_rule:`Select a rule ▼`,label_rule_set:`Rule Set:`,label_rule:`Rule:`,label_rules_count:`Rules`,label_type:`Type:`,label_frequency:`Frequency:`,label_yes:`Yes`,label_no:`No`,label_example_n:`Example`,label_author:`Author:`,label_date:`Date:`,label_pattern_sequence:`Pattern (Sequence):`,label_matra_series:`Matra Series:`,label_yati_caesura:`Yati (Caesura):`,label_prasa_rhyme:`Prasa (Rhyme):`,results_title:`Results`,results_view_details:`View Rule Details ↗`,results_alternatives:`Other Possible Matches`,results_line:`Line`,results_position:`Pos`,results_type:`Type`,results_expected:`Expected`,results_actual:`Actual`,results_description:`Description`,results_mismatch_singular:`Mismatch`,results_mismatch_plural:`Mismatches`,results_disclaimer:`Chandam© results are indicative. Please use your own judgement.`,link_browse_rules:`Browse Rules`,link_learn_more:`Learn More`,link_browse_all_rules:`Browse All Rules`,link_go_to_compute:`Go to Compute`,link_try_in_compute:`Try in Compute`,link_back_to_browse:`← Back to Browse`,link_learn:`Learn`,link_try:`Try`,mode_learn:`Learn`,mode_compute:`Compute`,mode_explore:`Explore`,learn_title_prefix:`Learn:`,section_description:`Description`,section_technical:`Technical Details`,section_examples:`Examples`,section_references:`References`,no_description:`No description available`,no_examples:`No examples available`,btn_try_example:`Try This Example`,metric_chars:`chars`,metric_matras:`matras`,metric_examples:`ex.`,alert_enter_poem:`Please enter poem text`,alert_no_matches:`No matches found`,alert_error:`Error occurred`,alert_select_rule:`Please select a rule`,alert_no_match:`No match`,alert_no_examples:`No examples available`,alert_generated_poem:`Generated sample (not literature)`,lang_toggle_title:`Switch to Telugu / తెలుగుకు మార్చండి`,lang_name:`EN`,creator_page_title:`Create Custom Rule`,creator_section_basic:`Basic Information`,creator_section_classification:`Classification`,creator_section_pattern:`Rule Pattern`,creator_section_options:`Options`,creator_label_name:`Name`,creator_label_padyam_type:`Padyam Type`,creator_label_gana_type:`Gana Type`,creator_label_lines:`Lines`,creator_btn_add_row:`➕ Add Pada`,creator_btn_add_row_icon:`➕`,creator_btn_remove_row:`🗑️ Remove Pada`,creator_btn_remove_row_icon:`🗑️`,creator_btn_add_gana:`➕`,creator_btn_remove_gana:`➖`,creator_label_yati:`Yati`,creator_placeholder_yati:`e.g., 8,14`,creator_option_prasa:`Prasa (Rhyme)`,creator_option_prasa_yati:`Prasa with Yati`,creator_option_anthya_prasa:`Anthya Prasa (End Rhyme)`,creator_option_dandakamu:`Dandakamu (Infinite Length)`,creator_option_same_rules:`Same Rules for All Lines`,creator_btn_create:`✅ Create Rule`,creator_btn_cancel:`❌ Cancel`,creator_success:`Rule created successfully!`,creator_error:`Failed to create rule`,creator_validation_name:`Please enter a rule name`,creator_validation_ganas:`Please add at least one gana`,creator_limit_reached:`Maximum 50 custom rules reached`,creator_gana_count_singular:`gana`,creator_gana_count_plural:`ganas`,creator_delete_confirm:`Are you sure you want to delete this rule?`,padyam_type_jati:`Jati`,padyam_type_upajati:`UpaJati`,padyam_type_vruttam:`Vruttam`,gana_type_name:`Name`,gana_type_type:`Type`,gana_type_weight:`Weight`,gana_ya:`య (l-g-g)`,gana_ma:`మ (g-g-g)`,gana_ta:`త (g-g-l)`,gana_ra:`ర (g-l-g)`,gana_ja:`జ (l-g-l)`,gana_bha:`భ (g-l-l)`,gana_na:`న (l-l-l)`,gana_sa:`స (l-l-g)`,gana_ga:`గ`,gana_gaa:`గా (g-g)`,gana_va:`వ (l-g)`,gana_ha:`హ (g-l)`,gana_lala:`లల`,gana_la:`ల`,gana_indra:`Indra`,gana_surya:`Surya`,gana_chandra:`Chandra`,gana_guruvu:`Guruvu`,gana_laghuvu:`Laghuvu`,matra_singular:`matra`,matra_plural:`matras`,pada_singular:`pada`,pada_plural:`padas`,custom_rules_title:`🎨 Custom Rules`,custom_rules_description:`custom rules created`,custom_rules_btn_create:`Create Custom Rule`,results_add_to_examples:`+ Add to Examples`,results_example_added:`Added!`,results_example_duplicate:`Already exists`,results_submit_github:`Submit to GitHub`,results_file_downloaded:`File downloaded! Attach it to the GitHub issue.`,filter_clear_all:`Clear`,filter_search_placeholder:`Search rules...`,filter_all_categories:`All Categories`,filter_no_results:`No rules match your filters.`,filter_try_removing:`Try removing some filters to see more results.`,filter_showing:`Showing`,filter_of:`of`,filter_results:`Results`,filter_with_examples:`With Examples`,examples_none_available:`No examples available yet.`,examples_contribute_cta:`You may contribute by writing one!`,generated_example_badge:`Machine-Generated (యంత్ర-నిర్మితం)`,generated_disclaimer:`Sample generated using స-రి-గ-మ-ప-ద-ని syllables to demonstrate meter structure. Not literature.`,btn_regenerate:`Regenerate`,results_export:`Export`,results_export_poem:`Poem Only`,results_export_results:`Full Results`,export_book:`Export as Book`,export_book_single:`Export Rule`,export_progress_title:`Exporting...`,export_cancel:`Cancel`,export_book_subtitle:`Telugu Poetry Meters`,export_book_generated:`Generated from Chandam`,home_btn_browse_rule_sets:`Browse Rule Sets`,home_quick_links:`Quick Links`,home_link_rule_sets:`Rule Sets`,home_link_rule_sets_desc:`Browse all meter collections`,home_link_about:`About`,home_link_about_desc:`Learn about this project`,home_link_credits:`Credits`,home_link_credits_desc:`Contributors and sources`,home_link_contact:`Contact`,home_link_contact_desc:`Get in touch`,rulesets_page_title:`Rule Sets`,rulesets_heading:`Telugu Poetry Meter Rule Sets`,rulesets_subtitle:`Choose a rule set to analyze poetry or learn about meters`,rulesets_rules_suffix:`Rules`,rulesets_examples_suffix:`Examples`,rulesets_btn_analyze:`Analyze`,rulesets_btn_learn:`Learn`,breadcrumb_aria_label:`Breadcrumb`,breadcrumb_rule_sets:`Rule Sets`,breadcrumb_home:`Home`,mode_switcher_aria_label:`Mode selection`,action_remove_favorite:`Remove from favorites`,action_add_favorite:`Add to favorites`,action_delete_custom_rule:`Delete this custom rule`,action_submit_github:`Submit to GitHub`,action_create_meter:`Create new meter`,alert_max_favorites:`Maximum 50 favorites reached. Please remove some to add new ones.`,alert_favorite_failed:`Failed to update favorite`,alert_delete_confirm:`Are you sure you want to delete this custom rule? This action cannot be undone.`,alert_delete_failed:`Failed to delete rule. Please try again.`,learn_btn_delete:`Delete`,creator_validation_name_length:`Rule name must be {max} characters or less`,creator_validation_name_invalid:`Rule name contains invalid characters`,creator_validation_name_exists:`A rule with this name already exists. Please choose a different name.`,creator_validation_lines_min:`Number of lines must be at least 1`,explore_graph_hint:`Scroll to zoom. Drag nodes to rearrange. Click a rule to view details.`,nav_my_writings:`My Writings`,writings_subtitle:`Your collection ({count} poems)`,writings_empty:`No poems saved yet. Analyze a poem and save it to your collection!`,writings_delete:`Remove`,writings_delete_confirm:`Remove this poem from your collection?`,results_add_to_collection:`Save`,results_added_to_collection:`Saved!`,results_already_in_collection:`Already saved`,results_collection_full:`Collection full (20/20)`,nav_my_data:`My Data`,my_data_title:`My Data`,my_data_clear_btn:`Clear All Data`,my_data_writings_title:`My Writings`,my_data_writings_desc:`poems`,my_data_writings_subtitle:`Your saved poems and compositions`,my_data_favorites_title:`Favorites`,my_data_favorites_desc:`rules`,my_data_favorites_subtitle:`Rules you have favorited for quick access`,my_data_custom_rules_title:`Custom Rules`,my_data_custom_rules_desc:`rules`,my_data_custom_rules_subtitle:`Meters you have created`,my_data_view:`View`,footer_clear_data:`Clear Site Data`,footer_favorites:`Favorites`,footer_custom_rules:`Custom Rules`,clear_data_warning:`This will delete all your saved poems, favorites, custom rules, and editor state. This action cannot be undone. Continue?`,page_about_title:`About Chandam`,page_credits_title:`Credits`,page_contact_title:`Contact`},te:{nav_home:`హోమ్`,nav_rule_sets:`నియమావళులు`,nav_resources:`వనరులు`,nav_about:`పరిచయం`,nav_credits:`కృతజ్ఞతలు`,nav_contact:`సంప్రదింపులు`,loading:`తెరుచుకుంటోంది...`,home_title:`ఛందం: తెలుగు పద్య ఛందస్సు విశ్లేషణ`,home_subtitle:`పద్యాలను విశ్లేషించడానికి, ఛందస్సు నేర్చుకోవడానికి, మరియు డెవలపర్‌ల కోసం ఏజెంట్-స్నేహపూర్వక సాధనాలను రూపొందించడానికి ఆధునిక వేదిక.`,home_btn_analyze:`✏️ విశ్లేషించండి`,home_btn_learn:`📖 నేర్చుకోండి`,editor_placeholder:`పద్యమును ఇక్కడ ఉంచండి.`,editor_btn_random:`ఏదేని పద్యం`,editor_btn_clear:`తీసివేయి`,editor_btn_analyze:`విశ్లేషించండి`,editor_auto_detect:`స్వయంచాలకంగా గుర్తించు`,editor_yati:`యతి`,editor_prasa:`ప్రాస`,editor_auto_detect_context:`ఉత్తమ సరిపోలికను స్వయంచాలకంగా గుర్తిస్తోంది.`,editor_matching_with:`దీనితో సరిపోలుస్తోంది:`,editor_select_rule:`ఒక నియమాన్ని ఎంచుకోండి ▼`,label_rule_set:`నియమావళులు:`,label_rule:`నియమం:`,label_rules_count:`నియమాలు`,label_type:`రకం:`,label_frequency:`తరచుదనం:`,label_yes:`అవును`,label_no:`కాదు`,label_example_n:`ఉదాహరణ`,label_author:`రచయిత:`,label_date:`తేదీ:`,label_pattern_sequence:`గణాల క్రమం:`,label_matra_series:`మాత్రల శ్రేణి:`,label_yati_caesura:`యతి:`,label_prasa_rhyme:`ప్రాస:`,results_title:`ఫలితాలు`,results_view_details:`నియమాలు ↗`,results_alternatives:`ఇతర సాధ్యమైన సరిపోలికలు`,results_line:`పంక్తి`,results_position:`స్థానం`,results_type:`రకం`,results_expected:`ఆశించినది`,results_actual:`వాస్తవమైనది`,results_description:`వివరణ`,results_mismatch_singular:`లోపం`,results_mismatch_plural:`లోపాలు`,results_disclaimer:`ఛందం© ఫలితాలపైనే పూర్తిగా ఆధారపడవద్దు. స్వవిచక్షణతో నిర్ణయం తీసుకోగలరు.`,link_browse_rules:`నియమాలను చూడండి`,link_learn_more:`మరింత తెలుసుకోండి`,link_browse_all_rules:`అన్ని నియమాలను చూడండి`,link_go_to_compute:`విశ్లేషణకు వెళ్లండి`,link_try_in_compute:`విశ్లేషణలో ప్రయత్నించండి`,link_back_to_browse:`← వెనక్కి వెళ్ళు`,link_learn:`నేర్చుకోండి`,link_try:`ప్రయత్నించండి`,mode_learn:`నేర్చుకోండి`,mode_compute:`విశ్లేషించండి`,mode_explore:`అన్వేషించండి`,learn_title_prefix:`నేర్చుకోండి:`,section_description:`వివరణ`,section_technical:`సాంకేతిక వివరాలు`,section_examples:`ఉదాహరణలు`,section_references:`ప్రమాణము`,no_description:`వివరణ అందుబాటులో లేదు`,no_examples:`ఉదాహరణలు అందుబాటులో లేవు`,btn_try_example:`ఈ ఉదాహరణను ప్రయత్నించండి`,metric_chars:`అక్షరాలు`,metric_matras:`మాత్రలు`,metric_examples:`ఉదాహరణలు`,alert_enter_poem:`దయచేసి విశ్లేషించడానికి పద్యాన్ని నమోదు చేయండి.`,alert_no_matches:`సరిపోలే నియమాలు కనుగొనబడలేదు.`,alert_error:`ఒక లోపం సంభవించింది. దయచేసి మళ్ళీ ప్రయత్నించండి.`,alert_select_rule:`దయచేసి ఒక నియమాన్ని ఎంచుకోండి.`,alert_no_match:`ఇచ్చిన పద్యం ఈ నియమానికి సరిపోలలేదు.`,alert_no_examples:`ఈ నియమానికి ఉదాహరణలు అందుబాటులో లేవు.`,alert_generated_poem:`యంత్ర-నిర్మిత నమూనా (సాహిత్యం కాదు)`,lang_toggle_title:`Switch to English / ఇంగ్లీష్‌కు మార్చండి`,lang_name:`తె`,creator_page_title:`కొత్త నియమాన్ని సృష్టించండి`,creator_section_basic:`ప్రాథమిక సమాచారం`,creator_section_classification:`వర్గీకరణ`,creator_section_pattern:`నియమ నమూనా`,creator_section_options:`ఎంపికలు`,creator_label_name:`పేరు`,creator_label_padyam_type:`పద్య రకం`,creator_label_gana_type:`గణ రకం`,creator_label_lines:`పాదాలు`,creator_btn_add_row:`➕ పాదం జోడించు`,creator_btn_add_row_icon:`➕`,creator_btn_remove_row:`🗑️ పాదం తొలగించు`,creator_btn_remove_row_icon:`🗑️`,creator_btn_add_gana:`➕`,creator_btn_remove_gana:`➖`,creator_label_yati:`యతి`,creator_placeholder_yati:`ఉదా., 8,14`,creator_option_prasa:`ప్రాస`,creator_option_prasa_yati:`ప్రాసయతి`,creator_option_anthya_prasa:`అంత్యప్రాస`,creator_option_dandakamu:`దండకము`,creator_option_same_rules:`అన్ని పాదాలకు ఒకే నియమాలు`,creator_btn_create:`✅ నియమం సృష్టించు`,creator_btn_cancel:`❌ రద్దు చేయి`,creator_success:`నియమం విజయవంతంగా సృష్టించబడింది!`,creator_error:`నియమం సృష్టించడంలో విఫలమైంది`,creator_validation_name:`దయచేసి నియమం పేరును నమోదు చేయండి`,creator_validation_ganas:`దయచేసి కనీసం ఒక గణం జోడించండి`,creator_limit_reached:`గరిష్టంగా 50 అనుకూల నియమాలు చేరుకున్నాయి`,creator_gana_count_singular:`గణం`,creator_gana_count_plural:`గణాలు`,creator_delete_confirm:`మీరు ఈ నియమాన్ని తొలగించాలని ఖచ్చితంగా అనుకుంటున్నారా?`,padyam_type_jati:`జాతి`,padyam_type_upajati:`ఉపజాతి`,padyam_type_vruttam:`వృత్తం`,gana_type_name:`పేరు`,gana_type_type:`రకం`,gana_type_weight:`బరువు`,gana_ya:`య (ల-గ-గ)`,gana_ma:`మ (గ-గ-గ)`,gana_ta:`త (గ-గ-ల)`,gana_ra:`ర (గ-ల-గ)`,gana_ja:`జ (ల-గ-ల)`,gana_bha:`భ (గ-ల-ల)`,gana_na:`న (ల-ల-ల)`,gana_sa:`స (ల-ల-గ)`,gana_ga:`గ`,gana_gaa:`గా (గ-గ)`,gana_va:`వ (ల-గ)`,gana_ha:`హ (గ-ల)`,gana_lala:`లల`,gana_la:`ల`,gana_indra:`ఇంద్ర`,gana_surya:`సూర్య`,gana_chandra:`చంద్ర`,gana_guruvu:`గురువు`,gana_laghuvu:`లఘువు`,matra_singular:`మాత్ర`,matra_plural:`మాత్రలు`,pada_singular:`పాదం`,pada_plural:`పాదాలు`,custom_rules_title:`🎨 అనుకూల నియమాలు`,custom_rules_description:`సృష్టించబడిన అనుకూల నియమాలు`,custom_rules_btn_create:`అనుకూల నియమాన్ని సృష్టించండి`,results_add_to_examples:`+ ఉదాహరణ పంచుకోండి`,results_example_added:`జోడించబడింది!`,results_example_duplicate:`ఇప్పటికే ఉంది`,results_submit_github:`పంచుకోండి`,results_file_downloaded:`ఫైల్ డౌన్‌లోడ్ చేయబడింది! దయచేసి GitHub ఇష్యూకు జోడించండి.`,filter_clear_all:`అన్నీ తీసివేయి`,filter_search_placeholder:`నియమాల కోసం వెతకండి...`,filter_all_categories:`అన్ని వర్గాలు`,filter_no_results:`మీ వడపోతలకు సరిపోలే నియమాలు లేవు.`,filter_try_removing:`మరిన్ని ఫలితాలను చూడటానికి కొన్ని వడపోతలను తీసివేసి ప్రయత్నించండి.`,filter_showing:`చూపిస్తున్నవి`,filter_of:`/`,filter_results:`ఫలితాలు`,filter_with_examples:`ఉదాహరణలతో`,examples_none_available:`ఉదాహరణలు ఇంకా అందుబాటులో లేవు.`,examples_contribute_cta:`మీరు ఒకటి వ్రాసి సహకరించవచ్చు!`,generated_example_badge:`యంత్ర-నిర్మితం (Machine-Generated)`,generated_disclaimer:`స-రి-గ-మ-ప-ద-ని అక్షరాలతో ఛందస్సు నమూనా. సాహిత్యం కాదు.`,btn_regenerate:`మరొకటి`,results_export:`ఎగుమతి`,results_export_poem:`పద్యం మాత్రమే`,results_export_results:`పూర్తి ఫలితాలు`,export_book:`పుస్తకంగా ఎగుమతి చేయి`,export_book_single:`నియమాన్ని ఎగుమతి చేయి`,export_progress_title:`ఎగుమతి చేస్తోంది...`,export_cancel:`రద్దు`,export_book_subtitle:`తెలుగు ఛందస్సులు`,export_book_generated:`ఛందం నుండి రూపొందించబడింది`,home_btn_browse_rule_sets:`నియమావళులను చూడండి`,home_quick_links:`త్వరిత లింకులు`,home_link_rule_sets:`నియమావళులు`,home_link_rule_sets_desc:`అన్ని ఛందస్సుల సమూహాలను చూడండి`,home_link_about:`పరిచయం`,home_link_about_desc:`ఈ ప్రాజెక్టు గురించి తెలుసుకోండి`,home_link_credits:`కృతజ్ఞతలు`,home_link_credits_desc:`సహకారులు మరియు మూలాలు`,home_link_contact:`సంప్రదింపులు`,home_link_contact_desc:`మమ్మల్ని సంప్రదించండి`,rulesets_page_title:`నియమావళులు`,rulesets_heading:`తెలుగు పద్య ఛందస్సు నియమావళులు`,rulesets_subtitle:`పద్యాలను విశ్లేషించడానికి లేదా ఛందస్సు నేర్చుకోవడానికి ఒక నియమావళిని ఎంచుకోండి`,rulesets_rules_suffix:`నియమాలు`,rulesets_examples_suffix:`ఉదాహరణలు`,rulesets_btn_analyze:`విశ్లేషించండి`,rulesets_btn_learn:`నేర్చుకోండి`,breadcrumb_aria_label:`నావిగేషన్ పథం`,breadcrumb_rule_sets:`నియమావళులు`,breadcrumb_home:`హోమ్`,mode_switcher_aria_label:`మోడ్ ఎంపిక`,action_remove_favorite:`ఇష్టమైనవి నుండి తొలగించు`,action_add_favorite:`ఇష్టమైనవాటికి జోడించు`,action_delete_custom_rule:`ఈ అనుకూల నియమాన్ని తొలగించు`,action_submit_github:`GitHubకు సమర్పించు`,action_create_meter:`కొత్త ఛందస్సు సృష్టించు`,alert_max_favorites:`గరిష్టంగా 50 ఇష్టమైనవి చేరుకున్నాయి. కొత్తవి జోడించడానికి కొన్నింటిని తొలగించండి.`,alert_favorite_failed:`ఇష్టమైనవి నవీకరించడంలో విఫలమైంది`,alert_delete_confirm:`మీరు ఈ అనుకూల నియమాన్ని తొలగించాలని ఖచ్చితంగా అనుకుంటున్నారా? ఈ చర్యను రద్దు చేయలేరు.`,alert_delete_failed:`నియమాన్ని తొలగించడంలో విఫలమైంది. దయచేసి మళ్ళీ ప్రయత్నించండి.`,learn_btn_delete:`తొలగించు`,creator_validation_name_length:`నియమం పేరు {max} అక్షరాలు లేదా అంతకంటే తక్కువ ఉండాలి`,creator_validation_name_invalid:`నియమం పేరులో చెల్లని అక్షరాలు ఉన్నాయి`,creator_validation_name_exists:`ఈ పేరుతో ఒక నియమం ఇప్పటికే ఉంది. దయచేసి వేరే పేరు ఎంచుకోండి.`,creator_validation_lines_min:`పాదాల సంఖ్య కనీసం 1 ఉండాలి`,explore_graph_hint:`జూమ్ చేయడానికి స్క్రోల్ చేయండి. నోడ్‌లను లాగి అమర్చండి. వివరాలు చూడటానికి నియమంపై క్లిక్ చేయండి.`,nav_my_writings:`నా రచనలు`,writings_subtitle:`మీ సేకరణ ({count} పద్యాలు)`,writings_empty:`ఇంకా పద్యాలు భద్రపరచబడలేదు. ఒక పద్యాన్ని విశ్లేషించి మీ సేకరణకు జోడించండి!`,writings_delete:`తొలగించు`,writings_delete_confirm:`ఈ పద్యాన్ని మీ సేకరణ నుండి తొలగించాలా?`,results_add_to_collection:`భద్రపరచు`,results_added_to_collection:`భద్రపరచబడింది!`,results_already_in_collection:`ఇప్పటికే భద్రపరచబడింది`,results_collection_full:`సేకరణ నిండింది (20/20)`,nav_my_data:`నా డేటా`,my_data_title:`నా డేటా`,my_data_clear_btn:`మొత్తం డేటా తొలగించు`,my_data_writings_title:`నా రచనలు`,my_data_writings_desc:`పద్యాలు`,my_data_writings_subtitle:`మీ భద్రపరచిన పద్యాలు మరియు రచనలు`,my_data_favorites_title:`ఇష్టమైనవి`,my_data_favorites_desc:`నియమాలు`,my_data_favorites_subtitle:`శీఘ్ర ప్రాప్యత కోసం మీరు ఇష్టపడిన నియమాలు`,my_data_custom_rules_title:`అనుకూల నియమాలు`,my_data_custom_rules_desc:`నియమాలు`,my_data_custom_rules_subtitle:`మీరు సృష్టించిన ఛందస్సులు`,my_data_view:`చూడండి`,footer_clear_data:`డేటా తొలగించు`,footer_favorites:`ఇష్టమైనవి`,footer_custom_rules:`అనుకూల నియమాలు`,clear_data_warning:`ఇది మీ భద్రపరచిన పద్యాలు, ఇష్టమైనవి, అనుకూల నియమాలు మరియు ఎడిటర్ స్థితిని తొలగిస్తుంది. ఈ చర్యను రద్దు చేయలేరు. కొనసాగించాలా?`,page_about_title:`పరిచయం`,page_credits_title:`కృతజ్ఞతలు`,page_contact_title:`సంప్రదింపులు`}},ne=S.UI_LANGUAGE,C=`te`;function w(){return C}function re(){C=localStorage.getItem(ne)===`en`?`en`:`te`}function ie(e){C=e,localStorage.setItem(ne,e),window.dispatchEvent(new CustomEvent(`languagechange`,{detail:{language:e}}))}function ae(){ie(C===`en`?`te`:`en`)}function T(e){return te[C][e]??te.en[e]??e}function E(e){if(!e?.length)return``;let t=e.map((t,n)=>{let r=n===e.length-1,i=``;if(r||!t.url)i=`<span class="breadcrumb-current">${le(t.label)}</span>`;else{let r=n===e.length-2?`breadcrumb-parent`:`breadcrumb-ancestor`;i=`<a href="${v(t.url)}" class="breadcrumb-link ${r}">${le(t.label)}</a>`}return i}).join(`<span class="breadcrumb-separator">›</span>`);return`<nav class="breadcrumbs" aria-label="${T(`breadcrumb_aria_label`)}">${t}</nav>`}function oe(e,t,n){let r=n||(p(e)?.name??e);return[{label:T(`breadcrumb_rule_sets`),url:`/rule-sets`},{label:r}]}function se(e,t,n,r,i){let a=i||(p(e)?.name??e);return[{label:T(`breadcrumb_rule_sets`),url:`/rule-sets`},{label:a,url:`/${r}/${e}/`},{label:n}]}function ce(e){return[{label:T(`breadcrumb_home`),url:`/`},{label:e}]}function le(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}async function ue(){s(T(`rulesets_page_title`));let e=document.getElementById(`content`);if(!e)return;let t=ce(T(`rulesets_page_title`)),{customRulesService:n}=await d(async()=>{let{customRulesService:e}=await Promise.resolve().then(()=>M);return{customRulesService:e}},void 0),r=await n.getAllCustomRulesets(),i=r.filter(e=>e.type===`favorites`&&e.rules.length>0||e.type===`custom`&&e.id!==`custom-rules`),a=r.find(e=>e.id===`custom-rules`),o=i.map(e=>({id:e.id,name:e.name,description:e.description,ruleCount:e.rules.length,maxCount:(e.type,50),exampleCount:e.rules.reduce((e,t)=>e+(t.Examples?.length??0),0),isCustom:!0,isFavorites:e.type===`favorites`})),c=[...f,...o];e.innerHTML=`
    <div class="rule-sets-page">
      ${E(t)}

      <h1>${T(`rulesets_heading`)}</h1>
      <p class="subtitle">${T(`rulesets_subtitle`)}</p>

      <div class="rule-set-cards">
        ${c.map(e=>de(e)).join(``)}
        ${a&&a.rules.length>0?fe({...a,maxCount:50}):``}
        <a href="${v(`/create-rule`)}" class="rule-set-card create-rule-card">
          <div class="create-rule-icon">
            <span class="material-symbols-outlined" style="font-size:32px" aria-hidden="true">add</span>
          </div>
          <h2>${T(`custom_rules_btn_create`)}</h2>
        </a>
      </div>
    </div>
  `}function de(e){let t=e.isCustom?` custom-ruleset`:``,n=e.isFavorites?` favorites-ruleset`:``,r=e.exampleCount?` · ${e.exampleCount} ${T(`rulesets_examples_suffix`)}`:``,i=e.maxCount?`${e.ruleCount}/${e.maxCount}`:`${e.ruleCount}`;return`
    <div class="rule-set-card${t}${n}">
      <h2 class="meter-name">${e.name}</h2>
      <div class="rule-count">${i} ${T(`rulesets_rules_suffix`)}${r}</div>
      <p class="description">${e.description}</p>
      <div class="card-actions">
        <a href="${v(`/compute/${e.id}/`)}" class="btn-analyze">
          <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">play_arrow</span>
          ${T(`rulesets_btn_analyze`)}
        </a>
        <a href="${v(`/learn/${e.id}/`)}" class="btn-learn">
          <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">menu_book</span>
          ${T(`rulesets_btn_learn`)}
        </a>
      </div>
    </div>
  `}function fe(e){let t=e.maxCount?`${e.rules.length}/${e.maxCount}`:`${e.rules.length}`;return`
    <div class="rule-set-card custom-rules-card">
      <h2 class="meter-name">${T(`custom_rules_title`)}</h2>
      <div class="rule-count">${t} ${T(`label_rules_count`)}</div>
      <p class="description">${e.description}</p>
      <div class="card-actions">
        <a href="${v(`/compute/${e.id}/`)}" class="btn-analyze">
          <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">play_arrow</span>
          ${T(`mode_compute`)}
        </a>
        <a href="${v(`/learn/${e.id}/`)}" class="btn-learn">
          <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">menu_book</span>
          ${T(`mode_learn`)}
        </a>
      </div>
    </div>
  `}var D=class{static{this.ASSEMBLY=`Chandam.Wasm`}static async getAllRules(e=`te`){let t=await DotNet.invokeMethodAsync(this.ASSEMBLY,`GetAllRules`,e);return JSON.parse(t)}static async getAllRulesDetailed(e=`te`){let t=await DotNet.invokeMethodAsync(this.ASSEMBLY,`GetAllRulesDetailed`,e);return JSON.parse(t)}static async determine(e,t,n,r=`te`){let i=await DotNet.invokeMethodAsync(this.ASSEMBLY,`Determine`,e,t,n,r);return JSON.parse(i)}static async tryMatch(e,t,n,r){let i=await DotNet.invokeMethodAsync(this.ASSEMBLY,`TryMatch`,e,t,n,r);return JSON.parse(i)}static async getScores(e,t,n,r=50){let i=await DotNet.invokeMethodAsync(this.ASSEMBLY,`GetScores`,e,t,n,r);return JSON.parse(i)}static async getRuleInfo(e){let t=await DotNet.invokeMethodAsync(this.ASSEMBLY,`GetRuleInfo`,e);return JSON.parse(t)}static async getRuleDto(e){let t=await DotNet.invokeMethodAsync(this.ASSEMBLY,`GetRuleDto`,e);return JSON.parse(t)}static async getRandomPoem(e){let t=await DotNet.invokeMethodAsync(this.ASSEMBLY,`GetRandomPoem`,e);return JSON.parse(t)}static async getRandomPoemFromRuleSet(e=`te`){return await DotNet.invokeMethodAsync(this.ASSEMBLY,`GetRandomPoemFromRuleSet`,e)}static async reloadRules(e,t){let n=await DotNet.invokeMethodAsync(this.ASSEMBLY,`ReloadRules`,e,t);return JSON.parse(n)}static async searchRules(e,t=`te`){let n=await DotNet.invokeMethodAsync(this.ASSEMBLY,`SearchRules`,e.query||null,e.categories?.join(`,`)||null,e.chandamNames?.join(`,`)||null,e.frequencies?.join(`,`)||null,e.matraLengthMin||null,e.matraLengthMax||null,e.hasExamples,e.maxResults||0,t);return JSON.parse(n)}static async getVersion(){return await DotNet.invokeMethodAsync(this.ASSEMBLY,`GetVersion`)}static async getBuildDate(){return await DotNet.invokeMethodAsync(this.ASSEMBLY,`GetBuildDate`)}static async getAvailableFilters(e=`te`){let t=await DotNet.invokeMethodAsync(this.ASSEMBLY,`GetAvailableFilters`,e);return JSON.parse(t)}},pe={Akkara:1,Divpada:2,Jati:3,Ragada:4,Ragada2:5,Shatpada:6,UpaJati:7,Sisamu:8,Vruttam:9,DaMDakamu:10,ArdhaVruttam:11,VishamaVruttam:12,GenricVruttam:99,Other:100},me={Akkara:`జాతి(అక్కరలు)`,Divpada:`జాతి(ద్విపదలు)`,Jati:`జాతి`,Ragada:`జాతి(రగడలు)`,Ragada2:`జాతి(రగడలు)`,Shatpada:`జాతి(షట్పదలు)`,UpaJati:`ఉపజాతి`,Sisamu:`ఉపజాతి(సీసములు)`,Vruttam:`వృత్తం`,DaMDakamu:`దండకము`,ArdhaVruttam:`అర్ధ సమవృత్తం`,VishamaVruttam:`విషమవృత్తం`,GenricVruttam:`ఏదేని సమ వృత్తం`,Other:`ఇతర`};function he(e){let t=new Map;return e.forEach(e=>{if(e.padyamSubType===`GenricVruttam`)return;let n;n=e.padyamType===`Vruttam`&&e.padyamSubType===`Vruttam`&&e.chandamName?`vruttam:${e.chandamName}`:e.padyamSubType?`subtype:${e.padyamSubType}`:`subtype:Other`,t.has(n)||t.set(n,[]),t.get(n).push(e)}),t}function ge(e){return Array.from(e.keys()).sort((t,n)=>{let[r,i]=t.split(`:`),[a,o]=n.split(`:`);if(r===`subtype`&&i===`GenricVruttam`)return 1;if(a===`subtype`&&o===`GenricVruttam`)return-1;if(r===`vruttam`&&a===`vruttam`){let r=e.get(t),i=e.get(n);return(r[0]?.charLength??999)-(i[0]?.charLength??999)}return r===`subtype`&&a===`subtype`?(pe[i]??100)-(pe[o]??100):r===`subtype`?-1:a===`subtype`?1:0})}function _e(e){return me[e]||e}function ve(e,t){let[n,r]=e.split(`:`);if(n===`vruttam`){let n=t.get(e)?.[0]?.charLength;return n!==void 0&&n!==-1?`${r} (${n})`:r}return n===`subtype`&&me[r]||r}function ye(e,t){let n=document.getElementById(t);if(!n)return;let r=he(e),i=ge(r),a=document.createElement(`div`);a.className=`rule-list`;let o=null;i.forEach(e=>{let t=r.get(e),n=document.createElement(`div`);n.className=`rule-group-header`,n.textContent=ve(e,r),a.appendChild(n),t.forEach(e=>{o||={id:e.identifier,name:e.shortName||e.name};let t=document.createElement(`div`);t.className=`rule-item`,t.textContent=e.shortName||e.name,t.dataset.ruleId=e.identifier,t.dataset.ruleName=e.shortName||e.name,t.addEventListener(`click`,()=>{Se(e.identifier,e.shortName||e.name)}),a.appendChild(t)})}),n.innerHTML=``,n.appendChild(a),be(o),xe()}function be(e){let t=document.getElementById(`rule-picker-inline`),n=document.getElementById(`selected-rule-name`);t&&e?(t.dataset.selectedRule=e.id,n&&(n.textContent=`${T(`editor_matching_with`)} ${e.name} ▼`)):t&&(t.dataset.selectedRule=``,n&&(n.textContent=`${T(`editor_matching_with`)} ${T(`editor_select_rule`)}`)),t&&(t.open=!1)}function xe(){let e=document.getElementById(`rule-picker-inline`);e&&document.addEventListener(`click`,t=>{e.open&&!e.contains(t.target)&&(e.open=!1)})}function Se(e,t){Ce(e,t)}function Ce(e,t){let n=document.getElementById(`selected-rule-name`);n&&(n.textContent=`${T(`editor_matching_with`)} ${t} ▼`,n.classList.add(`has-selection`));let r=document.getElementById(`rule-picker-inline`);r&&(r.dataset.selectedRule=e,r.open=!1)}function we(){return document.getElementById(`rule-picker-inline`)?.dataset.selectedRule||``}var Te=class{constructor(){this.prefix=`chandam:`}set(e,t){try{localStorage.setItem(this.prefix+e,JSON.stringify(t))}catch(t){console.error(`Failed to save to localStorage: ${e}`,t)}}get(e,t){try{let n=localStorage.getItem(this.prefix+e);return n?JSON.parse(n):t}catch(n){return console.error(`Failed to read from localStorage: ${e}`,n),t}}remove(e){localStorage.removeItem(this.prefix+e)}clear(){Object.keys(localStorage).filter(e=>e.startsWith(this.prefix)).forEach(e=>localStorage.removeItem(e))}};async function Ee(e){let t=new TextEncoder,n=new Blob([t.encode(e)]).stream().pipeThrough(new CompressionStream(`gzip`)).getReader(),r=[],i=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;r.push(t),i+=t.length}let a=new Uint8Array(i),o=0;for(let e of r)a.set(e,o),o+=e.length;return a}async function De(e){let t=new Blob([new Uint8Array(e)]).stream().pipeThrough(new DecompressionStream(`gzip`)).getReader(),n=[],r=0;for(;;){let{done:e,value:i}=await t.read();if(e)break;n.push(i),r+=i.length}let i=new Uint8Array(r),a=0;for(let e of n)i.set(e,a),a+=e.length;return new TextDecoder(`utf-8`).decode(i)}var Oe=class{constructor(){this.dbName=x,this.version=1,this.db=null}async init(){if(!this.db)return new Promise((e,t)=>{let n=indexedDB.open(this.dbName,this.version);n.onerror=()=>t(n.error),n.onsuccess=()=>{this.db=n.result,e()},n.onupgradeneeded=e=>{let t=e.target.result;t.objectStoreNames.contains(`compressed-data`)||t.createObjectStore(`compressed-data`,{keyPath:`id`})}})}async destroyAndRecreate(){this.db&&=(this.db.close(),null),await new Promise((e,t)=>{let n=indexedDB.deleteDatabase(this.dbName);n.onsuccess=()=>e(),n.onerror=()=>t(n.error),n.onblocked=()=>e()}),await this.init()}async getData(e){this.db||await this.init();let t=await this.getRaw(e);if(!t)return;let n=await De(t.data);return JSON.parse(n)}async saveData(e,t){this.db||await this.init();let n={id:e,data:await Ee(JSON.stringify(t))};return new Promise((e,t)=>{let r=this.db.transaction(`compressed-data`,`readwrite`).objectStore(`compressed-data`).put(n);r.onsuccess=()=>e(),r.onerror=()=>t(r.error)})}async deleteData(e){return this.db||await this.init(),new Promise((t,n)=>{let r=this.db.transaction(`compressed-data`,`readwrite`).objectStore(`compressed-data`).delete(e);r.onsuccess=()=>t(),r.onerror=()=>n(r.error)})}async clearAll(){return this.db||await this.init(),new Promise((e,t)=>{let n=this.db.transaction(`compressed-data`,`readwrite`).objectStore(`compressed-data`).clear();n.onsuccess=()=>e(),n.onerror=()=>t(n.error)})}async getRaw(e){return new Promise((t,n)=>{let r=this.db.transaction(`compressed-data`,`readonly`).objectStore(`compressed-data`).get(e);r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error)})}},ke=S.STORAGE_VERSION,Ae=[{version:`A`,name:`compressed-storage`,migrate:Ne}];async function je(){let e=localStorage.getItem(ke)??``;for(let t of Ae)e<t.version&&(console.log(`Migration: ${t.name} → ${t.version}`),await t.migrate(),localStorage.setItem(ke,t.version))}function Me(){localStorage.removeItem(ke)}async function Ne(){await Pe()}async function Pe(){return new Promise((e,t)=>{let n=indexedDB.deleteDatabase(x);n.onsuccess=()=>e(),n.onerror=()=>t(n.error),n.onblocked=()=>{console.warn(`Migration: DB delete blocked — closing open connections`),e()}})}var O=new class{constructor(){this.localStorage=new Te,this.indexedDB=new Oe,this.initialized=!1}async init(){this.initialized||=(await je(),await this.indexedDB.init(),!0)}saveEditorState(e){e.text!==void 0&&this.localStorage.set(`editor:text`,e.text),e.language!==void 0&&this.localStorage.set(`editor:language`,e.language),e.matchYati!==void 0&&this.localStorage.set(`editor:matchYati`,e.matchYati),e.matchPrasa!==void 0&&this.localStorage.set(`editor:matchPrasa`,e.matchPrasa),e.selectedRule!==void 0&&this.localStorage.set(`editor:selectedRule`,e.selectedRule)}loadEditorState(){return{text:this.localStorage.get(`editor:text`,``)||``,language:this.localStorage.get(`editor:language`,`te`)||`te`,matchYati:this.localStorage.get(`editor:matchYati`,!0)??!0,matchPrasa:this.localStorage.get(`editor:matchPrasa`,!0)??!0,selectedRule:this.localStorage.get(`editor:selectedRule`,``)}}clearEditorState(){this.localStorage.remove(`editor:text`),this.localStorage.remove(`editor:selectedRule`)}saveUIState(e){e.ruleSet!==void 0&&this.localStorage.set(`ui:ruleSet`,e.ruleSet),e.autoDetect!==void 0&&this.localStorage.set(`ui:autoDetect`,e.autoDetect),e.lastVisited!==void 0&&this.localStorage.set(`ui:lastVisited`,e.lastVisited)}loadUIState(){return{ruleSet:this.localStorage.get(`ui:ruleSet`,`frequent`)||`frequent`,autoDetect:this.localStorage.get(`ui:autoDetect`,!0)??!0,lastVisited:this.localStorage.get(`ui:lastVisited`)}}async clearAll(){this.localStorage.clear(),Me(),await this.init(),await this.indexedDB.clearAll()}},Fe;function Ie(){return document.getElementById(`poem-editor`)?.value||``}function Le(e){let t=document.getElementById(`poem-editor`);t&&(t.value=e)}function Re(){Le(``),O.clearEditorState()}function ze(){let e=document.getElementById(`poem-editor`);if(!e){console.warn(`Cannot enable auto-save: editor element not found`);return}e.removeEventListener(`input`,Be),e.addEventListener(`input`,Be),console.log(`Editor auto-save enabled (1s debounce)`)}function Be(e){let t=e.target;Fe!==void 0&&window.clearTimeout(Fe),Fe=window.setTimeout(()=>{O.saveEditorState({text:t.value}),console.log(`Editor text auto-saved to localStorage`)},1e3)}function Ve(e){return`
    <div class="editor-section">
      <div class="editor-toolbar">
        <div class="editor-context-group">
          ${e.showRulePicker?`
            <label class="toggle-switch" for="auto-detect">
              <input type="checkbox" id="auto-detect" checked aria-label="${T(`editor_auto_detect`)}">
              <span class="toggle-slider"></span>
              <span class="toggle-label">${T(`editor_auto_detect`)}</span>
            </label>
            <span class="separator" aria-hidden="true">|</span>
            <details class="rule-picker-inline" id="rule-picker-inline" style="display: none;">
              <summary id="selected-rule-name" aria-haspopup="listbox">${T(`editor_matching_with`)} ${T(`editor_select_rule`)}</summary>
              <div class="picker-dropdown" id="rule-picker-container" role="listbox"></div>
            </details>
            <span id="editor-context-label" class="editor-context" style="display: inline;">
              ${e.contextText}
            </span>
          `:`
            <span class="editor-context">${e.contextText}</span>
          `}
        </div>

        <div class="editor-actions">
          <button id="btn-random" title="${T(`editor_btn_random`)}">
            <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">casino</span>
            ${T(`editor_btn_random`)}
          </button>
          <span class="action-separator" aria-hidden="true">|</span>
          <button id="btn-clear" title="${T(`editor_btn_clear`)}">
            <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">delete_sweep</span>
            ${T(`editor_btn_clear`)}
          </button>
        </div>
      </div>

      <textarea id="poem-editor" rows="5" placeholder="${T(`editor_placeholder`)}" aria-label="${T(`editor_placeholder`)}"></textarea>

      <div class="controls-bar">
        <div class="toggle-group">
          <label class="toggle-switch" for="match-yati">
            <input type="checkbox" id="match-yati" checked aria-label="${T(`editor_yati`)}">
            <span class="toggle-slider"></span>
            <span class="toggle-label">${T(`editor_yati`)}</span>
          </label>
          <span class="separator" aria-hidden="true">|</span>
          <label class="toggle-switch" for="match-prasa">
            <input type="checkbox" id="match-prasa" checked aria-label="${T(`editor_prasa`)}">
            <span class="toggle-slider"></span>
            <span class="toggle-label">${T(`editor_prasa`)}</span>
          </label>
        </div>

        <div class="main-actions">
          <button id="btn-analyze" class="btn-primary">
            <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">play_arrow</span>
            ${T(`editor_btn_analyze`)}
          </button>
        </div>
      </div>
    </div>
  `}function He(){let e=document.getElementById(`editor-context-label`),t=document.getElementById(`rule-picker-inline`);e&&(e.style.display=`none`),t&&(t.style.display=`inline-block`)}function Ue(){let e=document.getElementById(`editor-context-label`),t=document.getElementById(`rule-picker-inline`);e&&(e.style.display=`inline`),t&&(t.style.display=`none`)}async function We(e,t){let n=`${e}|${t.trim().normalize(`NFC`)}`,r=new TextEncoder().encode(n),i=await crypto.subtle.digest(`SHA-256`,r);return Array.from(new Uint8Array(i)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function Ge(e,t){return(await We(e,t)).substring(0,16)}function Ke(e,n){let r=t.startTimedEvent(`submit_github_download`,{ruleId:e.ruleIdentifier,ruleSetId:e.type===`new-example`?e.ruleSetId:`custom-rules`,type:e.type,source:n,exampleCount:e.examples.length}),i=Je(e);r();let a=t.startTimedEvent(`submit_github_redirect`,{ruleId:e.ruleIdentifier,ruleSetId:e.type===`new-example`?e.ruleSetId:`custom-rules`,type:e.type,source:n});Xe(e,i),a()}function qe(e){let t=new Date().toISOString().slice(0,10);return`chandam-${e.type===`custom-rule`?`custom`:`example`}-${e.ruleIdentifier}-${t}.json`}function Je(e){let t=JSON.stringify(e,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=qe(e),a=document.createElement(`a`);return a.href=r,a.download=i,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(r),i}function Ye(e,t){return e.type===`custom-rule`?[`## Custom Rule Submission`,``,`**Rule Name**: ${e.ruleName}`,`**Language**: ${e.language}`,`**Rule Identifier**: ${e.ruleIdentifier}`,``,`### Required Attachment`,`Please upload the downloaded JSON file: \`${t}\``,`Drag and drop it into this issue body before submitting.`,``,`### Additional Context`,`<!-- Add references, source texts, or notes about this meter -->`].join(`
`):[`## New Example Submission`,``,`**Rule Name**: ${e.ruleName}`,`**Rule Set**: ${e.ruleSetId}`,`**Rule Identifier**: ${e.ruleIdentifier}`,``,`### Required Attachment`,`Please upload the downloaded JSON file: \`${t}\``,`Drag and drop it into this issue body before submitting.`,``,`### Source / Attribution`,`- **Author**: `,`- **Source text**: `].join(`
`)}function Xe(e,t){let n=new URL(`${ee}/issues/new`);e.type===`custom-rule`?(n.searchParams.set(`template`,`custom-rule-submission.md`),n.searchParams.set(`title`,`[Custom Rule] ${e.ruleName}`),n.searchParams.set(`labels`,`custom-rule,community`)):(n.searchParams.set(`template`,`new-examples.md`),n.searchParams.set(`title`,`[New Example] ${e.ruleName} (${e.ruleSetId}/${e.ruleIdentifier})`),n.searchParams.set(`labels`,`examples,community`)),n.searchParams.set(`body`,Ye(e,t)),window.open(n.toString(),`_blank`,`noopener,noreferrer`)}function Ze(e,t,n,r,i,a){return{type:`custom-rule`,ruleName:e,ruleIdentifier:t,language:n,description:r,rule:i,examples:a,exportedAt:new Date().toISOString(),version:`1.0`}}function Qe(e,t,n,r){return{type:`new-example`,ruleName:e,ruleSetId:t,ruleIdentifier:n,examples:r,exportedAt:new Date().toISOString(),version:`1.0`}}function $e(e){let t=document.createElement(`div`);return t.innerHTML=e,t.textContent||``}var et=S.POEMS,tt=new class{async addPoem(e,t,n,r,i){await O.init();let a=await this.loadPoems();if(a.length>=20)return`full`;let o=await Ge(t,r);return a.some(e=>e.poemHash===o)?`duplicate`:(a.push({ruleSetId:e,ruleIdentifier:t,ruleName:n,poemText:r,beautified:i,poemHash:o,addedAt:Date.now()}),await this.savePoems(a),`added`)}async removePoem(e){await O.init();let t=(await this.loadPoems()).filter(t=>t.poemHash!==e);await this.savePoems(t)}async getAllPoems(){return await O.init(),this.loadPoems()}async isInCollection(e,t){await O.init();let n=await Ge(e,t);return(await this.loadPoems()).some(e=>e.poemHash===n)}async getPoemCount(){return(await this.loadPoems()).length}async loadPoems(){return await O.indexedDB.getData(et)??[]}async savePoems(e){await O.indexedDB.saveData(et,e)}};function nt(e){return e.split(/<br\s*\/?>/gi).filter(e=>e.trim()).map(e=>`<span class="poem-line">${e}</span>`).join(``)}var rt=new Map;async function it(e,t,n,r){let i=document.getElementById(t);if(!i)return;i.innerHTML=at(e,n,r?.showRuleLink??!0)+gt(),lt(i,n);let a=document.getElementById(`results-section`);a&&(a.style.display=`block`),await _t(e)}function at(e,t,n=!0){rt.set(e.rule.identifier,e);let r=e.isMatched?`match-success`:`match-failure`,i=e.isMatched?`✓`:`✗`,a=ot(e.matchPercentage),o=e.matchPercentage<100?`<div class="match-score-group">
        <div class="match-score-bar"><div class="match-score-bar-fill score-bar-${a}" style="width: ${e.matchPercentage}%"></div></div>
        <span class="match-score-value match-score-${a}">${e.matchPercentage}%</span>
      </div>`:``,s=e.rule.identifier===`GenericVruttam`,c=n&&t&&e.rule.identifier&&!s?`<a href="${v(`/learn/${t}/${e.rule.identifier}/`)}" class="action-btn rule-details-link" target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">menu_book</span> <span>${T(`results_view_details`)}</span></a>`:``,l=e.rule.identifier.startsWith(`custom-`),u=e.matchPercentage>=95&&l?`<button class="action-btn btn-add-example" data-rule-id="${k(e.rule.identifier)}" title="${T(`results_add_to_examples`)}"><span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">add</span> <span>${T(`results_add_to_examples`)}</span></button>`:``,d=e.matchPercentage>=95&&t&&!s?`<button class="action-btn btn-submit-github" data-rule-id="${k(e.rule.identifier)}" data-rule-name="${k(e.rule.name)}" data-rule-set="${k(t)}" title="${T(`results_submit_github`)}"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg> <span>${T(`results_submit_github`)}</span></button>`:``,f=e.rule.shortName||e.rule.name,p=e.matchPercentage>=95&&t&&!s?`<button class="action-btn btn-add-collection" data-rule-id="${k(e.rule.identifier)}" data-rule-name="${k(f)}" data-rule-set="${k(t)}"><span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">bookmark</span> <span>${T(`results_add_to_collection`)}</span></button>`:``,m=e.matchPercentage===100&&e.beautified?`<div class="export-dropdown" data-rule-id="${k(e.rule.identifier)}">
        <button class="action-btn btn-export" title="Export as Image"><span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">ios_share</span> <span>${T(`results_export`)}</span></button>
        <div class="export-dropdown-menu">
          <button class="export-option" data-mode="poem"><span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">article</span> ${T(`results_export_poem`)}</button>
          <button class="export-option" data-mode="results"><span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">dashboard</span> ${T(`results_export_results`)}</button>
        </div>
      </div>`:``,h=e.errors&&e.errors.length>0?st(e.errors):``,g;if(e.matchPercentage===100&&e.beautified)g=`
      <div class="match-body-split">
        <div class="padyam">
          <div class="poem">
            ${nt(e.beautified)}
          </div>
        </div>
        <div class="ganaVibhajana">
          ${e.html||``}
        </div>
      </div>
    `;else{let t=e.errors&&e.errors.length>0;g=`
      <div class="match-body-split">
        <div class="match-table-container">
          ${e.html||``}
        </div>
        ${t?`<div class="match-errors-container">${h}</div>`:``}
      </div>
    `}let _=e.matchPercentage<100&&e.rule.sequence?`<div class="match-sequence-hint">${e.rule.sequence}</div>`:``;return`
    <div class="match-card ${r}">
      <div class="match-header">
        <div class="match-title-group">
          <span class="match-icon">${i}</span>
          <h3 class="meter-name">${e.rule.name}</h3>
          ${o}
        </div>
        <div class="match-actions">
          ${p}
          ${u}
          ${d}
          ${c}
          ${m}
        </div>
      </div>
      ${_}
      ${g}
    </div>
  `}function ot(e){return e>=95?`high`:e>=85?`medium`:`low`}function st(e){let t=e.length,n=T(t===1?`results_mismatch_singular`:`results_mismatch_plural`),r=e.map(e=>`
    <tr>
      <td class="error-line">${e.line===0?``:e.line}</td>
      <td class="error-position">${e.line===0||e.position===-1?``:e.position}</td>
      <td class="error-expected">${e.expected}</td>
      <td class="error-actual">${e.actual}</td>
      <td class="error-description">${e.mismatchDescription}${e.remarks?`<br><em>${e.remarks}</em>`:``}</td>
    </tr>
  `).join(``);return`
    <div class="errors-section">
      <h4 class="errors-header">⚠ ${n} (${t})</h4>
      <div class="errors-table-wrapper">
        <table class="errors-table">
          <thead>
            <tr>
              <th>${T(`results_line`)}</th>
              <th>${T(`results_position`)}</th>
              <th>${T(`results_expected`)}</th>
              <th>${T(`results_actual`)}</th>
              <th>${T(`results_description`)}</th>
            </tr>
          </thead>
          <tbody>
            ${r}
          </tbody>
        </table>
      </div>
    </div>
  `}var ct=null;function lt(e,t){ct&&ct.abort(),ct=new AbortController,e.addEventListener(`click`,async n=>{let r=n.target,i=r.closest(`.btn-add-example`),a=r.closest(`.btn-submit-github`),o=r.closest(`.btn-add-collection`),s=r.closest(`.btn-export`),c=r.closest(`.export-option`);if(i)await ut(i);else if(a)await dt(a,t);else if(o)await ft(o,t);else if(s){let e=s.closest(`.export-dropdown`);e&&e.classList.toggle(`open`)}else if(c){let e=c.closest(`.export-dropdown`);e&&e.classList.remove(`open`),await pt(c)}else e.querySelectorAll(`.export-dropdown.open`).forEach(e=>e.classList.remove(`open`))},{signal:ct.signal})}async function ut(e){let n=e.getAttribute(`data-rule-id`);if(!n)return;let r=document.getElementById(`poem-editor`)?.value?.trim();if(!r)return;let i=t.startTimedEvent(`example_added`,{ruleId:n,source:`results`}),{customRulesService:a}=await d(async()=>{let{customRulesService:e}=await Promise.resolve().then(()=>M);return{customRulesService:e}},void 0);if(await a.addExampleToRule(n,r)){let t=(await a.getCustomRule(n))?.Examples.length??0;e.textContent=T(`results_example_added`),e.classList.add(`btn-success`),e.setAttribute(`disabled`,`true`),i({exampleCount:t})}else e.textContent=T(`results_example_duplicate`),e.classList.add(`btn-warning`),e.setAttribute(`disabled`,`true`),t.startTimedEvent(`example_duplicate`,{ruleId:n})()}async function dt(e,t){let n=e.getAttribute(`data-rule-id`)||``,r=e.getAttribute(`data-rule-name`)||``,i=e.getAttribute(`data-rule-set`)||t||``,a=document.getElementById(`poem-editor`)?.value?.trim()||``;if(n.startsWith(`custom-`)){let{customRulesService:e}=await d(async()=>{let{customRulesService:e}=await Promise.resolve().then(()=>M);return{customRulesService:e}},void 0),t=await e.getCustomRule(n);if(!t)return;let i=await D.getRuleInfo(n),o=i?.description?$e(i.description):``,s=[...t.Examples];a&&!s.includes(a)&&s.push(a),Ke(Ze(r,n,t.Language,o,t,s),`results`)}else Ke(Qe(r,i,n,a?[a]:[]),`results`)}async function ft(e,n){let r=e.getAttribute(`data-rule-id`)||``,i=e.getAttribute(`data-rule-name`)||``,a=e.getAttribute(`data-rule-set`)||n||``,o=document.getElementById(`poem-editor`)?.value?.trim();if(!o)return;let s=rt.get(r)?.beautified||``,c=await tt.addPoem(a,r,i,o,s);c===`added`?(e.textContent=T(`results_added_to_collection`),e.classList.add(`btn-success`),e.setAttribute(`disabled`,`true`),t.trackEvent(`poem_collected`,{ruleId:r,ruleSet:a})):c===`duplicate`?(e.textContent=T(`results_already_in_collection`),e.classList.add(`btn-warning`),e.setAttribute(`disabled`,`true`)):(e.textContent=T(`results_collection_full`),e.classList.add(`btn-warning`),e.setAttribute(`disabled`,`true`))}async function pt(e){let t=e.getAttribute(`data-mode`);if(!t)return;let n=e.closest(`.match-card`);if(!n)return;let r=n.querySelector(`.meter-name`)?.textContent||`poem`,i=e.closest(`.export-dropdown`)?.getAttribute(`data-rule-id`)||`unknown`,{exportAsImage:a}=await d(async()=>{let{exportAsImage:e}=await import(`./assets/export-image-DoDwKoh2.js`);return{exportAsImage:e}},[]);await a(n,t,r,i)}function mt(e,t,n){let r=document.getElementById(t);if(!r)return;let i=e.map(e=>{let t=ot(e.matchPercentage),r=n?`<a href="${v(`/learn/${n}/${e.identifier}/`)}" class="score-card-link">${e.name}</a>`:`<span class="score-card-name">${e.name}</span>`,i=n?`<button class="score-card-try" data-rule-id="${e.identifier}" data-rule-name="${e.name}" title="${T(`link_try`)}">
          <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">play_arrow</span>
        </button>`:``;return`
      <div class="score-card">
        <div class="score-card-info">
          ${r}
        </div>
        <div class="score-card-bar-group">
          <div class="score-card-bar">
            <div class="score-card-bar-fill score-bar-${t}" style="width: ${e.matchPercentage}%"></div>
          </div>
          <span class="score-card-percent match-score-${t}">${e.matchPercentage}%</span>
          ${i}
        </div>
      </div>
    `}).join(``);r.innerHTML=`
    <div class="score-cards-section">
      <h4 class="score-cards-heading">${T(`results_alternatives`)}</h4>
      ${i}
    </div>
  `}function ht(){let e=document.getElementById(`results-section`);e&&(e.style.display=`none`);let t=document.getElementById(`results-container`);t&&(t.innerHTML=``);let n=document.getElementById(`score-cards-container`);n&&(n.innerHTML=``)}function gt(){return`<div class="results-disclaimer">${T(`results_disclaimer`)}</div>`}function k(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}async function _t(e){if(t.trackEvent(`analysis_result`,{ruleId:e.rule.identifier,matchPercentage:e.matchPercentage,score:e.score,total:e.total}),e.matchPercentage===100)try{let n=document.getElementById(`poem-editor`)?.value||``;if(n){let r=await Ge(e.rule.identifier,n);t.trackEvent(`perfect_match`,{ruleId:e.rule.identifier,contentHash:r})}}catch(e){console.error(`Failed to track perfect match:`,e)}}function vt(e){let{ruleSetId:t,ruleId:n,currentMode:r}=e,i=n?`/learn/${t}/${n}`:`/learn/${t}/`,a=n?`/compute/${t}/${n}`:`/compute/${t}/`,o=r===`learn`,s=r===`compute`,c=`mode-tab mode-tab-learn${o?` mode-tab-active`:``}`,l=`mode-tab mode-tab-compute${s?` mode-tab-active`:``}`,u=o?`<span class="${c}">${yt(T(`mode_learn`))}</span>`:`<a href="${v(i)}" class="${c}">${yt(T(`mode_learn`))}</a>`,d=s?`<span class="${l}">${yt(T(`mode_compute`))}</span>`:`<a href="${v(a)}" class="${l}">${yt(T(`mode_compute`))}</a>`;return`
    <nav class="mode-switcher" role="tablist" aria-label="${T(`mode_switcher_aria_label`)}">
      ${u}
      ${d}
    </nav>
  `}function yt(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}var bt=S.FAVORITES;S.FAV_RULESET;var A=new class{async isFavorited(e,t){let n=this.makeCompositeId(e,t);return(await this.loadFavorites()).some(e=>e.id===n)}async toggleFavorite(e,t,n){await O.init();let r=this.makeCompositeId(e,t),i=await this.loadFavorites(),a=i.findIndex(e=>e.id===r);if(a>=0)i.splice(a,1);else{if(i.length>=50)throw Error(`Maximum 50 favorites reached`);i.push({id:r,ruleSetId:e,ruleId:t,ruleData:n,favoritedAt:Date.now()})}return await this.saveFavorites(i),await this.regenerateFavoritesRuleset(i),a<0}async regenerateFavoritesRuleset(e){await O.init();let t=e??await this.loadFavorites();t.sort((e,t)=>e.favoritedAt-t.favoritedAt);let n=await this.loadCustomRulesets();if(t.length>0){let e={id:`custom-fav`,name:`⭐ My Favorites`,description:`${t.length} favorited rules from various rulesets`,rules:t.map(e=>e.ruleData),type:`favorites`,createdAt:Date.now(),updatedAt:Date.now()},r=n.findIndex(e=>e.id===`custom-fav`);r>=0?n[r]=e:n.push(e)}else{let e=n.findIndex(e=>e.id===`custom-fav`);e>=0&&n.splice(e,1)}await O.indexedDB.saveData(`custom-rulesets`,n)}async getFavoriteCount(){return(await this.loadFavorites()).length}async getAllFavorites(){return this.loadFavorites()}makeCompositeId(e,t){return`${e}:${t}`}async loadFavorites(){return await O.init(),await O.indexedDB.getData(bt)??[]}async saveFavorites(e){await O.indexedDB.saveData(bt,e)}async loadCustomRulesets(){return await O.indexedDB.getData(`custom-rulesets`)??[]}},xt=`toast-container`,St=3,Ct=5e3,wt=0,Tt=[];function Et(){let e=document.getElementById(xt);return e||(e=document.createElement(`div`),e.id=xt,e.className=`toast-container`,e.setAttribute(`aria-live`,`assertive`),e.setAttribute(`aria-atomic`,`true`),document.body.appendChild(e)),e}function Dt(e){let t=Tt.findIndex(t=>t.id===e.id);t>=0&&Tt.splice(t,1),window.clearTimeout(e.dismissTimeout),e.element.classList.add(`is-closing`),window.setTimeout(()=>{e.element.remove()},240)}function Ot(e,t){let n,r=window.setTimeout(()=>{Dt(n)},t);return n={id:++wt,element:e,dismissTimeout:r},Tt.push(n),n}function kt(){for(;Tt.length>St;){let e=Tt.shift();if(!e)break;window.clearTimeout(e.dismissTimeout),e.element.remove()}}function At(e,t,n){let r=document.createElement(`article`);r.className=`toast toast-${e}`,r.setAttribute(`role`,`alert`);let i=n.durationMs??Ct,a=document.createElement(`h4`);a.className=`toast-title`,a.textContent=n.title??e.charAt(0).toUpperCase()+e.slice(1);let o=document.createElement(`p`);o.className=`toast-message`,o.textContent=t;let s=document.createElement(`button`);s.type=`button`,s.className=`toast-close`,s.setAttribute(`aria-label`,`Dismiss notification`),s.textContent=`x`;let c=document.createElement(`div`);c.className=`toast-progress`,c.style.animationDuration=`${i}ms`;let l=document.createElement(`div`);return l.className=`toast-content`,l.appendChild(a),l.appendChild(o),r.appendChild(l),r.appendChild(s),r.appendChild(c),r}function j(e,t=`info`,n={}){let r=Et(),i=At(t,e,n);r.appendChild(i);let a=Ot(i,n.durationMs??Ct);i.querySelector(`.toast-close`)?.addEventListener(`click`,()=>Dt(a)),kt()}function jt(e,t=`warning`,n={}){let r=e.filter(Boolean);if(r.length===0)return;let i=Et(),a=document.createElement(`article`);a.className=`toast toast-${t}`,a.setAttribute(`role`,`alert`);let o=n.durationMs??Ct,s=document.createElement(`h4`);s.className=`toast-title`,s.textContent=n.title??`Validation`;let c=document.createElement(`ul`);c.className=`toast-list`,r.forEach(e=>{let t=document.createElement(`li`);t.textContent=e,c.appendChild(t)});let l=document.createElement(`button`);l.type=`button`,l.className=`toast-close`,l.setAttribute(`aria-label`,`Dismiss notification`),l.textContent=`x`;let u=document.createElement(`div`);u.className=`toast-progress`,u.style.animationDuration=`${o}ms`;let d=document.createElement(`div`);d.className=`toast-content`,d.appendChild(s),d.appendChild(c),a.appendChild(d),a.appendChild(l),a.appendChild(u),i.appendChild(a);let f=Ot(a,o);l.addEventListener(`click`,()=>Dt(f)),kt()}var Mt=`confirm-dialog-overlay`;function Nt(e){e.classList.add(`is-closing`),window.setTimeout(()=>{e.remove()},150)}function Pt(e,t,n){if(e.key!==`Tab`)return;let r=document.activeElement;e.shiftKey&&r===t?(e.preventDefault(),n.focus()):!e.shiftKey&&r===n&&(e.preventDefault(),t.focus())}function Ft(e,t={}){let n=document.getElementById(Mt);return n&&n.remove(),new Promise(n=>{let r=document.activeElement,i=document.createElement(`div`);i.id=Mt,i.className=`confirm-overlay`;let a=document.createElement(`div`);a.className=`confirm-dialog`,a.setAttribute(`role`,`dialog`),a.setAttribute(`aria-modal`,`true`);let o=document.createElement(`h3`);o.className=`confirm-title`,o.textContent=t.title??`Confirm action`;let s=document.createElement(`p`);s.className=`confirm-message`,s.textContent=e;let c=document.createElement(`div`);c.className=`confirm-actions`;let l=document.createElement(`button`);l.type=`button`,l.className=`btn-secondary`,l.textContent=t.cancelText??`Cancel`;let u=document.createElement(`button`);u.type=`button`,u.className=`btn-danger`,u.textContent=t.confirmText??`Delete`,c.appendChild(l),c.appendChild(u),a.appendChild(o),a.appendChild(s),a.appendChild(c),i.appendChild(a),document.body.appendChild(i);let d=l,f=u,p=e=>{document.removeEventListener(`keydown`,m),Nt(i),r?.focus(),n(e)},m=e=>{if(e.key===`Escape`){p(!1);return}Pt(e,d,f)};document.addEventListener(`keydown`,m),i.addEventListener(`click`,e=>{e.target===i&&p(!1)}),l.addEventListener(`click`,()=>p(!1)),u.addEventListener(`click`,()=>p(!0)),l.focus()})}async function It(e,t,n){let r=document.getElementById(e);if(!r)return;if(await O.init(),!n){r.innerHTML=`
      <div class="rule-actions">
        ${Bt()}
      </div>
    `;return}let i=t===`custom-rules`||t===`custom-fav`,a=!1;i||(a=await A.isFavorited(t,n)),r.innerHTML=`
    <div class="rule-actions">
      ${i?``:Lt(a,t,n)}
      ${zt(t,n)}
      ${Rt(t,n)}
    </div>
  `,i||Ht(t,n),Vt(t,n),Ut(t,n)}function Lt(e,t,n){return`
    <button id="btn-favorite"
            class="action-btn btn-favorite"
            data-rule-set="${t}"
            data-rule-id="${n}"
            data-favorited="${String(e)}"
            title="${T(e?`action_remove_favorite`:`action_add_favorite`)}"
            aria-label="${T(e?`action_remove_favorite`:`action_add_favorite`)}">
      <span class="material-symbols-outlined" style="font-size:24px" aria-hidden="true">favorite</span>
      <span>${T(e?`action_remove_favorite`:`action_add_favorite`)}</span>
    </button>
  `}function Rt(e,t){return t.startsWith(`custom-`)?`
    <button id="btn-delete"
            class="action-btn btn-delete-inline"
            data-rule-set="${e}"
            data-rule-id="${t}"
            title="${T(`action_delete_custom_rule`)}"
            aria-label="${T(`action_delete_custom_rule`)}">
      <span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">delete</span>
      <span>${T(`action_delete_custom_rule`)}</span>
    </button>
  `:``}function zt(e,t){return t.startsWith(`custom-`)?`
    <button id="btn-github-submit"
            class="action-btn btn-github"
            data-rule-set="${e}"
            data-rule-id="${t}"
            title="${T(`action_submit_github`)}"
            aria-label="${T(`action_submit_github`)}">
      
    <svg class="github-icon" viewBox="0 0 24 24" width="20" height="20">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  
      <span>${T(`action_submit_github`)}</span>
    </button>
  `:``}function Bt(){return`
    <a href="${v(`/create-rule`)}"
       class="action-btn btn-create-rule"
       title="${T(`action_create_meter`)}"
       aria-label="${T(`action_create_meter`)}">
      <span class="material-symbols-outlined" style="font-size:20px" aria-hidden="true">add</span>
      <span>${T(`action_create_meter`)}</span>
    </a>
  `}function Vt(e,n){let r=document.getElementById(`btn-github-submit`);r&&r.addEventListener(`click`,async()=>{let r=t.startTimedEvent(`submit_github_click`,{ruleId:n,ruleSetId:e,source:`rule_actions_toolbar`});Ke(Qe((await D.getRuleInfo(n)).name,e,n,[]),`rule_actions`),r()})}function Ht(e,t){let n=document.getElementById(`btn-favorite`);n&&n.addEventListener(`click`,()=>Wt(e,t))}function Ut(e,t){let n=document.getElementById(`btn-delete`);n&&n.addEventListener(`click`,async()=>await Gt(e,t))}async function Wt(e,n){let r=document.getElementById(`btn-favorite`);if(!r)return;let i=t.startTimedEvent(`favorite_toggle`,{ruleSet:e,ruleId:n});try{r.classList.add(`favoriting`);let t=await D.getRuleDto(n),a=await A.toggleFavorite(e,n,t),o=await A.getFavoriteCount();i({action:a?`add`:`remove`,totalFavorites:o}),r.setAttribute(`data-favorited`,String(a)),r.setAttribute(`title`,T(a?`action_remove_favorite`:`action_add_favorite`)),r.setAttribute(`aria-label`,T(a?`action_remove_favorite`:`action_add_favorite`)),setTimeout(()=>r.classList.remove(`favoriting`),300)}catch(e){console.error(`Failed to toggle favorite:`,e),e instanceof Error&&e.message.includes(`Maximum 50 favorites`)?(t.startTimedEvent(`favorites_limit_reached`,{ruleId:n})(),j(T(`alert_max_favorites`),`warning`)):j(T(`alert_favorite_failed`),`error`),r.classList.remove(`favoriting`)}}async function Gt(e,n){if(!await Ft(T(`alert_delete_confirm`),{title:T(`action_delete_custom_rule`),cancelText:T(`creator_btn_cancel`),confirmText:T(`action_delete_custom_rule`)}))return;let r=t.startTimedEvent(`custom_rule_deleted`,{ruleId:n,source:`detail_page`,viewedFrom:e});try{let{customRulesService:t}=await d(async()=>{let{customRulesService:e}=await Promise.resolve().then(()=>M);return{customRulesService:e}},void 0);await t.deleteCustomRule(n);let i=`custom-rules`;if(await A.isFavorited(i,n)){let e=await D.getRuleDto(n);await A.toggleFavorite(i,n,e)}r();let{makeUrl:a}=await d(async()=>{let{makeUrl:e}=await Promise.resolve().then(()=>h);return{makeUrl:e}},void 0);e===`custom-fav`?window.location.href=a(`/learn/custom-fav/`):window.location.href=a(`/learn/custom-rules/`)}catch(e){console.error(`Failed to delete rule:`,e),j(T(`alert_delete_failed`),`error`)}}var M=e({CustomRulesService:()=>qt,customRulesService:()=>P}),Kt=S.CUSTOM_RULESETS,N=S.CUSTOM_RULES_ID,qt=class{async createCustomRule(e){await O.init();let t=await this.loadRulesets(),n=t.find(e=>e.id===N);if(n||(n={id:N,name:`Custom Rules`,description:`0 custom rules created`,rules:[],type:`custom`,createdAt:Date.now(),updatedAt:Date.now()},t.push(n)),n.rules.length>=50)throw Error(`Maximum 50 custom rules reached`);n.rules.push(e),n.updatedAt=Date.now(),n.description=`${n.rules.length} custom ${n.rules.length===1?`rule`:`rules`} created`,await this.saveRulesets(t)}async getAllCustomRules(){await O.init();let e=await this.getCustomRulesCollection();return e?e.rules:[]}async getCustomRulesCount(){let e=await this.getCustomRulesCollection();return e?e.rules.length:0}async deleteCustomRule(e){await O.init();let t=await this.loadRulesets(),n=t.find(e=>e.id===N);if(n){if(n.rules=n.rules.filter(t=>t.Identifier!==e),n.updatedAt=Date.now(),n.description=`${n.rules.length} custom ${n.rules.length===1?`rule`:`rules`} created`,n.rules.length===0){let e=t.indexOf(n);t.splice(e,1)}await this.saveRulesets(t)}}async getCustomRulesCollection(){return await O.init(),(await this.loadRulesets()).find(e=>e.id===N)??null}async getCustomRuleset(e){return await O.init(),(await this.loadRulesets()).find(t=>t.id===e)??null}async getAllCustomRulesets(){return await O.init(),this.loadRulesets()}async addExampleToRule(e,t){await O.init();let n=await this.loadRulesets(),r=n.find(e=>e.id===N);if(!r)return!1;let i=r.rules.find(t=>t.Identifier===e);if(!i)return!1;let a=t.trim().replace(/\s+/g,` `);return i.Examples.some(e=>e.trim().replace(/\s+/g,` `)===a)?!1:(i.Examples.push(t.trim()),r.updatedAt=Date.now(),await this.saveRulesets(n),!0)}async getCustomRule(e){return(await this.getAllCustomRules()).find(t=>t.Identifier===e)??null}async ruleExists(e){return(await this.getAllCustomRules()).some(t=>t.Identifier===e)}async loadRulesets(){return await O.indexedDB.getData(Kt)??[]}async saveRulesets(e){await O.indexedDB.saveData(Kt,e)}},P=new qt,F=class{static{this._loadedRulesetId=null}static{this._loadedRulesetHash=0}static async loadCustomRuleset(e,t=!1){try{let n=await P.getCustomRuleset(e);if(!n||!n.rules||n.rules.length===0)return console.log(`No custom ruleset found with ID: ${e}`),!1;let r=n.rules.length*31+(n.updatedAt??0);if(!t&&this._loadedRulesetId===e&&this._loadedRulesetHash===r)return!0;let i=await this.loadRulesetIntoWasm(n);return i&&(this._loadedRulesetId=e,this._loadedRulesetHash=r),i}catch(t){return console.error(`Error loading custom ruleset ${e}:`,t),!1}}static invalidateCache(){this._loadedRulesetId=null,this._loadedRulesetHash=0}static async loadFavoritesCollection(){return await this.loadCustomRuleset(`custom-fav`)}static async hasCustomRuleset(e){let t=await P.getCustomRuleset(e);return t!==null&&t.rules.length>0}static async loadRulesetIntoWasm(e){try{let t=JSON.stringify({Identifier:e.id,Name:e.name,Description:e.description,Rules:e.rules}),n=await DotNet.invokeMethodAsync(`Chandam.Wasm`,`LoadCustomRules`,t),r=JSON.parse(n);return r.success?(Yt(),console.log(`Loaded ${r.ruleCount} rules from custom ruleset "${e.name}"`),!0):(console.error(`Failed to load custom rules:`,r.errorMessage),!1)}catch(e){return console.error(`Error loading rules into WASM:`,e),!1}}},Jt=null;function Yt(){Jt=null}async function Xt(e,t){if(e!==Jt)try{F.invalidateCache();let n=await D.reloadRules(e,t);n.success?Jt=e:console.error(`Failed to load rules:`,n.errorMessage)}catch(e){console.error(`Failed to load rule set:`,e)}}var I=function(e){return e.LoadingStarted=`loading:started`,e.LoadingCompleted=`loading:completed`,e.LoadingFailed=`loading:failed`,e.ActionStarted=`action:started`,e.ActionCompleted=`action:completed`,e.ActionFailed=`action:failed`,e}({}),L=class{static emit(e,t){let n=new CustomEvent(e,{detail:t});window.dispatchEvent(n)}static onLoadingStarted(e){window.addEventListener(I.LoadingStarted,t=>{e(t.detail)})}static onLoadingCompleted(e){window.addEventListener(I.LoadingCompleted,t=>{e(t.detail)})}static onLoadingFailed(e){window.addEventListener(I.LoadingFailed,t=>{e(t.detail)})}static onActionStarted(e){window.addEventListener(I.ActionStarted,t=>{e(t.detail)})}static onActionCompleted(e){window.addEventListener(I.ActionCompleted,t=>{e(t.detail)})}static onActionFailed(e){window.addEventListener(I.ActionFailed,t=>{e(t.detail)})}};function Zt(){return new Promise(e=>requestAnimationFrame(()=>setTimeout(e,0)))}var R=null,Qt=[],z=``;async function $t(e){R=null,z=e;let t=document.getElementById(`content`);t&&(t.innerHTML=`<div class="page-loading">
      <svg class="loader-svg" viewBox="0 0 128 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle class="loader-circle" cx="24" cy="24" r="7" fill="#1a3a5c"/>
        <circle class="loader-circle" cx="48" cy="24" r="10" fill="#b8860b"/>
        <circle class="loader-circle" cx="72" cy="24" r="7" fill="#1a3a5c"/>
        <circle class="loader-circle" cx="96" cy="24" r="10" fill="#b8860b"/>
      </svg>
    </div>`);let n=await m(e);if(!n){console.error(`Rule set not found: ${e}`);return}if(s(`Compute `+n.name),n.rulesFile)await Xt(n.rulesFile,n.examplesFile);else if(!await F.loadCustomRuleset(e)){console.error(`Failed to load custom ruleset: ${e}`);return}let r=(await D.getAllRulesDetailed()).filter(e=>e.padyamSubType!==`GenricVruttam`);Qt=r,en(n.name,r.length,e);let i=O.loadEditorState();if(i.text){let e=document.getElementById(`poem-editor`);e&&(e.value=i.text,console.log(`Restored editor text from previous session`))}ze(),ye(r,`rule-picker-container`),tn(e)}function en(e,t,n){let r=document.getElementById(`content`);r&&(r.innerHTML=`
    <div class="compute-rule-set-page">
      ${E(oe(n,`compute`,e))}

      <div class="page-header-controls">
        <h1>${e}</h1>
        <div id="rule-actions-container"></div>
        ${vt({ruleSetId:n,currentMode:`compute`})}
      </div>
      <div class="page-subtitle">${t} ${T(`label_rules_count`)}</div>

      ${Ve({contextText:T(`editor_auto_detect_context`),showRulePicker:!0,showAutoDetect:!0})}

      <div id="results-section" style="display: none;">
        <h3>${T(`results_title`)}</h3>
        <div id="results-container"></div>
        <div id="score-cards-container"></div>
      </div>
    </div>
  `,It(`rule-actions-container`,n))}function tn(e){document.getElementById(`auto-detect`)?.addEventListener(`change`,e=>{e.target.checked?Ue():(He(),R&&Ce(R.id,R.name))}),document.getElementById(`btn-analyze`)?.addEventListener(`click`,async()=>{let e=document.getElementById(`auto-detect`)?.checked,n=t.startTimedEvent(`analyze_click`,{mode:e?`auto_detect`:`specific_rule`,ruleSet:z,ruleId:e?null:we(),autoDetect:e});e?await nn():await rn(),n()}),document.getElementById(`btn-random`)?.addEventListener(`click`,async()=>{let e=t.startTimedEvent(`random_click`,{ruleSet:z,ruleId:`auto_detect`});L.emit(I.ActionStarted,{source:`random`,buttonId:`btn-random`}),await Zt();try{let e=await D.getRandomPoemFromRuleSet();if(e){let t=document.getElementById(`poem-editor`);t&&(t.value=e)}else j(T(`alert_no_examples`),`warning`)}catch(e){console.error(`Random poem failed:`,e)}finally{L.emit(I.ActionCompleted,{source:`random`,buttonId:`btn-random`})}e()}),document.getElementById(`btn-clear`)?.addEventListener(`click`,()=>{let e=document.getElementById(`poem-editor`),n=e?e.value.length>0:!1,r=t.startTimedEvent(`clear_click`,{ruleSet:z,hadContent:n});Re(),ht(),r()}),document.getElementById(`score-cards-container`)?.addEventListener(`click`,e=>{let n=e.target.closest(`.score-card-try`);if(!n)return;let r=n.getAttribute(`data-rule-id`),i=n.getAttribute(`data-rule-name`);if(!r||!i)return;t.startTimedEvent(`score_card_try`,{ruleSet:z,ruleId:r})();let a=document.getElementById(`auto-detect`);a&&a.checked&&(a.checked=!1,He()),Ce(r,i),document.getElementById(`btn-analyze`)?.click()})}async function nn(){let e=document.getElementById(`score-cards-container`);e&&(e.innerHTML=``);let t=Ie();if(!t.trim()){j(T(`alert_enter_poem`),`warning`);return}let n=document.getElementById(`match-yati`)?.checked??!0,r=document.getElementById(`match-prasa`)?.checked??!0;L.emit(I.ActionStarted,{source:`analyze`,buttonId:`btn-analyze`,resultContainerId:`results-section`}),await Zt();try{let[i,a]=await Promise.all([D.determine(t,n,r),D.getScores(t,n,r,50).catch(()=>null)]);if(i.success&&i.matches.length>0){let t=i.matches[0];R={id:t.rule.identifier,name:t.rule.shortName||t.rule.name},await it(t,`results-container`,z);let n=document.getElementById(`results-section`);if(n&&(n.style.display=`block`),a?.scores&&a.scores.length>1&&e){let n=a.scores.filter(e=>e.identifier!==t.rule.identifier).slice(0,5);n.length>0?mt(n,`score-cards-container`,z):e.innerHTML=``}else e&&(e.innerHTML=``);await Zt()}else j(i.errorMessage||T(`alert_no_matches`),`error`)}catch(e){console.error(`Determine failed:`,e),j(T(`alert_error`),`error`)}finally{L.emit(I.ActionCompleted,{source:`analyze`,buttonId:`btn-analyze`,resultContainerId:`results-section`})}}async function rn(){let e=document.getElementById(`score-cards-container`);e&&(e.innerHTML=``);let t=Ie(),n=we();if(!t.trim()){j(T(`alert_enter_poem`),`warning`);return}if(!n){j(T(`alert_select_rule`),`warning`);let e=document.getElementById(`rule-picker-inline`);e&&(e.classList.add(`error`),setTimeout(()=>e.classList.remove(`error`),2e3));return}let r=Qt.find(e=>e.identifier===n);r&&(R={id:r.identifier,name:r.shortName||r.name});let i=document.getElementById(`match-yati`)?.checked??!0,a=document.getElementById(`match-prasa`)?.checked??!0;L.emit(I.ActionStarted,{source:`match`,buttonId:`btn-analyze`,resultContainerId:`results-section`}),await Zt();try{let e=await D.tryMatch(t,n,i,a);if(e.isMatch&&e.match){await it(e.match,`results-container`,z);let t=document.getElementById(`results-section`);t&&(t.style.display=`block`),await Zt()}else j(e.errorMessage||T(`alert_no_match`),`error`)}catch(e){console.error(`Match failed:`,e),j(T(`alert_error`),`error`)}finally{L.emit(I.ActionCompleted,{source:`match`,buttonId:`btn-analyze`,resultContainerId:`results-section`})}}async function an(e){let t=e.ruleSet,n=e.ruleId,r=await m(t);if(!r){console.error(`Rule set not found: ${t}`);return}if(r.rulesFile)await Xt(r.rulesFile,r.examplesFile);else if(!await F.loadCustomRuleset(t)){console.error(`Failed to load custom ruleset: ${t}`);return}let i=await D.getRuleInfo(n);s(`Compute `+i.name,r.name);let a=await on(e);await un(t,i.name,n,a,r.name),dn(t,n)}async function on(e){let t=e.ruleSet,n=e.ruleId,r=sn(e);if(r!==null){let e=await cn(n,r);return e===null?(ln(t,n),``):e}else return(await D.getRandomPoem(n)).text}function sn(e){if(!e.example)return null;let t=parseInt(e.example,10);return isNaN(t)||t<1?null:t}async function cn(e,t){let n=await D.getRuleInfo(e);if(!n.examples||n.examples.length===0)return null;let r=t-1;return r<0||r>=n.examples.length?null:n.examples[r].text}function ln(e,t){let n=v(`/compute/${e}/${t}`);window.history.replaceState(null,``,n)}async function un(e,t,n,r,i){let a=document.getElementById(`content`);if(!a)return;a.innerHTML=`
    <div class="compute-rule-page">
      ${E(se(e,n,t,`compute`,i))}

      <div class="page-header-controls">
        <h1 class="meter-name">${t}</h1>
        <div id="rule-actions-container"></div>
        ${vt({ruleSetId:e,ruleId:n,currentMode:`compute`})}
      </div>

      ${Ve({contextText:`${T(`editor_matching_with`)} ${t}`,showRulePicker:!1,showAutoDetect:!1})}

      <div id="results-section" style="display: none;">
        <h3>${T(`results_title`)}</h3>
        <div id="results-container"></div>
      </div>
    </div>
  `,await It(`rule-actions-container`,e,n);let o=document.getElementById(`poem-editor`);if(o)if(r)o.value=r;else{let e=O.loadEditorState();e.text&&(o.value=e.text,console.log(`Restored editor text from previous session`))}ze()}function dn(e,n){document.getElementById(`btn-analyze`)?.addEventListener(`click`,async()=>{let r=document.getElementById(`poem-editor`)?.value||``;if(!r.trim()){j(T(`alert_enter_poem`),`warning`);return}let i=document.getElementById(`match-yati`)?.checked??!0,a=document.getElementById(`match-prasa`)?.checked??!0,o=t.startTimedEvent(`analyze_click`,{mode:`specific_rule`,ruleSet:e,ruleId:n,autoDetect:!1});try{let t=await D.tryMatch(r,n,i,a);if(t.isMatch&&t.match){it(t.match,`results-container`,e,{showRuleLink:!1});let n=document.getElementById(`results-section`);n&&(n.style.display=`block`)}else j(t.errorMessage||T(`alert_no_match`),`error`)}catch(e){console.error(`Match failed:`,e),j(T(`alert_error`),`error`)}o()}),document.getElementById(`btn-random`)?.addEventListener(`click`,async()=>{let r=t.startTimedEvent(`random_click`,{ruleSet:e,ruleId:n});try{let e=await D.getRandomPoem(n);if(e.text){let t=document.getElementById(`poem-editor`);t&&(t.value=e.text),e.isGenerated&&j(T(`alert_generated_poem`),`info`)}else j(T(`alert_no_examples`),`warning`)}catch(e){console.error(`Random poem failed:`,e)}r()}),document.getElementById(`btn-clear`)?.addEventListener(`click`,()=>{let n=document.getElementById(`poem-editor`),r=n?n.value.length>0:!1,i=t.startTimedEvent(`clear_click`,{ruleSet:e,hadContent:r});Re(),ht(),i()})}var fn=!1;function pn(){let e=new Date,t=e=>String(e).padStart(2,`0`);return`${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}${t(e.getSeconds())}`}function B(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function mn(){fn=!1;let e=document.createElement(`div`);e.className=`export-progress-overlay`,e.id=`export-progress-overlay`,e.innerHTML=`
    <div class="export-progress-card">
      <h3>${T(`export_progress_title`)}</h3>
      <div class="export-progress-bar-container">
        <div class="export-progress-bar" id="export-progress-bar" style="width: 0%"></div>
      </div>
      <p class="export-progress-text" id="export-progress-text">0 / 0</p>
      <button class="btn-cancel-export" id="btn-cancel-export">${T(`export_cancel`)}</button>
    </div>
  `,document.body.appendChild(e),document.getElementById(`btn-cancel-export`)?.addEventListener(`click`,()=>{fn=!0})}function hn(e,t){let n=Math.round(e/t*100),r=document.getElementById(`export-progress-bar`);r&&(r.style.width=`${n}%`);let i=document.getElementById(`export-progress-text`);i&&(i.textContent=`${e} / ${t}`)}function gn(){document.getElementById(`export-progress-overlay`)?.remove()}async function _n(e,t){let n=new Map;for(let r=0;r<e.length&&!fn;r++){try{let t=await D.getRuleInfo(e[r].identifier);n.set(e[r].identifier,t)}catch(t){console.warn(`Failed to fetch rule: ${e[r].identifier}`,t)}t(r+1,e.length)}return n}function vn(){return`
    :root {
      --font-display: 'Anek Telugu', sans-serif;
      --font-editor: 'Tiro Telugu', serif;
      --font-main: 'Anek Telugu', sans-serif;
      --color-text: #1a1a1a;
      --color-poem: darkblue;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: var(--font-main);
      color: var(--color-text);
      line-height: 1.6;
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
      background: #fff;
    }

    h1 { font-family: var(--font-display); font-size: 2.5rem; margin-bottom: 0.5rem; }
    h2 { font-family: var(--font-display); font-size: 1.8rem; margin: 2rem 0 1rem; border-bottom: 2px solid #000; padding-bottom: 0.5rem; }
    h3 { font-family: var(--font-display); font-size: 1.4rem; margin: 1.5rem 0 0.75rem; }

    .title-page { text-align: center; padding: 4rem 0; border-bottom: 3px double #000; margin-bottom: 3rem; }
    .title-page h1 { font-size: 3rem; margin-bottom: 0.5rem; }
    .title-page .subtitle { font-size: 1.3rem; color: #555; margin-bottom: 1rem; }
    .title-page .meta { color: #888; font-size: 0.9rem; }

    .toc { margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 1px solid #ddd; }
    .toc h2 { border-bottom: none; }
    .toc-group { margin-bottom: 1rem; }
    .toc-group-name { font-weight: 700; font-size: 1.05rem; margin-bottom: 0.3rem; }
    .toc-list { list-style: none; padding-left: 1rem; }
    .toc-list li { margin-bottom: 0.2rem; }
    .toc-list a { color: #1f618d; text-decoration: none; }
    .toc-list a:hover { text-decoration: underline; }

    .group-section { margin-bottom: 3rem; }
    .rule-section { margin-bottom: 2.5rem; padding-bottom: 2rem; border-bottom: 1px solid #eee; }

    .rule-alias { color: #7f8c8d; font-size: 0.95rem; margin-bottom: 0.5rem; }

    .rule-badges { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
    .badge { padding: 0.25rem 0.7rem; border-radius: 12px; font-size: 0.8rem; font-weight: 600; }
    .badge-type { background: #e8daef; color: #6c3483; }
    .badge-chars { background: #d6eaf8; color: #1f618d; }
    .badge-matras { background: #d5f4e6; color: #186a3b; }
    .badge-chandam { background: #fdebd0; color: #935116; }
    .badge-lines { background: #fce4ec; color: #880e4f; }

    .rule-sequence { margin-bottom: 0.75rem; }
    .rule-sequence code {
      background: #fff8dc; padding: 0.3rem 0.6rem; border-radius: 3px;
      font-family: monospace; font-size: 0.9rem; color: #d35400;
      border-left: 3px solid #f39c12; display: inline-block; word-break: break-all;
    }

    .description-content { line-height: 1.8; margin-bottom: 1.5rem; }
    .description-content h2 { font-size: 1.2rem; margin-top: 1rem; margin-bottom: 0.5rem; border-bottom: 1px solid #ddd; }
    .description-content ul, .description-content ol { margin-left: 1.5rem; margin-bottom: 1rem; }
    .description-content li { margin-bottom: 0.5rem; }
    .description-content code { background: #f5f5f5; padding: 0.2rem 0.4rem; border-radius: 3px; font-family: monospace; font-size: 0.9em; }
    .description-content p { margin-bottom: 0.75rem; }
    .description-content .laghu { color: #e74c3c; font-weight: bold; font-family: monospace; font-size: 1.1em; }
    .description-content .guru { color: #3498db; font-weight: bold; font-family: monospace; font-size: 1.1em; }
    .description-content .gName { color: #16a085; font-weight: 600; }

    .examples-section { margin-top: 1rem; }
    .examples-section h4 { font-size: 1rem; margin-bottom: 0.75rem; color: #555; }

    .example-card {
      background: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 8px;
      padding: 1.2rem; margin-bottom: 1rem;
    }
    .example-poem-area {
      background: white; border: 1px solid #e0e0e0; border-radius: 6px; padding: 1rem;
    }
    .poem {
      font-family: var(--font-editor); font-size: 1.1rem;
      letter-spacing: 0.05em; line-height: 1.8; color: var(--color-poem);
    }
    .poem u { text-decoration: underline; text-decoration-color: #ff8000; text-underline-offset: 2px; text-decoration-thickness: 1.5px; }
    .poem b { font-weight: 700; color: #6a4c93; }
    .poem-text {
      background: white; border: 1px solid #ddd; border-radius: 4px;
      padding: 1rem; font-family: var(--font-editor); font-size: 1.1rem;
      line-height: 1.8; white-space: pre-wrap; color: var(--color-poem);
    }
    .poem-attribution { text-align: right; color: #666; font-style: italic; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid #eee; }
    .example-reference { color: #666; font-size: 0.85rem; margin-top: 0.5rem; }

    .footer { text-align: center; color: #999; font-size: 0.85rem; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid #ddd; }

    @media print {
      body { padding: 0; max-width: 100%; }
      .title-page { page-break-after: always; }
      .toc { page-break-after: always; }
      .group-section { page-break-before: always; }
      .rule-section { page-break-inside: avoid; }
      .example-card { page-break-inside: avoid; }
      a { color: inherit; text-decoration: none; }
    }
  `}function yn(e,t){let n=new Date().toLocaleDateString(`te-IN`,{year:`numeric`,month:`long`,day:`numeric`});return`
    <div class="title-page">
      <h1>${B(e)}</h1>
      <div class="subtitle">${T(`export_book_subtitle`)}</div>
      <div class="meta">${t} rules &middot; ${n}</div>
      <div class="meta">${T(`export_book_generated`)}</div>
    </div>
  `}function bn(e,t,n){return`
    <div class="toc">
      <h2>Table of Contents</h2>
      ${t.map(t=>{let r=e.get(t),i=ve(t,e),a=r.map(e=>{let t=n.get(e.identifier),r=t?.shortName||t?.name||e.name;return`<li><a href="#rule-${B(e.identifier)}">${B(r)}</a></li>`}).join(``);return`
      <div class="toc-group">
        <div class="toc-group-name">${B(i)}</div>
        <ul class="toc-list">${a}</ul>
      </div>
    `}).join(``)}
    </div>
  `}var xn={Akkara:`అక్కరలు`,Divpada:`ద్విపదలు`,Jati:`జాతి`,Ragada:`రగడలు`,Ragada2:`రగడలు`,Shatpada:`షట్పదలు`,UpaJati:`ఉపజాతి`,Sisamu:`సీసములు`,Vruttam:`వృత్తం`,DaMDakamu:`దండకము`,ArdhaVruttam:`అర్ధ సమవృత్తం`,VishamaVruttam:`విషమవృత్తం`,GenricVruttam:`ఏదేని సమ వృత్తం`};function Sn(e){let t=e.shortName&&e.shortName!==e.name?e.shortName:e.name,n=e.alias?`<div class="rule-alias">${B(e.alias)}</div>`:``,r=[];if(e.padyamSubType){let t=xn[e.padyamSubType]||e.padyamSubType;r.push(`<span class="badge badge-type">${B(t)}</span>`)}if(e.min&&e.max&&e.min!==-1&&e.max!==-1){let t=e.min===e.max?`${e.min} ${T(`metric_chars`)}`:`${e.min}-${e.max} ${T(`metric_chars`)}`;r.push(`<span class="badge badge-chars">${t}</span>`)}else e.charLength&&e.charLength!==-1&&r.push(`<span class="badge badge-chars">${e.charLength} ${T(`metric_chars`)}</span>`);if(e.matraLength&&e.matraLength!==-1&&r.push(`<span class="badge badge-matras">${e.matraLength} ${T(`metric_matras`)}</span>`),e.lines&&e.lines>0){let t=e.lines===1?T(`pada_singular`):T(`pada_plural`);r.push(`<span class="badge badge-lines">${e.lines} ${t}</span>`)}e.chandamName&&r.push(`<span class="badge badge-chandam">${B(e.chandamName)}</span>`);let i=r.length>0?`<div class="rule-badges">${r.join(``)}</div>`:``,a=e.sequence?`<div class="rule-sequence"><code>${B(e.sequence)}</code></div>`:``,o=e.description?`<div class="description-content">${e.description}</div>`:``,s=Cn(e.examples);return`
    <div class="rule-section" id="rule-${B(e.identifier)}">
      <h3>${B(t)}</h3>
      ${n}
      ${i}
      ${a}
      ${o}
      ${s}
    </div>
  `}function Cn(e){if(!e||e.length===0)return``;let t=e.map(e=>`
      <div class="example-card">
        <div class="example-poem-area">
          ${e.beautified?`<div class="poem">${nt(e.beautified)}</div>`:`<pre class="poem-text">${B(e.text)}</pre>`}
          ${e.author?`<div class="poem-attribution">&mdash; ${B(e.author)}</div>`:``}
        </div>
        ${e.reference?`<div class="example-reference">${B(e.reference)}</div>`:``}
      </div>
    `).join(``);return`
    <div class="examples-section">
      <h4>${T(`section_examples`)} (${e.length})</h4>
      ${t}
    </div>
  `}function wn(e,t,n,r){let i;if(r){let n=t.values().next().value;i=`
      ${yn(e+` — `+n.name,1)}
      ${Sn(n)}
    `}else{let r=he(n),a=ge(r),o=bn(r,a,t),s=a.map(e=>{let n=r.get(e),i=ve(e,r),a=n.map(e=>{let n=t.get(e.identifier);return n?Sn(n):``}).join(``);return`
        <div class="group-section">
          <h2>${B(i)}</h2>
          ${a}
        </div>
      `}).join(``);i=`
      ${yn(e,t.size)}
      ${o}
      <div class="book-content">${s}</div>
    `}return`<!DOCTYPE html>
<html lang="te">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${B(e)}</title>
  <link href="https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@400;500;600;700;800&family=Tiro+Telugu:ital@0;1&display=swap" rel="stylesheet">
  <style>${vn()}</style>
</head>
<body>
  ${i}
  <div class="footer">${T(`export_book_generated`)} &middot; ${new Date().toISOString().split(`T`)[0]}</div>
</body>
</html>`}function Tn(e,t){let n=new Blob([e],{type:`text/html;charset=utf-8`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=t,i.style.display=`none`,i.setAttribute(`data-export`,`true`),document.body.appendChild(i),i.click(),setTimeout(()=>{document.body.removeChild(i),URL.revokeObjectURL(r)},100)}async function En(e,n,r){t.startTimedEvent(`export_book_started`,{ruleSetId:n,ruleCount:r.length,type:`full`})(),mn();let i=t.startTimedEvent(`export_book_completed`,{ruleSetId:n,type:`full`});try{let a=await _n(r,hn);if(fn){t.startTimedEvent(`export_book_cancelled`,{ruleSetId:n,ruleCount:r.length})();return}let o=wn(e,a,r,!1);Tn(o,`${n}-${pn()}.html`),i({ruleCount:a.size,fileSizeKB:Math.round(o.length/1024)})}catch(e){console.error(`Export failed:`,e),t.startTimedEvent(`export_book_error`,{ruleSetId:n,error:String(e)})()}finally{gn()}}async function Dn(e,n){t.startTimedEvent(`export_book_started`,{ruleId:n.identifier,type:`single`})();let r=t.startTimedEvent(`export_book_completed`,{ruleId:n.identifier,type:`single`}),i=new Map;i.set(n.identifier,n);let a=wn(e,i,[],!0);Tn(a,`${n.identifier}-${pn()}.html`),r({fileSizeKB:Math.round(a.length/1024)})}var V={searchText:``,selectedCategory:``,selectedChandamName:``,hasExamples:!1},H=null,On=0,kn=[],An=``,jn=``;async function Mn(e){let t=document.getElementById(`content`);t&&(t.innerHTML=`<div class="page-loading">
      <svg class="loader-svg" viewBox="0 0 128 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle class="loader-circle" cx="24" cy="24" r="7" fill="#1a3a5c"/>
        <circle class="loader-circle" cx="48" cy="24" r="10" fill="#b8860b"/>
        <circle class="loader-circle" cx="72" cy="24" r="7" fill="#1a3a5c"/>
        <circle class="loader-circle" cx="96" cy="24" r="10" fill="#b8860b"/>
      </svg>
    </div>`);let n=await m(e);if(!n){console.error(`Rule set not found: ${e}`);return}if(s(`Learn `+n.name),n.rulesFile)await Xt(n.rulesFile,n.examplesFile);else if(!await F.loadCustomRuleset(e)){let e=document.getElementById(`content`);e&&(e.innerHTML=`
          <div class="empty-state">
            <p>${T(`filter_no_results`)}</p>
          </div>
        `);return}let r=(await D.getAllRulesDetailed(`te`)).filter(e=>e.padyamSubType!==`GenricVruttam`);On=r.length,kn=r,An=n.name,jn=e,H=await D.getAvailableFilters(`te`);let i=await A.getAllFavorites(),a=new Set(e===`custom-fav`?i.map(e=>`custom-fav:${e.ruleId}`):i.filter(t=>t.ruleSetId===e).map(e=>e.id)),o=e===`custom-fav`?new Map(i.map(e=>[e.ruleId,e.ruleSetId])):void 0,c=await Nn(r),l=he(c);Pn(n.name,c.length,e,l,a,o)}async function Nn(e){return V.searchText===``&&V.selectedCategory===``&&V.selectedChandamName===``&&!V.hasExamples?e:await D.searchRules({query:V.searchText||void 0,categories:V.selectedCategory?[V.selectedCategory]:void 0,chandamNames:V.selectedChandamName?[V.selectedChandamName]:void 0,hasExamples:V.hasExamples?!0:void 0,maxResults:0},`te`)}function Pn(e,t,n,r,i,a){let o=document.getElementById(`content`);if(!o)return;let s=oe(n,`learn`,e),c=t>0?`<div class="chandam-groups">${Fn(r,n,i,a)}</div>`:`<div class="empty-state">
         <p>${T(`filter_no_results`)}</p>
         <p>${T(`filter_try_removing`)}</p>
       </div>`;o.innerHTML=`
    <div class="learn-index-page">
      ${E(s)}

      <div class="page-header-controls">
        <h1>${e}</h1>
        <button class="action-btn btn-export-book" data-action="export-book">
          <span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">download</span>
          <span>${T(`export_book`)}</span>
        </button>
        ${vt({ruleSetId:n,currentMode:`learn`})}
      </div>
      <div class="filter-bar">
        <div class="filter-bar-row">
          <div class="filter-inputs">
            <input
              type="search"
              class="filter-search"
              placeholder="${T(`filter_search_placeholder`)}"
              value="${V.searchText}"
              data-filter="search"
              aria-label="${T(`filter_search_placeholder`)}"
              enterkeyhint="search"
            />
            ${Rn()}
            ${zn()}
          </div>
          <div class="filter-actions">
            <span class="filter-result-count">${t===On?`${On}`:`${T(`filter_results`)} (${t}/${On})`}</span>
            <button class="btn-clear-filters" data-action="clear-filters">
              <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">delete_sweep</span>
              ${T(`editor_btn_clear`)}
            </button>
          </div>
        </div>
      </div>

      <div class="rules-content">
        ${c}
      </div>
    </div>
  `,Bn(n)}function Fn(e,t,n,r){return ge(e).map(i=>{let a=e.get(i);return`
      <div class="chandam-group">
        <h2>${ve(i,e)}</h2>
        ${a.map(e=>In(e,t,n,r)).join(``)}
      </div>
    `}).join(``)}function In(e,t,n,r){let i=r?.get(e.identifier)||t,a=e.shortName&&e.shortName!==e.name?e.shortName:e.name,o=e.alias?`<span class="rule-alias-inline">(${e.alias})</span>`:``,s=e.compactSummary?`<div class="rule-compact-summary">${e.compactSummary}</div>`:``,c=[];if(e.min&&e.max&&e.min!==-1&&e.max!==-1?c.push(e.min===e.max?`${e.min} ${T(`metric_chars`)}`:`${e.min}-${e.max} ${T(`metric_chars`)}`):e.charLength&&e.charLength!==-1&&c.push(`${e.charLength} ${T(`metric_chars`)}`),e.matraLength&&e.matraLength!==-1&&c.push(`${e.matraLength} ${T(`metric_matras`)}`),e.lines&&e.lines>0){let t=e.lines===1?T(`pada_singular`):T(`pada_plural`);c.push(`${e.lines} ${t}`)}e.exampleCount&&e.exampleCount>0&&c.push(`${e.exampleCount} ${T(`metric_examples`)}`),e.chandamName&&c.push(e.chandamName);let l=c.length>0?`<div class="rule-item-meta">${c.join(` · `)}</div>`:``,u=t===`custom-rules`||t===`custom-fav`,d=`${t}:${e.identifier}`,f=!u&&n.has(d)?` favorited`:``,p=e.identifier.startsWith(`custom-`)?`<a class="rule-action-icon btn-delete-inline" data-action="delete-rule" data-rule-id="${e.identifier}" data-rule-name="${e.name.replace(/"/g,`&quot;`)}" title="${T(`learn_btn_delete`)}">
        <span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">delete</span>
        ${T(`learn_btn_delete`)}
      </a>`:``;return`
    <div class="rule-list-item${f}">
      <div class="rule-item-header">
        <span class="rule-name meter-name">${a}</span>
        ${o}
        <div class="rule-item-actions">
          <a href="${v(`/learn/${i}/${e.identifier}`)}" class="rule-action-icon" title="${T(`link_learn`)}">
            <span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">menu_book</span>
            ${T(`link_learn`)}
          </a>
          <a href="${v(`/compute/${i}/${e.identifier}`)}" class="rule-action-icon" title="${T(`link_try`)}">
            <span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">play_arrow</span>
            ${T(`link_try`)}
          </a>
          ${p}
        </div>
      </div>
      ${s}
      ${l}
    </div>
  `}function Ln(){if(V.selectedChandamName&&H){let e=H.chandamNames.indexOf(V.selectedChandamName);return e>=0?H.chandamLabels[e]:V.selectedChandamName}return V.selectedCategory?_e(V.selectedCategory):T(`filter_all_categories`)}function Rn(){if(!H)return``;let e=T(`filter_all_categories`),t=Ln(),n=H.categories.filter(e=>e!==`GenricVruttam`).map(e=>`<div class="rule-item" role="option" data-filter-type="category" data-value="${e}" aria-selected="${e===V.selectedCategory}">${_e(e)}</div>`).join(``),r=H.chandamNames.length>0?H.chandamNames.map((e,t)=>`<div class="rule-item" role="option" data-filter-type="chandam" data-value="${e}" aria-selected="${e===V.selectedChandamName}">${H.chandamLabels[t]}</div>`).join(``):``;return`
    <details class="rule-picker-inline" id="category-picker">
      <summary id="selected-category-name" aria-haspopup="listbox">${t} ▼</summary>
      <div class="picker-dropdown" role="listbox" aria-label="${T(`filter_all_categories`)}">
        <div class="rule-list">
          <div class="rule-item" role="option" data-filter-type="category" data-value="" aria-selected="${!V.selectedCategory&&!V.selectedChandamName}">${e}</div>
          ${n}
          ${r?`<div class="rule-group-header">${_e(`Vruttam`)}</div>${r}`:``}
        </div>
      </div>
    </details>
  `}function zn(){return!H||!H.hasRulesWithExamples||!H.hasRulesWithoutExamples?``:`
    <label class="toggle-switch compact">
      <input type="checkbox" id="filter-has-examples" ${V.hasExamples?`checked`:``}>
      <span class="toggle-slider"></span>
      <span class="toggle-label">${T(`filter_with_examples`)}</span>
    </label>
  `}function Bn(e){let n=document.querySelector(`.filter-search`);if(n){let r=V.searchText;async function i(){let i=n.value;if(i===r)return;r=i,V.searchText=i;let a=t.startTimedEvent(`filter_search`,{ruleSet:e,queryLength:i.length});await Vn(e),a()}n.addEventListener(`keydown`,async e=>{e.key!==`Enter`||e.isComposing||(e.preventDefault(),await i())}),n.addEventListener(`blur`,async()=>{await i()}),n.addEventListener(`search`,async()=>{await i()})}let r=document.getElementById(`category-picker`);r&&(r.querySelectorAll(`.rule-item`).forEach(n=>{n.addEventListener(`click`,async()=>{let i=n,a=i.dataset.filterType||`category`,o=i.dataset.value||``,s=document.querySelector(`.filter-search`);s&&(V.searchText=s.value),a===`chandam`?(V.selectedChandamName=o,V.selectedCategory=``):(V.selectedCategory=o,V.selectedChandamName=``);let c=document.getElementById(`selected-category-name`);c&&(c.textContent=Ln()+` ▼`),r.open=!1;let l=t.startTimedEvent(`filter_category`,{ruleSet:e,filterType:a,value:o||`all`});await Vn(e),l()})}),document.addEventListener(`click`,e=>{r.open&&!r.contains(e.target)&&(r.open=!1)}));let i=document.getElementById(`filter-has-examples`);i&&i.addEventListener(`change`,async()=>{let n=document.querySelector(`.filter-search`);n&&(V.searchText=n.value),V.hasExamples=i.checked;let r=t.startTimedEvent(`filter_examples`,{ruleSet:e,enabled:String(i.checked)});await Vn(e),r()});let a=document.querySelector(`[data-action="clear-filters"]`);a&&a.addEventListener(`click`,async()=>{V={searchText:``,selectedCategory:``,selectedChandamName:``,hasExamples:!1};let n=t.startTimedEvent(`filter_clear`,{ruleSet:e});await Vn(e),n()});let o=document.querySelector(`[data-action="export-book"]`);o&&o.addEventListener(`click`,async()=>{await En(An,jn,kn)});let s=document.querySelector(`.rules-content`);s&&s.addEventListener(`click`,async e=>{let t=e.target.closest(`[data-action="delete-rule"]`);t&&await Hn(t.dataset.ruleId||``,t.dataset.ruleName||``)})}async function Vn(e){await Mn(e)}async function Hn(e,n){if(!await Ft(T(`alert_delete_confirm`),{title:`${T(`action_delete_custom_rule`)}: ${n}`,cancelText:T(`creator_btn_cancel`),confirmText:T(`action_delete_custom_rule`)}))return;let r=t.startTimedEvent(`custom_rule_deleted`,{ruleId:e,source:`index_page`});try{if(await P.deleteCustomRule(e),await A.isFavorited(`custom-rules`,e)){let t=await D.getRuleDto(e);await A.toggleFavorite(`custom-rules`,e,t)}r(),window.location.reload()}catch(e){console.error(`Failed to delete rule:`,e),j(T(`alert_delete_failed`),`error`)}}async function Un(e,t){let n=await m(e);if(!n){console.error(`Rule set not found: ${e}`);return}n.rulesFile?await Xt(n.rulesFile,n.examplesFile):await F.loadCustomRuleset(e);let r=await D.getRuleInfo(t);s(`Learn `+r.name,n.name),Wn(e,r,n.name)}function Wn(e,t,n){let r=document.getElementById(`content`);if(!r)return;let i=se(e,t.identifier,t.name,`learn`,n),a=t.examples&&t.examples.length>0,o=!a&&t.padyamType===`Vruttam`,s=a?t.examples.length:o?1:0;r.innerHTML=`
    <div class="learn-detail-page">
      ${E(i)}

      <div class="page-header-controls">
        <h1 class="meter-name">${t.name}</h1>
        <div id="rule-actions-container"></div>
        <button id="btn-export-rule" class="action-btn btn-export-single">
          <span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">download</span>
          <span>${T(`export_book_single`)}</span>
        </button>
        ${vt({ruleSetId:e,ruleId:t.identifier,currentMode:`learn`})}
      </div>

      <div class="description-content">
        ${t.description||`<p>No description available</p>`}
      </div>

      <section class="examples">
        <h2>${T(`section_examples`)} (${s})</h2>
        ${Kn(t.examples,e,t.identifier,o)}
      </section>

      ${Jn(t.references)}
    </div>
  `,It(`rule-actions-container`,e,t.identifier),document.getElementById(`btn-export-rule`)?.addEventListener(`click`,()=>{Dn(e,t)}),o&&(Gn(t.identifier),document.getElementById(`btn-regenerate`)?.addEventListener(`click`,()=>{Gn(t.identifier)}))}async function Gn(e){let t=document.getElementById(`generated-poem-text`);t&&(t.textContent=`...`,t.textContent=(await D.getRandomPoem(e)).text||`—`)}function Kn(e,t,n,r){return!e||e.length===0?r?qn(t,n):`
      <div class="empty-examples-upsell">
        <p>${T(`examples_none_available`)}</p>
        <p>${T(`examples_contribute_cta`)}</p>
      </div>
    `:e.map((e,r)=>{let i=r+1,a=e.beautified?`<div class="poem">${nt(e.beautified)}</div>`:`<pre class="poem-text">${U(e.text)}</pre>`,o=e.author?`<div class="poem-attribution">— ${U(e.author)}</div>`:``,s=e.reference?`<div class="example-reference">${U(e.reference)}</div>`:``;return`
      <div class="example-card">
        <a href="${y(`/compute/${t}/${n}`,{example:i})}" class="try-example-btn" title="${T(`btn_try_example`)}">
          <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">play_arrow</span>
          ${T(`btn_try_example`)}
        </a>
        <div class="example-poem-area">
          ${a}
          ${o}
        </div>
        ${s?`<div class="example-footer">${s}</div>`:``}
      </div>
    `}).join(``)}function qn(e,t){let n=T(`generated_example_badge`),r=T(`generated_disclaimer`);return`
    <div class="example-card">
      <button id="btn-regenerate" class="try-example-btn" title="${T(`btn_regenerate`)}">
        <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">refresh</span>
        ${T(`btn_regenerate`)}
      </button>
      <div class="example-poem-area">
        <pre class="poem-text" id="generated-poem-text">...</pre>
        <div class="poem-attribution">— ${U(n)}</div>
      </div>
      <div class="example-footer">
        <div class="example-reference">${U(r)}</div>
      </div>
    </div>
  `}function Jn(e){return!e||e.length===0?``:`
    <section class="references">
      <h2>${T(`section_references`)}</h2>
      <ul class="references-list">
        ${e.map(e=>`<li>${U(e)}</li>`).join(``)}
      </ul>
    </section>
  `}function U(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}var Yn=/^[\w\s\u0C00-\u0C7F\u0C80-\u0CFF\u0900-\u097F-]+$/,W={PATTERN_ROW:`.pattern-row-inline`,ADD_GANA_BTN:`.add-gana-btn`,REMOVE_GANA_BTN:`.remove-gana-btn`,REMOVE_ROW_BTN:`.remove-row-btn`},G={RULE_NAME:`rule-name`,PADYAM_TYPE:`padyam-type`,GANA_TYPE:`gana-type`,SAME_RULES:`same-rules`,LINES:`lines`,ADD_PADA_BTN:`add-pada-btn`,REMOVE_PADA_BTN:`remove-pada-btn`,PATTERN_ROWS_CONTAINER:`pattern-rows-container`,PRASA:`prasa`,PRASA_YATI:`prasa-yati`,ANTHYA_PRASA:`anthya-prasa`};function Xn(e){return!e||!e.trim()?[]:e.split(`,`).map(e=>parseInt(e.trim(),10)).filter(e=>!isNaN(e)&&e>0)}function Zn(e){let t=[];return e.forEach((e,n)=>{let r=n+1,i=document.getElementById(`yati-${r}`);if(i?.value.trim()){let e=Xn(i.value);e.length>0&&t.push(e)}}),t}function Qn(e){let t=e.trim().toLowerCase(),n=5381;for(let e=0;e<t.length;e++)n=(n<<5)+n+t.charCodeAt(e);return`custom-${Math.abs(n)&2147483647}`}async function $n(e){let t=[];return!e.Name||e.Name.trim()===``?t.push(T(`creator_validation_name`)):(e.Name.length>100&&t.push(T(`creator_validation_name_length`).replace(`{max}`,`100`)),Yn.test(e.Name)||t.push(T(`creator_validation_name_invalid`)),await P.ruleExists(e.Identifier)&&t.push(T(`creator_validation_name_exists`))),(!e.Rules||e.Rules.length===0||e.Rules[0].length===0)&&t.push(T(`creator_validation_ganas`)),e.Lines<1&&t.push(T(`creator_validation_lines_min`)),{isValid:t.length===0,errors:t}}function K(e){return document.getElementById(e)}function q(e){let t=document.getElementById(e);if(!t)throw Error(`Required element #${e} not found`);return t}var er=new class{constructor(){this.rowCounter=0}incrementRow(){return++this.rowCounter}reset(){this.rowCounter=0}getCurrentCount(){return this.rowCounter}};async function tr(){s(`Create Rule`);let e=document.getElementById(`content`);e&&(e.innerHTML=nr(),rr(),ir())}function nr(){return`
    <div class="rule-creator-page">
      <h2>${T(`creator_page_title`)}</h2>

      <!-- SECTION 1: Basic Info + Classification + Same Rules (CONSOLIDATED) -->
      <div class="editor-section">
        <div class="editor-toolbar compact-toolbar">
          <div class="editor-context-group">
            <label for="rule-name">${T(`creator_label_name`)}</label>
            <input type="text" id="rule-name" class="name-input compact" placeholder="${T(`creator_label_name`)}">
            <span class="separator">|</span>
            <select id="padyam-type" class="dropdown-select compact">
              <option value="Vruttam" selected>${T(`padyam_type_vruttam`)}</option>
              <option value="Jati">${T(`padyam_type_jati`)}</option>
              <option value="UpaJati">${T(`padyam_type_upajati`)}</option>
            </select>
            <span class="separator">|</span>
            <select id="gana-type" class="dropdown-select compact">
              <option value="Name">${T(`gana_type_name`)}</option>
            </select>
          </div>

          <div class="editor-actions">
            <label class="toggle-switch compact">
              <input type="checkbox" id="same-rules" checked>
              <span class="toggle-slider"></span>
              <span class="toggle-label">${T(`creator_option_same_rules`)}</span>
            </label>
            <select id="lines" class="dropdown-select compact"></select>
          </div>
        </div>
      </div>

      <!-- SECTION 2: Rule Pattern Editor -->
      <div class="editor-section pattern-section">
        <div class="editor-toolbar">
          <div class="editor-context-group">
            <span class="editor-context">${T(`creator_section_pattern`)}</span>
          </div>
          <div class="editor-actions">
            <button id="add-pada-btn" class="btn-icon" title="${T(`creator_btn_add_row`)}">${T(`creator_btn_add_row_icon`)}</button>
            <button id="remove-pada-btn" class="btn-icon btn-danger" title="${T(`creator_btn_remove_row`)}">${T(`creator_btn_remove_row_icon`)}</button>
          </div>
        </div>

        <div id="pattern-rows-container" class="pattern-rows-container">
          <!-- Rows dynamically added -->
        </div>
      </div>

      <!-- SECTION 3: Options + Actions (CONSOLIDATED) -->
      <div class="editor-section">
        <div class="controls-bar">
          <div class="toggle-group">
            <label class="toggle-switch">
              <input type="checkbox" id="prasa" checked>
              <span class="toggle-slider"></span>
              <span class="toggle-label">${T(`creator_option_prasa`)}</span>
            </label>
            <span class="separator">|</span>
            <label class="toggle-switch">
              <input type="checkbox" id="prasa-yati">
              <span class="toggle-slider"></span>
              <span class="toggle-label">${T(`creator_option_prasa_yati`)}</span>
            </label>
            <span class="separator">|</span>
            <label class="toggle-switch">
              <input type="checkbox" id="anthya-prasa">
              <span class="toggle-slider"></span>
              <span class="toggle-label">${T(`creator_option_anthya_prasa`)}</span>
            </label>
          </div>

          <div class="main-actions">
            <button id="cancel-btn" class="btn-secondary">${T(`creator_btn_cancel`)}</button>
            <button id="create-rule-btn" class="btn-primary">${T(`creator_btn_create`)}</button>
          </div>
        </div>
      </div>
    </div>
  `}function rr(){er.reset();let e=K(G.LINES);if(e)for(let t=1;t<=8;t++){let n=document.createElement(`option`);n.value=t.toString(),n.textContent=`${t} ${T(t===1?`pada_singular`:`pada_plural`)}`,t===4&&(n.selected=!0),e.appendChild(n)}let t=K(G.SAME_RULES);t&&(t.checked=!0),sr(`Vruttam`),ur(),cr(!0)}function ir(){K(G.PADYAM_TYPE)?.addEventListener(`change`,e=>{let t=e.target.value;sr(t),lr()}),K(G.GANA_TYPE)?.addEventListener(`change`,()=>{lr()}),K(G.SAME_RULES)?.addEventListener(`change`,e=>{let t=e.target.checked;cr(t)}),K(G.ADD_PADA_BTN)?.addEventListener(`click`,()=>ur()),K(G.REMOVE_PADA_BTN)?.addEventListener(`click`,()=>ar()),K(`cancel-btn`)?.addEventListener(`click`,()=>window.location.href=v(`/`)),K(`create-rule-btn`)?.addEventListener(`click`,async()=>await gr()),or()}function ar(){let e=K(G.PATTERN_ROWS_CONTAINER)?.querySelectorAll(W.PATTERN_ROW);e&&e.length>1&&e[e.length-1].remove()}function or(){K(G.PATTERN_ROWS_CONTAINER)?.addEventListener(`click`,e=>{let t=e.target;if(t.classList.contains(`add-gana-btn`)||t.closest(`.add-gana-btn`)){let e=t.closest(`.add-gana-btn`),n=parseInt(e?.getAttribute(`data-row`)||`0`);n>0&&(fr(n),mr(n))}else if(t.classList.contains(`remove-gana-btn`)||t.closest(`.remove-gana-btn`)){let e=t.closest(`.remove-gana-btn`),n=parseInt(e?.getAttribute(`data-row`)||`0`);n>0&&(pr(n),mr(n))}else if(t.classList.contains(`remove-row-btn`)||t.closest(`.remove-row-btn`)){let e=t.closest(`.remove-row-btn`),n=parseInt(e?.getAttribute(`data-row`)||`0`);n>0&&dr(n)}})}function sr(e){let t=K(G.GANA_TYPE);if(t){if(t.innerHTML=``,e===`Vruttam`){let e=document.createElement(`option`);e.value=`Name`,e.textContent=T(`gana_type_name`),t.appendChild(e)}else if(e===`Jati`){let e=document.createElement(`option`);e.value=`Type`,e.textContent=T(`gana_type_type`),t.appendChild(e);let n=document.createElement(`option`);n.value=`Weight`,n.textContent=T(`gana_type_weight`),t.appendChild(n)}else if(e===`UpaJati`){let e=document.createElement(`option`);e.value=`Type`,e.textContent=T(`gana_type_type`),t.appendChild(e)}}}function cr(e){let t=K(G.ADD_PADA_BTN),n=K(G.REMOVE_PADA_BTN);e?(t&&(t.disabled=!0,t.classList.add(`disabled`)),n&&(n.disabled=!0,n.classList.add(`disabled`)),document.querySelectorAll(W.REMOVE_ROW_BTN).forEach(e=>{e.style.display=`none`})):(t&&(t.disabled=!1,t.classList.remove(`disabled`)),n&&(n.disabled=!1,n.classList.remove(`disabled`)),document.querySelectorAll(W.REMOVE_ROW_BTN).forEach(e=>{e.style.display=`inline-block`}))}function lr(){let e=K(G.PATTERN_ROWS_CONTAINER);e&&e.querySelectorAll(W.PATTERN_ROW).forEach((e,t)=>{let n=t+1,r=document.getElementById(`gana-container-${n}`);if(r){let e=r.querySelectorAll(`select`).length;r.innerHTML=``;for(let t=0;t<e;t++)fr(n)}})}function ur(){let e=K(G.PATTERN_ROWS_CONTAINER);if(!e)return;let t=er.incrementRow(),n=document.createElement(`div`);n.id=`row-${t}`,n.className=`pattern-row-inline`,n.innerHTML=`
    <span class="row-badge">${t}</span>
    <span class="gana-count" id="row-header-${t}">1 ${T(`creator_gana_count_singular`)}</span>

    <div class="row-gana-actions">
      <button class="btn-icon-sm add-gana-btn" data-row="${t}"
              title="${T(`creator_btn_add_gana`)}">${T(`creator_btn_add_gana`)}</button>
      <button class="btn-icon-sm remove-gana-btn" data-row="${t}"
              title="${T(`creator_btn_remove_gana`)}">${T(`creator_btn_remove_gana`)}</button>
      <button class="btn-icon-sm btn-danger remove-row-btn" data-row="${t}"
              title="${T(`creator_btn_remove_row`)}">${T(`creator_btn_remove_row_icon`)}</button>
    </div>

    <span class="separator">|</span>

    <div class="gana-dropdowns-inline" id="gana-container-${t}"></div>

    <span class="separator">|</span>

    <div class="yati-input-inline">
      <label class="yati-label">${T(`creator_label_yati`)}:</label>
      <input type="text" id="yati-${t}" class="yati-input-compact"
             placeholder="${T(`creator_placeholder_yati`)}"
             aria-label="${T(`creator_label_yati`)} ${t}">
    </div>
  `,e.appendChild(n),fr(t),mr(t)}function dr(e){let t=K(G.PATTERN_ROWS_CONTAINER);if(!t||t.querySelectorAll(W.PATTERN_ROW).length<=1)return;let n=document.getElementById(`row-${e}`);n&&n.remove()}function fr(e){let t=document.getElementById(`gana-container-${e}`);if(!t)return;let n=t.querySelectorAll(`select`).length+1,r=document.createElement(`select`);r.id=`gana-${e}-${n}`,r.className=`gana-select dropdown-select`,hr().forEach(e=>{let t=document.createElement(`option`);t.value=e.value,t.textContent=e.label,r.appendChild(t)}),t.appendChild(r)}function pr(e){let t=document.getElementById(`gana-container-${e}`);if(!t)return;let n=t.querySelectorAll(`select`);n.length>1&&n[n.length-1].remove()}function mr(e){let t=document.getElementById(`row-header-${e}`),n=document.getElementById(`gana-container-${e}`);if(t&&n){let e=n.querySelectorAll(`select`).length;t.textContent=`${e} ${T(e===1?`creator_gana_count_singular`:`creator_gana_count_plural`)}`}}function hr(){let e=K(G.GANA_TYPE);if(!e)return[];switch(e.value){case`Name`:return[{label:T(`gana_ya`),value:`య`},{label:T(`gana_ma`),value:`మ`},{label:T(`gana_ta`),value:`త`},{label:T(`gana_ra`),value:`ర`},{label:T(`gana_ja`),value:`జ`},{label:T(`gana_bha`),value:`భ`},{label:T(`gana_na`),value:`న`},{label:T(`gana_sa`),value:`స`},{label:T(`gana_ga`),value:`గ`},{label:T(`gana_gaa`),value:`గా`},{label:T(`gana_va`),value:`వ`},{label:T(`gana_ha`),value:`హ`},{label:T(`gana_lala`),value:`లల`},{label:T(`gana_la`),value:`ల`}];case`Type`:return[{label:T(`gana_indra`),value:`Indra`},{label:T(`gana_surya`),value:`Surya`},{label:T(`gana_chandra`),value:`Chandra`},{label:T(`gana_guruvu`),value:`Guruvu`},{label:T(`gana_laghuvu`),value:`Laghuvu`}];case`Weight`:return Array.from({length:50},(e,t)=>({label:`${t+1} ${T(t===0?`matra_singular`:`matra_plural`)}`,value:(t+1).toString()}));default:return[]}}async function gr(){let e=_r(),t=await $n(e);if(!t.isValid){jt(t.errors,`warning`,{title:T(`creator_error`)});return}try{if(await P.getCustomRulesCount()>=50){j(T(`creator_limit_reached`),`warning`);return}await P.createCustomRule(e),await F.loadCustomRuleset(`custom-rules`,!0),j(T(`creator_success`),`success`);let t=v(`/learn/custom-rules/${e.Identifier}`);window.history.pushState(null,``,t),window.dispatchEvent(new PopStateEvent(`popstate`))}catch(e){j(T(`creator_error`),`error`),console.error(e)}}function _r(){let e=q(G.RULE_NAME).value.trim(),t=Qn(e),n=q(G.PADYAM_TYPE),r=q(G.GANA_TYPE),i=n.value,a=r.value,o=q(G.PRASA),s=q(G.PRASA_YATI),c=q(G.ANTHYA_PRASA),l=q(G.SAME_RULES),u=q(G.LINES),d=o.checked,f=s.checked,p=c.checked,m=l.checked,h=m?parseInt(u.value):0,g=q(G.PATTERN_ROWS_CONTAINER),_=[],v=g.querySelectorAll(W.PATTERN_ROW);v.forEach((e,t)=>{let n=t+1,r=document.getElementById(`gana-container-${n}`);if(r){let e=r.querySelectorAll(`select`),t=[];e.forEach(e=>{t.push(e.value)}),_.push(t)}});let y=Zn(v),ee=m?h:_.length,b=Math.max(1,ee-1);return{Identifier:t,Name:e,Language:`Telugu`,PadyamType:i,PadyamSubType:i,RuleType:vr(a),Frequency:`Rare`,Lines:ee,Threshold:b,Rules:_,Yati:y.length>0?y:void 0,YatiMode:i===`Vruttam`?`CharPosition`:`GPosition`,Prasa:d,PrasaYati:f,AnthyaPrasa:p,InfiniteLength:!1,DeferThresold:!1,YatiRecycle:!1,ReverseYati:!1,OnlyPrasaYati:!1,RuleText:``,References:[],Examples:[]}}function vr(e){switch(e){case`Name`:return`Name`;case`Type`:return`Type`;case`Weight`:return`Weight`;default:return`Name`}}function yr(e,t){let n=[],r=[],i=new Set,a=`root`;n.push({id:a,label:t,type:`root`,childCount:e.length});let o=br(e,e=>e.padyamType);for(let[e,t]of o){let o=`pt:${e}`;i.has(o)||(i.add(o),n.push({id:o,label:e,type:`padyamType`,childCount:t.length}),r.push({source:a,target:o,type:`taxonomy`}));let s=br(t,e=>e.padyamSubType);for(let[t,a]of s){let s=`st:${e}:${t}`;i.has(s)||(i.add(s),n.push({id:s,label:t,type:`padyamSubType`,childCount:a.length}),r.push({source:o,target:s,type:`taxonomy`}));let c=br(a,e=>e.chandamName||``);for(let[a,o]of c)if(a){let c=`cn:${e}:${t}:${a}`;i.has(c)||(i.add(c),n.push({id:c,label:a,type:`chandamName`,childCount:o.length}),r.push({source:s,target:c,type:`taxonomy`}));for(let e of o){let t=`r:${e.identifier}`;n.push({id:t,label:e.shortName||e.name,type:`rule`,frequency:e.frequency,charLength:e.charLength,matraLength:e.matraLength,ruleId:e.identifier}),r.push({source:c,target:t,type:`taxonomy`})}}else for(let e of o){let t=`r:${e.identifier}`;n.push({id:t,label:e.shortName||e.name,type:`rule`,frequency:e.frequency,charLength:e.charLength,matraLength:e.matraLength,ruleId:e.identifier}),r.push({source:s,target:t,type:`taxonomy`})}}}return{nodes:n,edges:r}}function br(e,t){let n=new Map;for(let r of e){let e=t(r),i=n.get(e);i?i.push(r):n.set(e,[r])}return n}async function xr(e){let{container:t,data:n,onNodeClick:r,maxNodes:i=500}=e,a=await d(()=>import(`./assets/src-BWH_r-JT.js`),__vite__mapDeps([0,1])),o=await d(()=>import(`./assets/src-CNIkmjdN.js`).then(e=>e.t),__vite__mapDeps([2,3])),s=await d(()=>import(`./assets/src-CylyMPYk.js`),__vite__mapDeps([4,1,2,3]));t.innerHTML=``;let c=t.clientWidth||900,l=t.clientHeight||600,u=n.nodes.slice(0,i).map(e=>({...e})),f=new Set(u.map(e=>e.id)),p=n.edges.filter(e=>f.has(e.source)&&f.has(e.target)).map(e=>({...e})),m=o.select(t).append(`svg`).attr(`width`,`100%`).attr(`height`,`100%`).attr(`viewBox`,`0 0 ${c} ${l}`).attr(`class`,`graph-svg`),h=m.append(`g`).attr(`class`,`graph-group`),g=s.zoom().scaleExtent([.1,4]).on(`zoom`,e=>{h.attr(`transform`,e.transform)});m.call(g);let _={root:`var(--graph-color-root, #e91e63)`,padyamType:`var(--graph-color-padyam-type, #9c27b0)`,padyamSubType:`var(--graph-color-sub-type, #2196f3)`,chandamName:`var(--graph-color-chandam, #4caf50)`,rule:`var(--graph-color-rule, #ff9800)`},v={root:20,padyamType:14,padyamSubType:10,chandamName:7,rule:5},y=a.forceSimulation(u).force(`link`,a.forceLink(p).id(e=>e.id).distance(e=>{let t=e.target;return t.type===`padyamType`?150:t.type===`padyamSubType`?100:t.type===`chandamName`?70:50})).force(`charge`,a.forceManyBody().strength(e=>{let t=e;return t.type===`root`?-500:t.type===`padyamType`?-300:t.type===`padyamSubType`?-150:-50})).force(`center`,a.forceCenter(c/2,l/2)).force(`collision`,a.forceCollide().radius(e=>v[e.type]+3)),ee=h.append(`g`).attr(`class`,`graph-links`).selectAll(`line`).data(p).enter().append(`line`).attr(`class`,`graph-link`),b=h.append(`g`).attr(`class`,`graph-nodes`).selectAll(`g`).data(u).enter().append(`g`).attr(`class`,e=>`graph-node graph-node-${e.type}`).style(`cursor`,e=>e.type===`rule`?`pointer`:`default`).on(`click`,(e,t)=>{r&&r(t)});b.append(`circle`).attr(`r`,e=>v[e.type]).attr(`fill`,e=>_[e.type]),b.filter(e=>e.type!==`rule`).append(`text`).attr(`class`,`graph-label`).attr(`dy`,e=>-(v[e.type]+4)).attr(`text-anchor`,`middle`).text(e=>e.label),b.filter(e=>e.type===`rule`).append(`title`).text(e=>e.label);let x=null;b.on(`mousedown`,(e,t)=>{t.type!==`root`&&(x=t,t.fx=t.x,t.fy=t.y,y.alphaTarget(.3).restart(),e.stopPropagation())}),m.on(`mousemove`,e=>{if(!x)return;let[t,n]=o.pointer(e,h.node());x.fx=t,x.fy=n}),m.on(`mouseup`,()=>{x&&(x.fx=null,x.fy=null,x=null,y.alphaTarget(0))}),y.on(`tick`,()=>{ee.attr(`x1`,e=>e.source.x).attr(`y1`,e=>e.source.y).attr(`x2`,e=>e.target.x).attr(`y2`,e=>e.target.y),b.attr(`transform`,e=>`translate(${e.x},${e.y})`)});let S=[{type:`root`,label:`Root`},{type:`padyamType`,label:`Padyam Type`},{type:`padyamSubType`,label:`Sub Type`},{type:`chandamName`,label:`Chandam Name`},{type:`rule`,label:`Rule`}],te=m.append(`g`).attr(`class`,`graph-legend`).attr(`transform`,`translate(20, 20)`);S.forEach((e,t)=>{let n=te.append(`g`).attr(`transform`,`translate(0, ${t*22})`);n.append(`circle`).attr(`r`,6).attr(`cx`,6).attr(`cy`,0).attr(`fill`,_[e.type]),n.append(`text`).attr(`x`,18).attr(`y`,4).attr(`class`,`graph-legend-text`).text(e.label)}),n.nodes.length>i&&m.append(`text`).attr(`x`,c-10).attr(`y`,l-10).attr(`text-anchor`,`end`).attr(`class`,`graph-info-text`).text(`Showing ${i} of ${n.nodes.length} nodes`)}async function Sr(e){let t=await m(e);if(!t){console.error(`Rule set not found: ${e}`);return}s(T(`mode_explore`)+` `+t.name),t.rulesFile?await Xt(t.rulesFile,t.examplesFile):await F.loadCustomRuleset(e);let n=await D.getAllRulesDetailed(),r=document.getElementById(`content`);if(!r)return;r.innerHTML=`
    <div class="explore-page">
      ${E(oe(e,`explore`,t.name))}

      <div class="page-header-controls">
        <h1>${t.name}</h1>
        ${vt({ruleSetId:e,currentMode:`explore`})}
      </div>
      <div class="page-subtitle">${n.length} ${T(`label_rules_count`)} — ${T(`mode_explore`)}</div>

      <div class="graph-controls">
        <span class="graph-hint">${T(`explore_graph_hint`)}</span>
      </div>

      <div id="graph-container" class="graph-container"></div>
    </div>
  `;let i=document.getElementById(`graph-container`);i&&await xr({container:i,data:yr(n,t.name),maxNodes:n.length>500?300:void 0,onNodeClick:t=>{t.ruleId&&(window.location.href=v(`/learn/${e}/${t.ruleId}`))}})}var Cr=null,J=[];async function wr(){s(T(`nav_my_writings`));let e=document.getElementById(`content`);e&&(J=await tt.getAllPoems(),e.innerHTML=Tr(J),Dr(e),t.trackEvent(`page_view`,{page:`my_writings`,poemCount:J.length}))}function Tr(e){let t=e.length;if(t===0)return`
      <div class="my-writings-page">
        <h1>${T(`nav_my_writings`)}</h1>
        <div class="writings-empty">
          <p>${T(`writings_empty`)}</p>
        </div>
      </div>
    `;let n=e.sort((e,t)=>t.addedAt-e.addedAt).map(e=>Er(e)).join(``);return`
    <div class="my-writings-page">
      <h1>${T(`nav_my_writings`)}</h1>
      <p class="writings-subtitle">${T(`writings_subtitle`).replace(`{count}`,String(t))}</p>
      <div class="writings-list">
        ${n}
      </div>
    </div>
  `}function Er(e){let t=e.beautified?`<div class="poem">${nt(e.beautified)}</div>`:`<pre class="poem-text">${Or(e.poemText)}</pre>`,n=v(`/compute/${e.ruleSetId}/${e.ruleIdentifier}`);return`
    <div class="writing-card" data-hash="${e.poemHash}">
      <div class="writing-header">
        <span class="meter-name">${Or(e.ruleName)}</span>
        <div class="writing-actions">
          <a href="${n}" class="try-example-btn" data-hash="${e.poemHash}" title="${T(`btn_try_example`)}">
            <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">play_arrow</span>
            ${T(`btn_try_example`)}
          </a>
          <button class="action-btn btn-delete-inline btn-delete-writing" data-hash="${e.poemHash}"
                  title="${T(`writings_delete`)}" aria-label="${T(`writings_delete`)}">
            <span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">delete</span>
            <span>${T(`writings_delete`)}</span>
          </button>
        </div>
      </div>
      <div class="example-poem-area">
        ${t}
      </div>
    </div>
  `}function Dr(e){Cr&&Cr.abort(),Cr=new AbortController,e.addEventListener(`click`,async n=>{let r=n.target,i=r.closest(`.btn-delete-writing`);if(i){let n=i.getAttribute(`data-hash`);if(!n||!await Ft(T(`writings_delete_confirm`),{title:T(`writings_delete`),cancelText:T(`creator_btn_cancel`),confirmText:T(`writings_delete`)}))return;await tt.removePoem(n),t.trackEvent(`poem_removed`,{poemHash:n}),J=await tt.getAllPoems(),e.innerHTML=Tr(J),Dr(e);return}let a=r.closest(`.try-example-btn`);if(a){let e=a.getAttribute(`data-hash`);if(e){let t=J.find(t=>t.poemHash===e);t&&O.saveEditorState({text:t.poemText})}}},{signal:Cr.signal})}function Or(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}async function kr(){s(T(`my_data_title`));let e=document.getElementById(`content`);if(!e)return;let[n,r]=await Promise.all([tt.getPoemCount(),P.getAllCustomRulesets()]),i=r.find(e=>e.type===`favorites`&&e.rules.length>0),a=r.find(e=>e.id===`custom-rules`&&e.rules.length>0),o=ce(T(`my_data_title`)),c=[];if(n>0&&c.push(`
      <div class="rule-set-card">
        <h2 class="meter-name">${T(`my_data_writings_title`)}</h2>
        <div class="rule-count">${n}/20 ${T(`my_data_writings_desc`)}</div>
        <p class="description">${T(`my_data_writings_subtitle`)}</p>
        <div class="card-actions">
          <a href="${v(`/my-writings`)}" class="btn-analyze">
            <span class="material-symbols-outlined" style="font-size:14px" aria-hidden="true">edit</span>
            ${T(`my_data_view`)}
          </a>
        </div>
      </div>
    `),i){let e=i.rules.reduce((e,t)=>e+(t.Examples?.length??0),0);c.push(de({id:i.id,name:i.name,description:i.description,ruleCount:i.rules.length,maxCount:50,exampleCount:e,isCustom:!0,isFavorites:!0}))}a&&c.push(fe({...a,maxCount:50})),c.push(`
    <a href="${v(`/create-rule`)}" class="rule-set-card create-rule-card">
      <div class="create-rule-icon">
        <span class="material-symbols-outlined" style="font-size:32px" aria-hidden="true">add</span>
      </div>
      <h2>${T(`custom_rules_btn_create`)}</h2>
    </a>
  `),e.innerHTML=`
    <div class="rule-sets-page my-data-page">
      ${E(o)}

      <h1>${T(`my_data_title`)}</h1>

      <div class="rule-actions my-data-actions">
        <button id="btn-clear-all-data" class="action-btn" title="${T(`my_data_clear_btn`)}">
          <span class="material-symbols-outlined" style="font-size:16px" aria-hidden="true">delete</span>
          <span>${T(`my_data_clear_btn`)}</span>
        </button>
      </div>

      <div class="rule-set-cards">
        ${c.join(``)}
      </div>
    </div>
  `,document.getElementById(`btn-clear-all-data`)?.addEventListener(`click`,async()=>{await Ft(T(`clear_data_warning`),{title:T(`my_data_clear_btn`),cancelText:T(`creator_btn_cancel`),confirmText:T(`my_data_clear_btn`)})&&(await O.clearAll(),t.trackEvent(`clear_all_data`,{}),window.location.reload())}),t.trackEvent(`page_view`,{page:`my_data`})}var Ar={link:`link`,"play-circle":`play_circle`,book:`menu_book`,dictionary:`grid_view`,wrench:`build`,people:`group`,microscope:`science`,help:`help`,library:`local_library`,video:`smart_display`,code:`code`,play:`play_arrow`,delete:`delete`,add:`add`,bookmark:`bookmark`,download:`download`,refresh:`refresh`,random:`casino`,clear:`delete_sweep`,edit:`edit`,favorite:`favorite`};function jr(e,t=16){return`<span class="material-symbols-outlined" style="font-size:${t}px" aria-hidden="true">${Ar[e]||Ar.link}</span>`}function Mr(e){return{link:`link`,youtube:`play-circle`,book:`book`,dictionary:`dictionary`,tool:`wrench`,community:`people`,research:`microscope`}[e]||`link`}function Nr(e){if(!e)return null;try{let t=e.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);return t||(t=e.match(/youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/),t)||(t=e.match(/youtube\.com\/playlist\?.*list=([a-zA-Z0-9_-]+)/),t)?t[1]:null}catch{return null}}function Pr(e){return`https://img.youtube.com/vi/${e}/maxresdefault.jpg`}function Fr(e){return e?/youtube\.com|youtu\.be/.test(e):!1}function Ir(){let e=window.location.pathname;return e.includes(`/pages/te/`)?`te`:e.includes(`/pages/en/`)?`en`:w()}async function Lr(){let e=v(`/pages/${Ir()}/resources.json`);try{let t=await fetch(e);if(!t.ok)throw Error(`Failed to load resources: ${t.status}`);Rr((await t.json()).groups)}catch(e){console.error(`Error loading resources page:`,e)}}function Rr(e){let t=document.getElementById(`resources-nav`);t&&(t.innerHTML=e.map(e=>`<a href="${v(`/resources`)+`#${e.id}`}">${e.title}</a>`).join(``));let n=document.getElementById(`resources-content`);n&&(n.innerHTML=e.map(e=>zr(e)).join(``))}function zr(e){let t=jr(e.groupIcon,20),n=e.items.map(e=>Br(e)).join(``);return`
    <section id="${e.id}" class="resource-section">
      <h3>${t} ${e.title}</h3>
      <div class="resource-grid">
        ${n}
      </div>
    </section>
  `}function Br(e){return e.type===`youtube`&&e.link&&Fr(e.link)?Wr(e):Vr(e)}function Vr(e){let t=jr(Mr(e.type),16),n=e.link?Hr(e.link):null,r=n?Ur(n):``;return`
    <article class="resource-card">
      <div class="item-header">
        <span class="item-icon">${t}</span>
        <h4>${e.link?`<a href="${n}"${r}>${e.text}</a>`:e.text}</h4>
      </div>
      <p>${e.description}</p>
    </article>
  `}function Hr(e){return e.startsWith(`/`)?v(e):e}function Ur(e){return` target="_blank" rel="noopener noreferrer"`}function Wr(e){let t=Nr(e.link),n=Hr(e.link),r=Ur(n);if(!t)return Vr(e);let i=Pr(t),a=jr(`play-circle`,48);return`
    <article class="resource-card resource-card-youtube">
      <div class="youtube-thumb">
        <img 
          src="${i}" 
          alt="${e.text}"
          onerror="this.style.display='none'"
        />
        <div class="youtube-play-badge">${a}</div>
      </div>
      <h4>
        <a href="${n}"${r}>${e.text}</a>
      </h4>
      <p>${e.description}</p>
    </article>
  `}async function Gr(e){return await m(e)!==void 0}async function Kr(e){try{return await D.getRuleInfo(e),!0}catch{return!1}}function qr(e){console.warn(`Invalid rule set: ${e}, redirecting to home`),window.location.href=v(`/`)}function Jr(e,t){console.warn(`Invalid rule: ${t} in ${e}, redirecting to rule set page`),window.location.href=v(`/compute/${e}/`)}var Yr=`<svg class="loader-svg" viewBox="0 0 128 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle class="loader-circle" cx="24" cy="24" r="7" fill="#1a3a5c"/>
  <circle class="loader-circle" cx="48" cy="24" r="10" fill="#b8860b"/>
  <circle class="loader-circle" cx="72" cy="24" r="7" fill="#1a3a5c"/>
  <circle class="loader-circle" cx="96" cy="24" r="10" fill="#b8860b"/>
</svg>`,Xr=class{constructor(e){this.isShowing=!1,this.config=e,this.setupEventListeners()}setupEventListeners(){L.onLoadingStarted(()=>{this.show()}),L.onLoadingCompleted(()=>{this.hide()}),L.onLoadingFailed(()=>{this.hide()})}show(){let e=document.getElementById(this.config.containerId);e&&(this.isShowing||=(e.innerHTML=this.createLoaderHTML(),!0))}async hide(){if(!this.isShowing)return;let e=document.getElementById(this.config.containerId);if(e){let t=e.querySelector(`.loader-container`);t&&(t.classList.add(`fade-out`),await this.delay(400),e.innerHTML=``)}this.isShowing=!1}createLoaderHTML(){return`
      <div class="loader-container" aria-label="${this.config.fallbackText}">
        ${Yr}
        <p class="loader-fallback" style="display:none;">${this.config.fallbackText}</p>
      </div>
    `}delay(e){return new Promise(t=>setTimeout(t,e))}};function Zr(){return new Xr({fallbackText:`Loading Chandam...`,containerId:`initial-loader`})}var Qr=`<div class="page-loading">
  <svg class="loader-svg" viewBox="0 0 128 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle class="loader-circle" cx="24" cy="24" r="7" fill="#1a3a5c"/>
    <circle class="loader-circle" cx="48" cy="24" r="10" fill="#b8860b"/>
    <circle class="loader-circle" cx="72" cy="24" r="7" fill="#1a3a5c"/>
    <circle class="loader-circle" cx="96" cy="24" r="10" fill="#b8860b"/>
  </svg>
</div>`,$r=class{constructor(){this.activeActions=new Map,this.setupEventListeners()}setupEventListeners(){L.onActionStarted(e=>this.handleStart(e)),L.onActionCompleted(e=>this.handleEnd(e)),L.onActionFailed(e=>this.handleEnd(e))}handleStart(e){let{source:t,buttonId:n,resultContainerId:r}=e;if(!n)return;let i=document.getElementById(n);if(i&&(i.classList.add(`is-loading`),i.setAttribute(`aria-busy`,`true`)),r){let e=document.getElementById(r);if(e){e.style.display=`block`;let t=e.querySelector(`#results-container`);t&&(t.innerHTML=Qr)}}this.activeActions.set(t,{buttonId:n,resultContainerId:r})}handleEnd(e){let t=this.activeActions.get(e.source);if(!t)return;let n=document.getElementById(t.buttonId);n&&(n.classList.remove(`is-loading`),n.removeAttribute(`aria-busy`)),this.activeActions.delete(e.source)}};function ei(){return new $r}async function ti(e){try{console.log(`Decompression: Fetching ${e}`);let t=await fetch(e);if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let n=t.body;if(!n)throw Error(`Response body is null`);let r=n.pipeThrough(new DecompressionStream(`gzip`)).getReader(),i=[],a=0;for(;;){let{done:e,value:t}=await r.read();if(e)break;i.push(t),a+=t.length}let o=new Uint8Array(a),s=0;for(let e of i)o.set(e,s),s+=e.length;let c=new TextDecoder(`utf-8`).decode(o);return console.log(`Decompression: ${e} → ${c.length} chars (${a} bytes)`),c}catch(e){throw console.error(`Decompression failed:`,e),e}}typeof window<`u`&&(window.decompressGzip=ti);var ni=S.USER_ID;function ri(){let e=localStorage.getItem(ni);return e||(e=crypto.randomUUID(),localStorage.setItem(ni,e),console.log(`[Analytics] Generated new user ID:`,e.substring(0,8)+`...`)),e}function ii(){window.chandam={storage:{getEditor:()=>O.loadEditorState(),getUI:()=>O.loadUIState(),clear:()=>O.clearAll()},analytics:{getUserId:()=>{let e=ri();return console.log(`User ID:`,e),e},resetUserId:()=>{localStorage.removeItem(ni);let e=ri();return console.log(`New user ID generated:`,e),e}},favorites:{list:async()=>{let e=await A.getAllFavorites();return console.table(e.map(e=>({ruleSet:e.ruleSetId,rule:e.ruleId,name:e.ruleData.name,favorited:new Date(e.favoritedAt).toLocaleString()}))),e},add:async(e,t)=>{if(await A.isFavorited(e,t))return console.log(`Already favorited`),!1;let n=await D.getRuleDto(t);return await A.toggleFavorite(e,t,n),console.log(`Added ${t} to favorites`),!0},remove:async(e,t)=>{if(!await A.isFavorited(e,t))return console.log(`Not in favorites`),!1;let n=await D.getRuleDto(t);return await A.toggleFavorite(e,t,n),console.log(`Removed ${t} from favorites`),!0},check:async(e,t)=>{let n=await A.isFavorited(e,t);return console.log(n?`Favorited`:`Not favorited`),n},count:async()=>{let e=await A.getFavoriteCount();return console.log(`${e} favorites (max 50)`),e},clear:async()=>{let e=await A.getAllFavorites();for(let t of e)await A.toggleFavorite(t.ruleSetId,t.ruleId,t.ruleData);return console.log(`All favorites cleared`),!0}},custom:{list:async()=>{let e=await P.getAllCustomRulesets();return console.table(e.map(e=>({id:e.id,name:e.name,type:e.type,rules:e.rules.length,updated:new Date(e.updatedAt).toLocaleString()}))),e},get:async e=>await P.getCustomRuleset(e),set:async(e,t,n)=>{try{let r=JSON.parse(n);if(!Array.isArray(r))return console.error(`Rules must be an array`),!1;if(r.length>20)return console.error(`Cannot exceed 20 rules per custom ruleset`),!1;if(e===`custom-fav`)return console.error(`Cannot manually edit favorites collection. Use chandam.favorites API.`),!1;let i={id:e,name:t,description:`User-defined rules (${r.length} rules)`,rules:r,type:`custom`,createdAt:Date.now(),updatedAt:Date.now()};await O.init();let a=await P.getAllCustomRulesets(),o=a.findIndex(t=>t.id===e);return o>=0?a[o]=i:a.push(i),await O.indexedDB.saveData(`custom-rulesets`,a),console.log(`Saved custom ruleset "${t}" with ${r.length} rules`),await F.loadCustomRuleset(i.id),console.log(`Custom ruleset loaded into WASM engine`),!0}catch(e){return console.error(`Invalid JSON:`,e),!1}},delete:async e=>{if(e===`custom-fav`)return console.error(`Cannot delete favorites collection. Use chandam.favorites.clear() instead.`),!1;await O.init();let t=(await P.getAllCustomRulesets()).filter(t=>t.id!==e);return await O.indexedDB.saveData(`custom-rulesets`,t),console.log(`Custom ruleset "${e}" deleted`),!0}}},console.log(`Chandam console API loaded. Try:`),console.log(`  chandam.favorites.list()`),console.log(`  chandam.custom.list()`)}var ai={te:{baseCodePoint:3072,halantOffset:77,overrides:{}},kn:{baseCodePoint:3200,halantOffset:77,overrides:{}},de:{baseCodePoint:2304,halantOffset:77,overrides:{}}},oi={2:[5,62],3:[6,62],4:[7,63],5:[8,64],6:[9,65],7:[10,66],8:[11,67],9:[96,68],10:[12,98],11:[97,99],13:[14,70],14:[15,71],15:[16,72],17:[18,74],18:[19,75],19:[20,76]},si={101:21,102:22,103:23,104:24,105:25,106:26,107:27,108:28,109:29,110:30,111:31,112:32,113:33,114:34,115:35,116:36,117:37,118:38,119:39,120:40,122:42,123:43,124:44,125:45,126:46,127:47,128:48,129:49,130:50,131:51,133:53,134:54,135:55,136:56,137:57},ci={200:1,201:1,202:2,203:3,204:61},li={hash:{a:2,"a'":3,A:3,aa:3,i:4,"i'":5,I:5,ee:5,ii:5,u:6,"u'":7,U:7,uu:7,oo:7,R:8,Ru:9,"~l":10,"~L":11,e:13,"e'":14,E:14,ea:14,ai:15,o:17,"o'":18,O:18,oa:18,au:19,ou:19,"@M":201,"@m":201,M:202,"@h":203,"@2":204,k:101,kh:102,K:102,g:103,gh:104,G:104,"~m":105,ch:106,c:106,Ch:107,C:107,j:108,jh:109,J:109,"~n":110,T:111,Th:112,D:113,Dh:114,N:115,t:116,th:117,d:118,dh:119,n:120,p:122,ph:123,f:123,P:123,b:124,bh:125,B:125,m:126,y:127,r:128,"~r":129,l:130,L:131,v:133,w:133,S:134,sh:135,s:136,h:137,nk:[202,101],nkh:[202,102],nK:[202,102],ng:[202,103],ngh:[202,104],nG:[202,104],nc:[202,106],nch:[202,106],nCh:[202,107],nC:[202,107],nj:[202,108],njh:[202,109],nJ:[202,109],nT:[202,111],nTh:[202,112],nD:[202,113],nDh:[202,114],nt:[202,116],nth:[202,117],nd:[202,118],ndh:[202,119],np:[202,122],nph:[202,123],nf:[202,123],nP:[202,123],nb:[202,124],nbh:[202,125],nB:[202,125],nS:[202,134],nsh:[202,135],ns:[202,136],mk:[202,101],mkh:[202,102],mK:[202,102],mg:[202,103],mgh:[202,104],mG:[202,104],mc:[202,106],mch:[202,106],mCh:[202,107],mC:[202,107],mj:[202,108],mjh:[202,109],mJ:[202,109],mT:[202,111],mTh:[202,112],mD:[202,113],mDh:[202,114],mt:[202,116],mth:[202,117],md:[202,118],mdh:[202,119],mp:[202,122],mph:[202,123],mf:[202,123],mP:[202,123],mb:[202,124],mbh:[202,125],mB:[202,125],mS:[202,134],msh:[202,135],ms:[202,136],mv:[202,133],mw:[202,133],x:[101,135],"#":255,"^":254,"&":253,_:252},array:`.@M.M.@h..a.A.i.I.u.U.R.~l..e.E.ai..o.O.au.k.kh.g.gh.~m.ch.Ch.j.jh.~n.T.Th.D.Dh.N.t.th.d.dh.n..p.ph.b.bh.m.y.r.~r.l.L..v.S.sh.s.h`.split(`.`)};function ui(e){switch(e){case`rts`:return li;default:return li}}function Y(e){return String.fromCharCode(e)}function di(e,t,n){let r=ui(t),i=ai[n],a=i.baseCodePoint,o=a+i.halantOffset,s=r.hash,c=``,l=!1,u=0,d=e.length;for(;u<d;){let t=!1;for(let n=3;n>0;n--){if(u+n>d)continue;let r=s[e.substring(u,u+n)];if(r!==void 0){if(Array.isArray(r))for(let e of r)c+=mi(e,a,o,l),l=fi(e);else c+=mi(r,a,o,l),l=fi(r);u+=n,t=!0;break}}t||(l&&=(c+=Y(o),!1),c+=e[u],u++)}return l&&(c+=Y(o)),c}function fi(e){return e>=101&&e<=147}function pi(e){return e>=2&&e<=19}function mi(e,t,n,r){if(e>=200&&e<=205){let n=ci[e];if(n===void 0)return``;let r=``;return r+=Y(t+n),r}if(pi(e)){let n=oi[e];return n?r?e===2?``:Y(t+n[1]):Y(t+n[0]):``}if(fi(e)){let i=si[e];if(i===void 0)return``;let a=``;return r&&(a+=Y(n)),a+=Y(t+i),a}return e===252?``:(e===253||e===254)&&r?Y(n):``}var hi=new Set([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`,`PageUp`,`PageDown`,`Escape`,`Tab`]),gi=new Set([` `,`.`,`,`,`;`,`:`,`!`,`?`,`
`,`\r`,`(`,`)`,`[`,`]`,`{`,`}`,`"`,`'`,`/`,`\\`,`|`,`-`]);function _i(e,t){let n={inputBuffer:``,prevOutputLen:0},r=!1;function i(i){let{scheme:a,script:o}=t();if(a!==`none`){if(i.inputType===`insertText`&&i.data&&i.data.length===1){let t=i.data;if(gi.has(t)){X(n);return}i.preventDefault(),r=!0,n.inputBuffer+=t,vi(e,n,a,o);return}if(i.inputType===`deleteContentBackward`){n.inputBuffer.length>0&&(i.preventDefault(),r=!0,n.inputBuffer=n.inputBuffer.slice(0,-1),vi(e,n,a,o));return}if(i.inputType===`insertLineBreak`||i.inputType===`insertParagraph`){X(n);return}}}function a(r){let{scheme:i}=t();if(i!==`none`){if(hi.has(r.key)){X(n);return}if(r.key===`Backspace`){if(n.inputBuffer.length>0){r.preventDefault(),n.inputBuffer=n.inputBuffer.slice(0,-1);let{script:a}=t();vi(e,n,i,a)}return}}}function o(i){if(r){r=!1;return}let{scheme:a,script:o}=t();if(a===`none`)return;if(i.ctrlKey||i.altKey||i.metaKey){X(n);return}let s=i.key;if(s.length===1){if(gi.has(s)){X(n);return}if(i.key===`Enter`){X(n);return}i.preventDefault(),n.inputBuffer+=s,vi(e,n,a,o)}}function s(){X(n)}function c(){X(n)}return e.addEventListener(`beforeinput`,i),e.addEventListener(`keydown`,a),e.addEventListener(`keypress`,o),e.addEventListener(`mouseup`,s),e.addEventListener(`touchend`,c),()=>{e.removeEventListener(`beforeinput`,i),e.removeEventListener(`keydown`,a),e.removeEventListener(`keypress`,o),e.removeEventListener(`mouseup`,s),e.removeEventListener(`touchend`,c)}}function X(e){e.inputBuffer=``,e.prevOutputLen=0}function vi(e,t,n,r){let i=t.inputBuffer.length>0?di(t.inputBuffer,n,r):``,a=e.selectionStart??e.value.length,o=a-t.prevOutputLen;e.value=e.value.substring(0,o)+i+e.value.substring(a);let s=o+i.length;e.setSelectionRange(s,s),t.prevOutputLen=i.length,e.dispatchEvent(new Event(`input`,{bubbles:!0}))}var yi=`chandam:kb-scheme`,bi=`rts`,xi=`te`;function Si(){try{let e=localStorage.getItem(yi);if(e){let[t,n]=e.split(`:`);if(wi(t)&&Ti(n))return{scheme:t,script:n}}}catch{}return{scheme:bi,script:xi}}function Ci(e){try{localStorage.setItem(yi,`${e.scheme}:${e.script}`)}catch{}}function wi(e){return e===`rts`||e===`itx`||e===`iast`||e===`none`}function Ti(e){return e===`te`||e===`kn`||e===`de`}var Z,Ei,Q=null,Di=null;function Oi(e){let t=Si();Z=t.scheme,Ei=t.script,Q=document.getElementById(`kb-toggle`),Q&&(Mi(),Q.addEventListener(`click`,ji),Di=e)}function ki(){return Z}function Ai(){return Ei}function ji(){Z=Z===`none`?`rts`:`none`,Ci({scheme:Z,script:Ei}),Mi(),Di?.(Z,Ei)}function Mi(){if(!Q)return;let e=Z!==`none`;Q.classList.toggle(`active`,e),Q.setAttribute(`aria-pressed`,String(e));let t=Q.querySelector(`rect`),n=Q.querySelector(`text`);t&&n&&(t.setAttribute(`fill`,e?`#1a3a5c`:`#999`),n.setAttribute(`fill`,e?`#f5f3f0`:`#ccc`))}var Ni=new Set,Pi=new Map;function Fi(){Oi((e,t)=>{}),document.addEventListener(`focusin`,e=>{let t=e.target;if(!Ii(t)||Ni.has(t))return;let n=_i(t,()=>({scheme:ki(),script:Ai()}));Ni.add(t),Pi.set(t,n)}),document.addEventListener(`focusout`,e=>{let t=e.target;Ii(t)&&setTimeout(()=>{if(document.activeElement!==t){let e=Pi.get(t);e&&(e(),Pi.delete(t),Ni.delete(t))}},200)})}function Ii(e){if(!e||!(e instanceof HTMLElement))return!1;if(e instanceof HTMLTextAreaElement)return!0;if(e instanceof HTMLInputElement){let t=e.type.toLowerCase();return t===`text`||t===`search`||t===``}return!1}var $=new n;async function Li(e){let t=await m(e);t&&(t.rulesFile||await F.loadCustomRuleset(e))}Zr(),ei(),$.register(`/`,()=>{s(T(`nav_home`)),r(`pages/${w()}/home.html`)}),$.register(`/rule-sets`,()=>{ue()}),$.register(`/create-rule`,async()=>{await tr()}),$.register(`/compute/:ruleSet/`,async e=>{if(!await Gr(e.ruleSet)){qr(e.ruleSet);return}await $t(e.ruleSet)}),$.register(`/compute/:ruleSet/:ruleId`,async e=>{if(!await Gr(e.ruleSet)){qr(e.ruleSet);return}if(await Li(e.ruleSet),!await Kr(e.ruleId)){Jr(e.ruleSet,e.ruleId);return}await an(e)}),$.register(`/explore/:ruleSet/`,async e=>{if(!await Gr(e.ruleSet)){qr(e.ruleSet);return}await Sr(e.ruleSet)}),$.register(`/learn/:ruleSet/`,async e=>{if(!await Gr(e.ruleSet)){qr(e.ruleSet);return}await Mn(e.ruleSet)}),$.register(`/learn/:ruleSet/:ruleId`,async e=>{if(!await Gr(e.ruleSet)){qr(e.ruleSet);return}if(await Li(e.ruleSet),!await Kr(e.ruleId)){Jr(e.ruleSet,e.ruleId);return}await Un(e.ruleSet,e.ruleId)}),$.register(`/my-writings`,async()=>{await wr()}),$.register(`/my-data`,async()=>{await kr()}),$.register(`/resources`,async()=>{s(T(`nav_resources`)),await r(`pages/${w()}/resources.html`),Lr()}),$.register(`/about`,()=>{s(T(`nav_about`)),r(`pages/${w()}/about.html`)}),$.register(`/credits`,()=>{s(T(`nav_credits`)),r(`pages/${w()}/credits.html`)}),$.register(`/contact`,()=>{s(T(`nav_contact`)),r(`pages/${w()}/contact.html`)});function Ri(){document.documentElement.lang=w(),document.querySelectorAll(`[data-i18n]`).forEach(e=>{let t=e.getAttribute(`data-i18n`);if(e.children.length>0){let n=Array.from(e.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE&&e.textContent?.trim()),r=n[n.length-1];r&&(r.textContent=` ${T(t)}`)}else e.textContent=T(t)});let e=document.getElementById(`lang-toggle`);if(e){e.title=T(`lang_toggle_title`);let t=e.querySelector(`.lang-current`);t&&(t.textContent=T(`lang_name`))}}window.addEventListener(`languagechange`,()=>{Ri(),$.route()}),document.addEventListener(`DOMContentLoaded`,()=>{re(),Ri(),Fi(),document.getElementById(`nav-toggle`)?.addEventListener(`click`,()=>{document.getElementById(`main-nav`)?.classList.toggle(`open`)}),document.getElementById(`lang-toggle`)?.addEventListener(`click`,()=>{let e=t.startTimedEvent(`language_toggle`,{});ae(),e({language:w()})})}),window.onWasmReady=async()=>{console.log(`WASM ready, initializing storage and console API...`),await O.init(),console.log(`Storage initialized`),ii(),t.init();let e=ri();t.setUserId(e),console.log(`Analytics initialized with user ID`);try{let e=await D.getVersion(),t=await D.getBuildDate(),n=document.getElementById(`version-info`),r=document.getElementById(`build-date-info`);n&&(n.textContent=`v${e}`),r&&(r.textContent=`Published: ${t}`)}catch{}O.loadEditorState().text&&console.log(`Restored editor state from previous session`),L.emit(I.LoadingCompleted,{source:`wasm-init`,message:`WASM initialization complete`}),console.log(`Initializing router`),$.init()};var zi=b,Bi=!1,Vi=setTimeout(()=>{if(!Bi){console.error(`[Chandam] WASM initialization timeout - check browser console`);let e=document.getElementById(`initial-loader`);e&&(e.innerHTML=`
        <div class="loader-container error" style="text-align: center; padding: 2rem;">
          <h2 style="color: #d32f2f;">Failed to Load Application</h2>
          <p>The application failed to initialize. Please try:</p>
          <button onclick="location.reload()"
                  style="margin-top: 1rem; padding: 0.5rem 1rem; cursor: pointer; font-size: 1rem;">
            Reload Page
          </button>
        </div>
      `),typeof window.gtag==`function`&&window.gtag(`event`,`exception`,{description:`wasm_init_timeout`,fatal:!0})}},zi),Hi=window.onWasmReady;window.onWasmReady=async()=>{Bi=!0,clearTimeout(Vi),Hi&&await Hi()};export{t};