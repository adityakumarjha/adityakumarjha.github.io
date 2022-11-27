function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " container";
}

function Ambulance() {
  alert("Ambulance has been notified");
}

function PHC() {
  alert("nearest PHC Details: +91xxxxxxxxxx");
}

function Staff() {
  alert("PHC staffs have been notified");
}

function Submit() {
  alert("Details have been submitted");
}

var buildingList = [{
    "BuildingName": "Adler Journalism and Mass Communication Building",
        "BuildingNumber": "0456"
}, {
    "BuildingName": "Art Building",
        "BuildingNumber": "0021"
}];

var dropDown = document.getElementById('symptoms');

// iterate through the list
for (i = 0; i < buildingList.length; i++) {

    // create a new element
    var listItem = document.createElement("li");

    // set the value 
    listItem.innerHTML = '<a role="menuitem" href=' + buildingList[i].BuildingName + '>' + buildingList[i].BuildingName + '</a>'

    // append the item to the list
    dropDown.appendChild(listItem);
}

// require(["require", "exports", "knockout", "ojs/ojbootstrap", "ojs/ojarraydataprovider", "ojs/ojlistdataproviderview", "text!../cookbook/dataCollections/table/shared/departmentData.json", "ojs/ojdataprovider", "ojs/ojknockout", "ojs/ojtable", "ojs/ojinputtext"], function (require, exports, ko, ojbootstrap_1, ArrayDataProvider, ListDataProviderView, deptData, ojdataprovider_1) {
//   "use strict";
  
  class ViewModel {
      constructor() {
          this.filter = ko.observable('');
          this.baseDeptArray = JSON.parse(deptData);
          this.generateDeptArray = (num) => {
              const deptArray = [];
              let count = 0;
              for (let i = 0; i < num; i++) {
                  for (let j = 0; j < this.baseDeptArray.length; j++) {
                      deptArray[count] = {
                          DepartmentId: this.baseDeptArray[j].DepartmentId + count.toString(),
                          DepartmentName: this.baseDeptArray[j].DepartmentName + count.toString(),
                          LocationId: this.baseDeptArray[j].LocationId,
                          ManagerId: this.baseDeptArray[j].ManagerId
                      };
                      count++;
                  }
              }
              return deptArray;
          };
          this.deptArray = this.generateDeptArray(1000);
          this.dataprovider = ko.computed(function () {
              let filterCriterion = null;
              if (this.filter() && this.filter() != '') {
                  filterCriterion = ojdataprovider_1.FilterFactory.getFilter({
                      filterDef: { text: this.filter() }
                  });
              }
              const arrayDataProvider = new ArrayDataProvider(this.deptArray, { keyAttributes: 'DepartmentId' });
              return new ListDataProviderView(arrayDataProvider, { filterCriterion: filterCriterion });
          }, this);
          this.handleValueChanged = () => {
              this.filter(document.getElementById('filter').rawValue);
          };
          this.highlightingCellRenderer = (context) => {
              let field = null;
              if (context.columnIndex === 0) {
                  field = 'DepartmentId';
              }
              else if (context.columnIndex === 1) {
                  field = 'DepartmentName';
              }
              else if (context.columnIndex === 2) {
                  field = 'LocationId';
              }
              else if (context.columnIndex === 3) {
                  field = 'ManagerId';
              }
              let data = context.row[field].toString();
              const filterString = this.filter();
              let textNode;
              let spanNode = document.createElement('span');
              if (filterString && filterString.length > 0) {
                  const index = data.toLowerCase().indexOf(filterString.toLowerCase());
                  if (index > -1) {
                      const highlightedSegment = data.substr(index, filterString.length);
                      if (index !== 0) {
                          textNode = document.createTextNode(data.substr(0, index));
                          spanNode.appendChild(textNode);
                      }
                      let bold = document.createElement('b');
                      textNode = document.createTextNode(highlightedSegment);
                      bold.appendChild(textNode);
                      spanNode.appendChild(bold);
                      if (index + filterString.length !== data.length) {
                          textNode = document.createTextNode(data.substr(index + filterString.length, data.length - 1));
                          spanNode.appendChild(textNode);
                      }
                  }
                  else {
                      textNode = document.createTextNode(data);
                      spanNode.appendChild(textNode);
                  }
              }
              else {
                  textNode = document.createTextNode(data);
                  spanNode.appendChild(textNode);
              }
              context.parentElement.appendChild(spanNode);
          };
          this.columnArray = [
              { headerText: 'Department Id', renderer: this.highlightingCellRenderer, id: 'depId' },
              { headerText: 'Department Name', renderer: this.highlightingCellRenderer, id: 'depName' },
              { headerText: 'Location Id', renderer: this.highlightingCellRenderer, id: 'locId' },
              { headerText: 'Manager Id', renderer: this.highlightingCellRenderer, id: 'manId' }
          ];
      }
  }
  (0, ojbootstrap_1.whenDocumentReady)().then(function () {
      ko.applyBindings(new ViewModel(), document.getElementById('mainContent'));
  });
});
