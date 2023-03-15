"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7e3],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=o,g=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(g,r(r({ref:t},m),{},{components:n})):a.createElement(g,r({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={id:"customization",title:"Customization"},p=void 0,s={unversionedId:"customization",id:"customization",title:"Customization",description:"User-defined Templates",source:"@site/../docs/customization.md",sourceDirName:".",slug:"/customization",permalink:"/docs/customization",draft:!1,editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/customization.md",tags:[],version:"current",lastUpdatedBy:"William Cheng",lastUpdatedAt:1678331430,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"customization",title:"Customization"},sidebar:"docs",previous:{title:"Using Templates",permalink:"/docs/templating"},next:{title:"Debugging",permalink:"/docs/debugging"}},m={},u=[{value:"User-defined Templates",id:"user-defined-templates",level:2},{value:"Custom Generator (and Template)",id:"custom-generator-and-template",level:2},{value:"Use your new generator with the CLI",id:"use-your-new-generator-with-the-cli",level:3},{value:"Use your new generator with the maven plugin",id:"use-your-new-generator-with-the-maven-plugin",level:3},{value:"Selective generation",id:"selective-generation",level:2},{value:"Ignore file format",id:"ignore-file-format",level:2},{value:"Customizing the generator",id:"customizing-the-generator",level:2},{value:"Bringing your own models",id:"bringing-your-own-models",level:2},{value:"Schema Mapping",id:"schema-mapping",level:2},{value:"Inline Schema Naming",id:"inline-schema-naming",level:2},{value:"OpenAPI Normalizer",id:"openapi-normalizer",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"user-defined-templates"},"User-defined Templates"),(0,i.kt)("p",null,"The most common scenario for user customization is to override the built-in templates with small modifications. That scenario's documentation is in our ",(0,i.kt)("a",{parentName:"p",href:"/docs/templating"},"templating")," page, and differs from user-defined templates."),(0,i.kt)("p",null,"Prior to release 5.0.0, whenever a user wanted to include templates which weren't built-in or weren't known to the generator at compile time, they'd need to follow the more involved approach of creating a custom generator as documented later in this document. Beginning in 5.0.0, a user may now provide additional supporting files and extensions to built-in templates via configuration. This feature requires using the external configuration file feature."),(0,i.kt)("p",null,"Consider that you might want to add some static documentation such as ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTHORS.md")," and a custom tooling script. Rather than a single file for API definitions you also want an implementation file and a separate interface file for each."),(0,i.kt)("p",null,"You might have an external configuration file named ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," which defines additional properties like this for a ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin")," client generator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'additionalProperties:\n  artifactId: kotlin-petstore-client\n  serializableModel: "true"\n  dateLibrary: java8\n')),(0,i.kt)("p",null,"You would generate via CLI with the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"openapi-generator generate -g kotlin -i spec.yaml -o outdir -c config.yaml\n")),(0,i.kt)("p",null,"To support the above scenario with custom templates, ensure that you're pointing to your custom template directory and add a ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," node with template file definitions to your config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'templateDir: my_custom_templates\nadditionalProperties:\n  artifactId: kotlin-petstore-client\n  serializableModel: "true"\n  dateLibrary: java8\nfiles:\n  AUTHORS.md: {}\n  api_interfaces.mustache:\n    templateType: API\n    destinationFilename: Interface.kt\n  api.mustache:\n    templateType: API\n    destinationFilename: Impl.kt\n  other/check.mustache:\n    folder: scripts\n    destinationFilename: check.sh\n    templateType: SupportingFiles\n')),(0,i.kt)("p",null,"The keys under the ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," node are your template filenames. These honor the same resolution order as all other templates."),(0,i.kt)("p",null,"The above configuration will do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy ",(0,i.kt)("inlineCode",{parentName:"li"},"my_custom_templates/AUTHORS.md")," to the generated output directory without processing via the template engine (due to template file extension). The empty object definition following ",(0,i.kt)("inlineCode",{parentName:"li"},"AUTHORS.md")," allows the tool to infer the target output filename in the root of the output directory."),(0,i.kt)("li",{parentName:"ul"},"Compile a user-provided ",(0,i.kt)("inlineCode",{parentName:"li"},"my_custom_templates/api_interfaces.mustache")," following our usual API template compilation logic. That is, one file will be created per API; APIs are generated defined according to tags in your spec documentation. The destination filename of ",(0,i.kt)("inlineCode",{parentName:"li"},"Interface.kt")," will act as a suffix for the filename. So, a tag of ",(0,i.kt)("inlineCode",{parentName:"li"},"Equipment")," will output a corresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"EquipmentInterface.kt"),"."),(0,i.kt)("li",{parentName:"ul"},"Because ",(0,i.kt)("inlineCode",{parentName:"li"},"api.mustache")," is the same mustache filename as used in your target generator (",(0,i.kt)("inlineCode",{parentName:"li"},"kotlin")," in this example), we support the following:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The destination filename provides a suffix for the generated output. APIs generate per tag in your specification. So, a tag of ",(0,i.kt)("inlineCode",{parentName:"li"},"Equipment")," will output a corresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"EquipmentImpl.kt"),". This option will be used whether ",(0,i.kt)("inlineCode",{parentName:"li"},"api.mustache")," targets a user customized template or a built-in template."),(0,i.kt)("li",{parentName:"ul"},"The built-in template will be used if you haven't provided a customized template. The kotlin generator defines the suffix as simply ",(0,i.kt)("inlineCode",{parentName:"li"},".kt"),", so this scenario would modify only the generated file suffixes according to the previous bullet point."),(0,i.kt)("li",{parentName:"ul"},"Your ",(0,i.kt)("inlineCode",{parentName:"li"},"api.mustache")," will be used if it exists in your custom template directory. For generators with library options, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"jvm-okhttp3")," in the kotlin generator, your file must exist in the same relative location as the embedded template. For kotlin using the ",(0,i.kt)("inlineCode",{parentName:"li"},"jvm-okhttp3")," library option, this file would need to be located at ",(0,i.kt)("inlineCode",{parentName:"li"},"my_custom_templates/libraries/jvm-okhttp/api.mustache"),". See ",(0,i.kt)("a",{parentName:"li",href:"/docs/templating"},"templating")," for more details."))),(0,i.kt)("li",{parentName:"ul"},"Compile ",(0,i.kt)("inlineCode",{parentName:"li"},"my_custom_templates/other/check.mustache")," with the supporting files bundle, and output to ",(0,i.kt)("inlineCode",{parentName:"li"},"scripts/check.sh")," in your output directory. Note that we don't currently support setting file flags on output, so scripts such as these will either have to be sourced rather than executed, or have file flags set separately after generation (external to our tooling).")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"templateType")," option will default to ",(0,i.kt)("inlineCode",{parentName:"p"},"SupportingFiles"),", so the option for ",(0,i.kt)("inlineCode",{parentName:"p"},"other/check.mustache")," is redundant and provided to demonstrate the full template file configuration options. The available template types are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API"),(0,i.kt)("li",{parentName:"ul"},"APIDocs"),(0,i.kt)("li",{parentName:"ul"},"APITests"),(0,i.kt)("li",{parentName:"ul"},"Model"),(0,i.kt)("li",{parentName:"ul"},"ModelDocs"),(0,i.kt)("li",{parentName:"ul"},"ModelTests"),(0,i.kt)("li",{parentName:"ul"},"SupportingFiles")),(0,i.kt)("p",null,"Excluding ",(0,i.kt)("inlineCode",{parentName:"p"},"SupportingFiles"),", each of the above options may result in multiple files. API related types create a file per API. Model related types create a file for each model."),(0,i.kt)("p",null,"Note that user-defined templates will merge with built-in template definitions. If a supporting file with the sample template file path exists, it will be replaced with the user-defined template, otherwise the user-defined template will be added to the list of template files to compile. If the generator's built-in template is ",(0,i.kt)("inlineCode",{parentName:"p"},"model_docs.mustache")," and you define ",(0,i.kt)("inlineCode",{parentName:"p"},"model-docs.mustache"),", this will result in duplicated model docs (if ",(0,i.kt)("inlineCode",{parentName:"p"},"destinationFilename")," differs) or undefined behavior as whichever template compiles last will overwrite the previous model docs (if ",(0,i.kt)("inlineCode",{parentName:"p"},"destinationFilename")," matches the extension or suffix in the generator's code)."),(0,i.kt)("h2",{id:"custom-generator-and-template"},"Custom Generator (and Template)"),(0,i.kt)("a",{id:"creating-a-new-template"})," If none of the built-in generators suit your needs and you need to do more than just modify the mustache templates to tweak generated code, you can create a brand new generator and its associated templates. OpenAPI Generator can help with this, using the `meta` command:",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar meta \\\n  -o out/generators/my-codegen -n my-codegen -p com.my.company.codegen\n")),(0,i.kt)("p",null,"This will create a new directory ",(0,i.kt)("inlineCode",{parentName:"p"},"out/generators/my-codegen"),", with all the files you need to get started - including a ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md"),". Once modified and compiled, you can use your new codegen just like any other, with your own custom-rolled logic."),(0,i.kt)("p",null,"These names can be anything you like. If you are building a client for the whitespace language, maybe  you'd use the options ",(0,i.kt)("inlineCode",{parentName:"p"},"-o out/generators/whitespace -n whitespace"),". They can be the same, or different, it doesn't matter. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-n")," value will be become the template name."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE")," Convention is to use kebab casing for names passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"-n"),". Example, ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-finatra")," would become ",(0,i.kt)("inlineCode",{parentName:"p"},"ScalaFinatraGenerator"),"."),(0,i.kt)("h3",{id:"use-your-new-generator-with-the-cli"},"Use your new generator with the CLI"),(0,i.kt)("p",null,"To compile your library, enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"out/generators/my-codegen")," directory, run ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn package"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE")," Running your custom generator requires adding it to the classpath. This differs on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/tools/windows/classpath.html"},"Windows")," slightly from ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/tools/unix/classpath.html"},"unix"),".\nIf you are running a Windows Subsystem for Linux or a shell such as gitbash, and have issues with the unix variant, try the Windows syntax below."),(0,i.kt)("p",null,"Now, execute the generator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"java -cp out/generators/my-codegen/target/my-codegen-openapi-generator-1.0.0.jar:modules/openapi-generator-cli/target/openapi-generator-cli.jar org.openapitools.codegen.OpenAPIGenerator\n")),(0,i.kt)("p",null,"For Windows users, you will need to use ",(0,i.kt)("inlineCode",{parentName:"p"},";")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},":")," in the classpath, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'java -cp "out/generators/my-codegen/target/my-codegen-openapi-generator-1.0.0.jar;modules/openapi-generator-cli/target/openapi-generator-cli.jar" org.openapitools.codegen.OpenAPIGenerator\n')),(0,i.kt)("p",null,"Note the ",(0,i.kt)("inlineCode",{parentName:"p"},"my-codegen")," is an option for ",(0,i.kt)("inlineCode",{parentName:"p"},"-g")," now, and you can use the usual arguments for generating your code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"java -cp out/generators/my-codegen/target/my-codegen-openapi-generator-1.0.0.jar:modules/openapi-generator-cli/target/openapi-generator-cli.jar \\\n  org.openapitools.codegen.OpenAPIGenerator generate -g my-codegen \\\n  -i https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml \\\n  -o ./out/myClient\n")),(0,i.kt)("p",null,"For Windows users:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'java -cp "out/codegens/customCodegen/target/my-codegen-openapi-generator-1.0.0.jar;modules/openapi-generator-cli/target/openapi-generator-cli.jar" \\\n  org.openapitools.codegen.OpenAPIGenerator generate -g my-codegen \\\n  -i https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml \\\n  -o ./out/myClient\n')),(0,i.kt)("h3",{id:"use-your-new-generator-with-the-maven-plugin"},"Use your new generator with the maven plugin"),(0,i.kt)("p",null,"Install your library to your local maven repository by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mvn clean install -f out/generators/my-codegen\n")),(0,i.kt)("p",null,"This will install ",(0,i.kt)("inlineCode",{parentName:"p"},"org.openapitools:my-codegen-openapi-generator:1.0.0")," to your local maven repository."),(0,i.kt)("p",null,"You can use this as additional dependency of the ",(0,i.kt)("inlineCode",{parentName:"p"},"openapi-generator-maven-plugin")," plugin and use ",(0,i.kt)("inlineCode",{parentName:"p"},"my-codegen")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"generatorName")," value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n  <groupId>org.openapitools</groupId>\n  <artifactId>openapi-generator-maven-plugin</artifactId>\n  <version>${openapi-generator-version}</version>\n  <executions>\n    <execution>\n      <id>generate-client-code</id>\n      <goals>\n        <goal>generate</goal>\n      </goals>\n      <configuration>\n        <generatorName>my-codegen</generatorName>\n        \x3c!-- other configuration ... --\x3e\n      </configuration>\n    </execution>\n  </executions>\n  <dependencies>\n    <dependency>\n      <groupId>org.openapitools</groupId>\n      <artifactId>my-codegen-openapi-generator</artifactId>\n      <version>1.0.0</version>\n    </dependency>\n  </dependencies>\n</plugin>\n")),(0,i.kt)("p",null,"If you publish your artifact to a distant maven repository, do not forget to add this repository as ",(0,i.kt)("inlineCode",{parentName:"p"},"pluginRepository")," for your project."),(0,i.kt)("h2",{id:"selective-generation"},"Selective generation"),(0,i.kt)("p",null,"You may not want to generate ",(0,i.kt)("em",{parentName:"p"},"all")," models in your project. Likewise, you may want just one or two apis to be written.  If that's the case, you can use system properties or ",(0,i.kt)("a",{parentName:"p",href:"/docs/globals"},"global properties")," to control the output."),(0,i.kt)("p",null,"The default is to generate ",(0,i.kt)("em",{parentName:"p"},"everything")," supported by the specific library. Once you enable a feature, it will restrict the contents generated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# generate only models\n--global-property models\n\n# generate only apis\n--global-property apis\n\n# generate only supporting files\n--global-property supportingFiles\n\n# generate models and supporting files\n--global-property models,supportingFiles\n")),(0,i.kt)("p",null,"To control the specific files being generated, you can pass a CSV list of what you want:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# generate the User and Pet models only\n--global-property models="User:Pet"\n\n# generate the User model and the supportingFile `StringUtil.java`:\n--global-property models=User,supportingFiles=StringUtil.java\n')),(0,i.kt)("p",null,"To control generation of docs and tests for api and models, pass false to the option. For api, these options are  ",(0,i.kt)("inlineCode",{parentName:"p"},"--global-property apiTests=false,apiDocs=false"),". For models, ",(0,i.kt)("inlineCode",{parentName:"p"},"--global-property modelTests=false,modelDocs=false"),".\nThese options default to true and don't limit the generation of the feature options listed above (like ",(0,i.kt)("inlineCode",{parentName:"p"},"--global-property api"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# generate only models (with tests and documentation)\n--global-property models\n\n# generate only models (with tests but no documentation)\n--global-property models,modelDocs=false\n\n# generate only User and Pet models (no tests and no documentation)\n--global-property models="User:Pet",modelTests=false\n\n# generate only apis (without tests)\n--global-property apis,apiTests=false\n\n# generate only apis (modelTests option is ignored)\n--global-property apis,modelTests=false\n')),(0,i.kt)("p",null,"When using selective generation, ",(0,i.kt)("em",{parentName:"p"},"only")," the templates needed for the specific generation will be used."),(0,i.kt)("p",null,'To skip models defined as the form parameters in "requestBody", please use ',(0,i.kt)("inlineCode",{parentName:"p"},"skipFormModel")," (default to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),") (this option is introduced at v3.2.2 and ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," by default starting from v5.x)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"--global-property skipFormModel=true\n")),(0,i.kt)("p",null,"This option will be helpful to skip model generation due to the form parameter, which is defined differently in OAS3 as there's no form parameter in OAS3"),(0,i.kt)("h2",{id:"ignore-file-format"},"Ignore file format"),(0,i.kt)("p",null,"OpenAPI Generator supports a ",(0,i.kt)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," file, similar to ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".dockerignore")," you're probably already familiar with."),(0,i.kt)("p",null,"The ignore file allows for better control over overwriting existing files than the ",(0,i.kt)("inlineCode",{parentName:"p"},"--skip-overwrite")," flag. With the ignore file, you can specify individual files or directories can be ignored. This can be useful, for example if you only want a subset of the generated code."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# OpenAPI Generator Ignore\n# Lines beginning with a # are comments\n\n# This should match build.sh located anywhere.\nbuild.sh\n\n# Matches build.sh in the root\n/build.sh\n\n# Exclude all recursively\ndocs/**\n\n# Explicitly allow files excluded by other rules\n!docs/UserApi.md\n\n# Recursively exclude directories named Api\n# You can't negate files below this directory.\nsrc/**/Api/\n\n# When this file is nested under /Api (excluded above),\n# this rule is ignored because parent directory is excluded by previous rule.\n!src/**/PetApiTests.cs\n\n# Exclude a single, nested file explicitly\nsrc/Org.OpenAPITools.Test/Model/AnimalFarmTests.cs\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," file must exist in the root of the output directory."),(0,i.kt)("p",null,"Upon first code generation, you may also pass the CLI option ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore-file-override=/path/to/ignore_file")," for greater control over generated outputs. Note that this is a complete override, and will override the ",(0,i.kt)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," file in an output directory when regenerating code."),(0,i.kt)("p",null,"Editor support for ",(0,i.kt)("inlineCode",{parentName:"p"},".openapi-generator-ignore")," files is available in IntelliJ via the ",(0,i.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/7495--ignore"},".ignore plugin"),"."),(0,i.kt)("h2",{id:"customizing-the-generator"},"Customizing the generator"),(0,i.kt)("p",null,"There are different aspects of customizing the code generator beyond just creating or modifying templates.  Each language has a supporting configuration file to handle different type mappings, etc:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ ls -1 modules/openapi-generator/src/main/java/org/openapitools/codegen/languages/\nAbstractJavaJAXRSServerCodegen.java\nAbstractTypeScriptClientCodegen.java\n... (results omitted)\nTypeScriptAngularClientCodegen.java\nTypeScriptNodeClientCodegen.java\n")),(0,i.kt)("p",null,"Each of these files creates reasonable defaults so you can get running quickly.  But if you want to configure package names, prefixes, model folders, etc. you can use a json config file to pass the values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate \\\n  -i https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml \\\n  -g java \\\n  -o samples/client/petstore/java \\\n  -c path/to/config.json\n")),(0,i.kt)("p",null,"and ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," contains the following as an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiPackage" : "petstore"\n}\n')),(0,i.kt)("p",null,"You can use also ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml")," with following equivalent example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiPackage: "petstore"\n')),(0,i.kt)("p",null,"Supported config options can be different per language. Running ",(0,i.kt)("inlineCode",{parentName:"p"},"config-help -g {lang}")," will show available options.\n",(0,i.kt)("strong",{parentName:"p"},"These options are applied via configuration file (e.g. config.json or config.yml) or by passing them with ",(0,i.kt)("inlineCode",{parentName:"strong"},"-p {optionName}={optionValue}")),". (If ",(0,i.kt)("inlineCode",{parentName:"p"},"-p {optionName}")," does not work, please open a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openapitools/openapi-generator/issues/new"},"ticket")," and we'll look into it)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar config-help -g java\n")),(0,i.kt)("p",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CONFIG OPTIONS\n    modelPackage\n        package for generated models\n\n    apiPackage\n        package for generated api classes\n...... (results omitted)\n    library\n        library template (sub-template) to use:\n        jersey1 - HTTP client: Jersey client 1.18. JSON processing: Jackson 2.4.2\n        jersey2 - HTTP client: Jersey client 2.6\n        feign - HTTP client: Netflix Feign 8.1.1.  JSON processing: Jackson 2.6.3\n        okhttp-gson (default) - HTTP client: OkHttp 2.4.0. JSON processing: Gson 2.3.1\n        retrofit - HTTP client: OkHttp 2.4.0. JSON processing: Gson 2.3.1 (Retrofit 1.9.0)\n        retrofit2 - HTTP client: OkHttp 2.5.0. JSON processing: Gson 2.4 (Retrofit 2.0.0-beta2)\n        google-api-client - HTTP client: google-api-client 1.23.0. JSON processing: Jackson 2.8.9\n        rest-assured - HTTP client: rest-assured : 4.3.0. JSON processing: Gson 2.8.6. Only for Java8\n")),(0,i.kt)("p",null,"Your config file for Java can look like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "groupId":"com.my.company",\n  "artifactId":"MyClient",\n  "artifactVersion":"1.2.0",\n  "library":"feign"\n}\n')),(0,i.kt)("p",null,"Or if you prefer yaml format it can look like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'groupId: "com.my.company"\nartifactId: "MyClient"\nartifactVersion: "1.2.0"\nlibrary: "feign"\n')),(0,i.kt)("p",null,"For all the unspecified options default values will be used."),(0,i.kt)("p",null,"Another way to override default options is to extend the config class for the specific language.\nTo change, for example, the prefix for the Objective-C generated files, simply subclass the ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjcClientCodegen.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.mycompany.openapitools.codegen;\n\nimport org.openapitools.codegen.languages.*;\n\npublic class MyObjcCodegen extends ObjcClientCodegen {\n    static {\n        PREFIX = "HELLO";\n    }\n}\n')),(0,i.kt)("p",null,"and specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"classname")," when running the generator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-g com.mycompany.openapitools.codegen.MyObjcCodegen\n")),(0,i.kt)("p",null,"Your subclass will now be loaded and overrides the ",(0,i.kt)("inlineCode",{parentName:"p"},"PREFIX")," value in the superclass."),(0,i.kt)("h2",{id:"bringing-your-own-models"},"Bringing your own models"),(0,i.kt)("p",null,"Sometimes you don't want a model generated.  In this case, you can simply specify an import mapping to tell\nthe codegen what ",(0,i.kt)("em",{parentName:"p"},"not")," to create.  When doing this, every location that references a specific model will\nrefer back to your classes.  Note, this may not apply to all languages..."),(0,i.kt)("p",null,"To specify an import mapping, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--import-mappings")," argument and specify the model-to-import logic as such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--import-mappings Pet=my.models.MyPet\n")),(0,i.kt)("p",null,"Or for multiple mappings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--import-mappings Pet=my.models.MyPet,Order=my.models.MyOrder\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--import-mappings Pet=my.models.MyPet --import-mappings Order=my.models.MyOrder\n")),(0,i.kt)("h2",{id:"schema-mapping"},"Schema Mapping"),(0,i.kt)("p",null,"One can map the schema to something else (e.g. external objects/models outside of the package) using the ",(0,i.kt)("inlineCode",{parentName:"p"},"schemaMappings")," option, e.g. in CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g java -i modules/openapi-generator/src/test/resources/3_0/type-alias.yaml -o /tmp/java2/ --schema-mapping TypeAlias=foo.bar.TypeAlias\n")),(0,i.kt)("p",null,"Another example (in conjunction with --type-mappings):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g java -i /tmp/alias.yaml -o /tmp/alias/ --schema-mappings stream=org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody --type-mappings string+binary=stream\n")),(0,i.kt)("p",null,"while /tmp/alias.yaml is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.3\ninfo:\n  title: Demo app\n  version: 1.0.0\nservers:\n  - url: /api/v1\npaths:\n  /demo:\n    get:\n      summary: Demo\n      operationId: demo\n      responses:\n        '200':\n          description: Demo response\n          content:\n            text/csv:\n              schema:\n                type: string\n                format: binary\n")),(0,i.kt)("h2",{id:"inline-schema-naming"},"Inline Schema Naming"),(0,i.kt)("p",null,"Inline schemas are created as separate schemas automatically and the auto-generated schema name may not look good to everyone. One can customize the name using the ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," field or the ",(0,i.kt)("inlineCode",{parentName:"p"},"inlineSchemaNameMapping")," option. For exmaple, run the following,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g java -i  modules/openapi-generator/src/test/resources/3_0/inline_model_resolver.yaml -o /tmp/java3/ --skip-validate-spec --inline-schema-name-mappings inline_object_2=SomethingMapped,inline_object_4=nothing_new\n")),(0,i.kt)("p",null,"will show the following in the console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[main] INFO  o.o.codegen.InlineModelResolver - Inline schema created as arbitraryObjectRequestBodyProperty_request. To have complete control of the model name, set the `title` field or use the inlineSchemaNameMapping option (--inline-schema-name-mappings in CLI).\n[main] INFO  o.o.codegen.InlineModelResolver - Inline schema created as meta_200_response. To have complete control of the model name, set the `title` field or use the inlineSchemaNameMapping option (--inline-schema-name-mappings in CLI).\n")),(0,i.kt)("p",null,"For example, to name the inline schema ",(0,i.kt)("inlineCode",{parentName:"p"},"meta_200_response")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"MetaObject"),", use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--inline-schema-name-mappings")," option as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g java -i  modules/openapi-generator/src/test/resources/3_0/inline_model_resolver.yaml -o /tmp/java3/ --skip-validate-spec --inline-schema-name-mappings meta_200_response=MetaObject,arbitraryObjectRequestBodyProperty_request=ArbitraryRequest\n")),(0,i.kt)("p",null,"Another useful option is ",(0,i.kt)("inlineCode",{parentName:"p"},"inlineSchemaNameDefaults"),", which allows you to customize the suffix of the auto-generated inline schema name, e.g. in CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--inline-schema-name-defaults arrayItemSuffix=_array_item,mapItemSuffix=_map_item\n")),(0,i.kt)("p",null,"Note: Only arrayItemSuffix, mapItemSuffix are supported at the moment. ",(0,i.kt)("inlineCode",{parentName:"p"},"SKIP_SCHEMA_REUSE=true")," is a special value to skip reusing inline schemas."),(0,i.kt)("h2",{id:"openapi-normalizer"},"OpenAPI Normalizer"),(0,i.kt)("p",null,"OpenAPI Normalizer (off by default) transforms the input OpenAPI doc/spec (which may not perfectly conform to the specification) to make it workable with OpenAPI Generator. Here is a list of rules supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REF_AS_PARENT_IN_ALLOF"),": when set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", child schemas in ",(0,i.kt)("inlineCode",{parentName:"li"},"allOf")," is considered a parent if it's a ",(0,i.kt)("inlineCode",{parentName:"li"},"$ref")," (instead of inline schema).")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g java -i modules/openapi-generator/src/test/resources/3_0/allOf_extension_parent.yaml -o /tmp/java-okhttp/ --openapi-normalizer REF_AS_PARENT_IN_ALLOF=true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REMOVE_ANYOF_ONEOF_AND_KEEP_PROPERTIES_ONLY"),": when set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", oneOf/anyOf schema with only required properies only in a schema with properties will be removed. ",(0,i.kt)("a",{parentName:"li",href:"modules/openapi-generator/src/test/resources/3_0/removeAnyOfOneOfAndKeepPropertiesOnly_test.yaml"},"(example)"))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g java -i modules/openapi-generator/src/test/resources/3_0/removeAnyOfOneOfAndKeepPropertiesOnly_test.yaml -o /tmp/java-okhttp/ --openapi-normalizer REMOVE_ANYOF_ONEOF_AND_KEEP_PROPERTIES_ONLY=true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SIMPLIFY_ANYOF_STRING_AND_ENUM_STRING"),": when set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", simplify anyOf schema with string and enum of string to just ",(0,i.kt)("inlineCode",{parentName:"li"},"string"))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g java -i modules/openapi-generator/src/test/resources/3_0/simplifyAnyOfStringAndEnumString_test.yaml -o /tmp/java-okhttp/ --openapi-normalizer SIMPLIFY_ANYOF_STRING_AND_ENUM_STRING=true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SIMPLIFY_BOOLEAN_ENUM"),": when set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", convert boolean enum to just enum.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g java -i modules/openapi-generator/src/test/resources/3_0/simplifyBooleanEnum_test.yaml -o /tmp/java-okhttp/ --openapi-normalizer SIMPLIFY_BOOLEAN_ENUM=true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SIMPLIFY_ONEOF_ANYOF"),": when set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", simplify oneOf/anyOf by 1) removing null (sub-schema) or enum of null (sub-schema) and setting nullable to true instead, and 2) simplifying oneOf/anyOf with a single sub-schema to just the sub-schema itself.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g java -i modules/openapi-generator/src/test/resources/3_0/simplifyOneOfAnyOf_test.yaml -o /tmp/java-okhttp/ --openapi-normalizer SIMPLIFY_ONEOF_ANYOF=true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KEEP_ONLY_FIRST_TAG_IN_OPERATION"),": when set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", only keep the first tag in operation if there are more than one tag defined.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g java -i modules/openapi-generator/src/test/resources/3_0/enableKeepOnlyFirstTagInOperation_test.yaml -o /tmp/java-okhttp/ --openapi-normalizer KEEP_ONLY_FIRST_TAG_IN_OPERATION=true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SET_TAGS_FOR_ALL_OPERATIONS"),": when set to a string value, tags in all operatinos will reset to the string value provided.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g java -i modules/openapi-generator/src/test/resources/3_0/enableKeepOnlyFirstTagInOperation_test.yaml -o /tmp/java-okhttp/ --openapi-normalizer SET_TAGS_FOR_ALL_OPERATIONS=true\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ADD_UNSIGNED_TO_INTEGER_WITH_INVALID_MAX_VALUE"),": when set to true, auto fix integer with maximum value 4294967295 (2^32-1) or long with 18446744073709551615 (2^64-1) by adding x-unsigned to the schema")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -g java -i modules/openapi-generator/src/test/resources/3_0/addUnsignedToIntegerWithInvalidMaxValue_test.yaml -o /tmp/java-okhttp/ --openapi-normalizer ADD_UNSIGNED_TO_INTEGER_WITH_INVALID_MAX_VALUE=true\n")))}c.isMDXComponent=!0}}]);