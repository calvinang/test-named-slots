## Learn more at: 
  - https://stenciljs.com/docs/my-first-component

## How to create a new Component
- Create a new branch from origin/develop 
- Create a new subdirectory for your component locally under k12-commons-components. Use dashes as a separator, e.g., ```~/projects/k12-common-components/k12-banner-component``` or ```C:\projects\k12-common-components\k12-banner-component```.
- Copy all files in ```k12-common-components/k12-component-template``` to the subdirectory you created in the previous step
- Rename ```template.component.css``` and ```template.component.tsx``` so that ```template``` is replaced with the name of your component. Use dots as a separator, e.g., ```k12.banner.component.tsx```
- Modify ```[your.component.name].component.tsx```
  - Declare _@Component_ and import from _@stencil/core_
  - Assign tag property
  - Add styleUrl or styleUrls (for an array of css/scss files)
- **NOTE:**
    - Components must end with a tsx extension, not ts


###### Buildable project (remove .k12ignorebuild to be able to build via build.sh) ######
- Remove __.k12ignorebuild__ for the build.sh to build the project, otherwise the build will skip the project


###### package.json ##
- Update package.json and set the name as
  - ```"name": "@k12/k12-component-template"```
  - the name should be _@k12/k12-{project/component}_
  - Update _repository_ section

###### stencil.config.ts ##
- Update _stencil.config.ts_ and set namespace
  - namespace: **_k12-{project/component}_** (note that there is no @k12/ in this name)
    - this is the name of the script files generated under dist and www/build directories

##### index.html ##
- Update the script reference 
    - Locate the Javascript file that is located in the ```dist``` directory whose name contains the name of your component. The file has a .js extension and is typically delimited by dashes  (-), e.g., k12-banner.js.
    - Look for the script reference in index.html, e.g., ```<script src="/build/k12-tabs.js"></script>```
    - Change ```k12-tabs.js``` to the name of the file you located in the ```dist``` directory above.
      - Per our example above, the script reference would be changed to ```<script src="/build/k12-banner.js"></script>```.
- Update the app tag with correct data
    - For example, change ```<app-template name = "This is a test"></app-template>``` to  ```<app-banner name = "This is a test"></app-banner>```

##### Build ##
- ``` npm run build ```
- ``` npm pack . ```

## Important
  - Make sure to update the readme.md file to provide the usage/update details and how to(s) information

=====================================================
# =============== EXAMPLE README: ===================
=====================================================
# K12 Button Toggle Component
  ** Provides a ButtonToggle tag **  

## How To Use

###### To run locally
```
npm install
npm run start
```

###### To Setup locally
``` git clone git@bitbucket.org:DevelopmentOps/k12-commons-components.git ```
``` cd k12-commons-components ```
``` sh build2.sh ```
``` cd to angular project ```
``` npm link @k12/k12-commons ```


###### To Use in Angular App
- Add the following in the main.ts file
  - ``` import {defineCustomElements as k12buttontoggle} from _'@k12/k12-button-toggle'; ```
  - ``` k12buttontoggle(window); ```
    
  - Use the tag (Angular v2+):
    
    - ```<app-button-toggle heading = "Button Heading" selected = "selectedButton" buttons = "buttonsStringArray"></app-button-toggle>```
    - heading is to provide a heading that will be set next to the buttons
    - selected is to have a button pre-selected
    - buttons is an array of Strings for button text
      
###### Pre-assigned CSS Classes
  - Utilizes the css: 
  ```<div class = "k12-button-toggle-container">
        <span class = "k12-button-toggle-heading">{this.heading ? <h2>{this.heading}</h2> : ''}</span>
        <span class = "k12-button-toggle-buttons">
          {this.buttons ? this.buildButtons() : ''}
        </span>
      </div>```
  - To provide custom CSS, an anchor class is available: 
    - k12-button-toggle-container: For the buttons container
    - k12-button-toggle-heading: For the Button header
    - k12-button-toggle-buttons: The buttons collection 
###### Events 
  - Emmits the following events:
    - selectedBtnEvent: 
      - When a button is clicked, the text is emmitted

###### Making new changes
  - Checkout the project
  - Make changes
  - ** Update the version **
  - cd to the project folder
    - ``` npm run build ```