// Uc1 Employee Present or Absent.
{
    const IS_ABSENT = 0;
    let empcheck = Math.floor(Math.random() * 10) % 2;
    if (empcheck == IS_ABSENT){
        console.log("Uc1 : Employee is Absent");
    }else{
        console.log("Uc1 : Employee is Present");
    }
}

// Uc2 Employee Salary.
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOUR = 4;
    const FULL_TIME_HOUR = 8;
    const WAGE_PER_HOUR = 20;

    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIME:
            empHrs = PART_TIME_HOUR;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOUR;
            break;
        default:
            empHrs = 0;        
    }

    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Uc2 : Emp Wage : " + empWage);
}

// Uc3 using Functions.
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOUR = 4;
    const FULL_TIME_HOUR = 8;
    const WAGE_PER_HOUR = 20;

    function getWorkingHours(empCheck){
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOUR;
            case IS_FULL_TIME:
                return FULL_TIME_HOUR;
            default:
                return 0;        
        }
    }    

    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Uc3 : Hours : " + empHrs +" "+ "Emp Wage : " + empWage);
}

// Uc4 using forLoop
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOUR = 4;
    const FULL_TIME_HOUR = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;

    function getWorkingHours(empCheck){
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOUR;
            case IS_FULL_TIME:
                return FULL_TIME_HOUR;
            default:
                return 0;        
        }
    }

    let totalEmpHrs = 0;

    for (let day = 0; day < NUM_OF_WORKING_DAYS; day++){
     let empCheck = Math.floor(Math.random() * 10) % 3;
     totalEmpHrs += getWorkingHours(empCheck);
    }

    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Uc4 : Total Hours : " + totalEmpHrs +" "+ "Total Emp Wage : " + empWage);
} 