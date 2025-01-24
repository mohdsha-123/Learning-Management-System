import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useCreateCourseMutation } from "@/features/api/courseApi";
import { toast } from "sonner";

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");

  const [createCourse, { data, isLoading, error, isSuccess }] =
    useCreateCourseMutation();

  const navigate = useNavigate();

  const getSelectedCategory = (value) => {
    setCategory(value);
  };

  const createCourseHandler = async () => {
    await createCourse({ courseTitle, category });
  };

  // for displaying the toast or message
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Course Created");
      navigate("/admin/course")
    }
  }, [isSuccess, error]);

  return (
    <div className="flex-1 mx-10">
      <div className="mb-4 ">
        <h1 className="font-bold text-xl ">
          Let's add a new course & add some basic details{" "}
        </h1>
        <p className="text-sm">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          placeat?{" "}
        </p>
      </div>
      <div className="space-y-4 ">
        <div className="">
          <Label>Title</Label>
          <Input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Your Course name"
          />
        </div>
        <div className="">
          <Label>Category</Label>
          <Select onValueChange={getSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose a Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel> Category</SelectLabel>
                <SelectItem value="Java">Java Programming</SelectItem>
                <SelectItem value="node">Node JS</SelectItem>
                <SelectItem value="springboot">Springboot</SelectItem>
                <SelectItem value="react">React JS</SelectItem>
                <SelectItem value="angular">Angular JS</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="nextjs">Next JS</SelectItem>
                <SelectItem value="full stack">
                  Full Stack Developement
                </SelectItem>
                <SelectItem value="MERN">MERN Stack Developement</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => navigate("/admin/course")}>
            Back
          </Button>
          <Button disabled={isLoading} onClick={createCourseHandler}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </>
            ) : (
              "Create"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
