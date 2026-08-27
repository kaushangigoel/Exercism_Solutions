class Badge {
    public String print(Integer id, String name, String department) {
        String badge="";
        if (id!=null)
            badge+="["+id+"] - ";
        badge+= name + " - ";
        if(department ==null)
            badge+="OWNER";
        else
            badge+=department.toUpperCase();
        return badge;
        
            
    }
}
